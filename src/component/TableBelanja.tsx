/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import { useYear } from "./ContexAPI";
import ModalBoxBelanja, { useModal } from "./ModalBoxBelanja";

type Databases = {
  Status: number;
  id: number;
  Anggaran: number;
  Belanja: string;
  date: string;
};

type TableIncomeProps = {
  width?: string;
  height?: string;
  TableHead?: string;
  showTable: boolean;
  submit: DataItem[];
  setSubmit: React.Dispatch<React.SetStateAction<DataItem[]>>;
  isShow: boolean;
};

interface DataItem {
  Anggaran: number;
  Belanja: string;
}

export default function TableIncome({
  showTable = true,
  submit,
  setSubmit,
  isShow,
}: TableIncomeProps) {
  const { isModalShow, closeModal, showModal } = useModal();
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Databases[]>([]);
  const [inputValue, setInputValue] = useState("");
  const { selectedYear, confirm } = useYear();
  const [lampuState, setLampuState] = useState<{ [key: number]: boolean }>({});
  const [nyala, setNyala] = useState(true);

  const toggleLampu = async (id: number) => {
    const newStatus = !lampuState[id];
    setNyala(!nyala);

    setLampuState((prev) => ({
      ...prev,
      [id]: newStatus,
    }));

    try {
      await fetch("/api/Belanja", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          status: newStatus ? 1 : 0,
        }),
      });
    } catch (error) {
      console.error("Gagal update status:", error);
    }
  };

  useEffect(() => {
    const url = isShow
      ? `http://localhost:3000/api/Belanja?year=${selectedYear}`
      : `http://localhost:3000/api/Belanja`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        const initialLampuState = data.data.reduce((acc: any, item: any) => {
          acc[item.id] = item.Status === 1;
          return acc;
        }, {});
        setLampuState(initialLampuState);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [submit, selectedYear, confirm, nyala]);

  console.log("Lampu State:" + lampuState);

  const limit = 5;
  const maxVisible = 3;
  const totalPage = Math.ceil(data.length / limit);

  const getPaginationRange = () => {
    let startPage, endPage;
    if (totalPage <= maxVisible) {
      startPage = 1;
      endPage = totalPage;
    } else {
      const middle = Math.floor(maxVisible / 2);
      if (page <= middle + 1) {
        startPage = 1;
        endPage = maxVisible;
      } else if (page + middle >= totalPage) {
        startPage = totalPage - maxVisible + 1;
        endPage = totalPage;
      } else {
        startPage = page - middle;
        endPage = page + middle;
      }
    }
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  function onClickDelete(id: number) {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (!confirmDelete) return;
    fetch(`/api/Belanja?id=${id}`, { method: "DELETE" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal menghapus data.");
        }
        return response.json();
      })
      .then(() => {
        setData(data.filter((item) => item.id !== id));
        alert("Data berhasil dihapus!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan.");
      });
  }

  function onClickEdit(item: any) {
    setInputValue(item);
    showModal();
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  return (
    <div className="d-flex flex-column justify-content-center">
      <table className="table table-hover align-text-center  mt-1 ">
        <thead className="header table-info">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Belanja</th>
            <th scope="col">Anggaran</th>
            <th scope="col">Status</th>
            {showTable && <th scope="col">Aksi</th>}
          </tr>
        </thead>
        <tbody className="header">
          {data.slice(start, end).map((item: Databases, index) => (
            <tr key={item.id}>
              <td>{(page - 1) * limit + index + 1}</td>
              <td>{item.Belanja.toLowerCase()}</td>
              <td>Rp.{item.Anggaran.toLocaleString()}</td>
              {showTable ? (
                <td>
                  <button
                    className={lampuState[item.id] ? "ButtonColor" : "belum"}
                    onClick={() => toggleLampu(item.id)}
                  >
                    {item.Status === 1
                      ? "Sudah Terealisasi"
                      : "Belum Terealisasi"}
                  </button>
                </td>
              ) : (
                <td>
                  <button
                    className={lampuState[item.id] ? "ButtonColor" : "belum"}
                    disabled
                  >
                    {item.Status === 1
                      ? "Sudah Terealisasi"
                      : "Belum Terealisasi"}
                  </button>
                </td>
              )}
              {showTable && (
                <td>
                  <div className="gap-2 d-flex">
                    <button
                      onClick={() => onClickEdit(item.id)}
                      type="button"
                      className="m-2 btn btn-primary "
                    >
                      <i className="bi bi-pencil-fill"></i> Edit
                    </button>

                    <button
                      onClick={() => onClickDelete(item.id)}
                      type="button"
                      className="m-2 btn btn-danger"
                    >
                      <i className="bi bi-trash3-fill"></i> Hapus
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginition */}
      <div className="gap-3 me-5">
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className={`p-2  bg-gray-200 border-0 ${page === 1 ? "" : "tombol"}`}
        >
          &laquo;
        </button>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`p-2  bg-gray-200 border-0 ${page === 1 ? "" : "tombol"}`}
        >
          Prev
        </button>

        {getPaginationRange().map((numberPage) => (
          <button
            key={numberPage}
            onClick={() => setPage(numberPage)}
            className={`p-2 tombol border-0 ${
              numberPage === page ? "active" : "non-active"
            } `}
          >
            {numberPage}
          </button>
        ))}

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPage))}
          disabled={page >= totalPage}
          className={`p-2 bg-gray-200 border-0 ${
            page >= totalPage ? "" : "tombol"
          }`}
        >
          Next
        </button>
        <button
          onClick={() => setPage(totalPage)}
          disabled={page >= totalPage}
          className={`p-2 bg-gray-200 border-0 ${
            page >= totalPage ? "" : "tombol"
          }`}
        >
          &raquo;
        </button>
      </div>

      <ModalBoxBelanja
        ShowValue={false}
        ShowSubmit={false}
        selectedValue={inputValue}
        submit={submit}
        setSubmit={setSubmit}
        first="Jumlah Pendapatan"
        second="Sumber Pendapatan"
        ShowInput={false}
        ShowForm={true}
        isShow={isModalShow}
        onCloseModal={closeModal}
      />
    </div>
  );
}
