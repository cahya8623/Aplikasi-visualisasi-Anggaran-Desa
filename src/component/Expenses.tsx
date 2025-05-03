import { useEffect, useState } from "react";
import Button from "./Button";
import ModalBox, { useModal } from "./ModalBoxExpense";
import ModalBoxExpense from "./ModalBoxExpense";
import { useYear } from "./ContexAPI";

type Measuring = {
  width: string;
  height: string;
  ShowTable?: boolean;
  TableHead?: string;
  submit: DataItem[];
  setSubmit: React.Dispatch<React.SetStateAction<DataItem[]>>;
  isShow: boolean;
};

type Databases = {
  id: number;
  date: string;
  kebutuhan: string;
  expense: number;
  keterangan: string;
};

interface DataItem {
  kebutuhan: string;
  total: number;
  keterangan: string;
}
export default function Expense({
  ShowTable = true,
  TableHead = "table-info",
  submit,
  setSubmit,
  isShow,
}: Measuring) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Databases[]>([]);
  const [inputValue, setInputValue] = useState("");
  const { selectedYear, confirm } = useYear();
  const [currentPage, setCurrentPage] = useState(1);
  const { isModalShow, closeModal, showModal } = useModal();
  const [selectedKeterangan, setSelectedKeterangan] = useState(null);

  useEffect(() => {
    const url = isShow
      ? `http://localhost:3000/api/pengeluaran?year=${selectedYear}`
      : `http://localhost:3000/api/pengeluaran`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [submit, selectedYear, confirm]);

  function onClickEdit(item) {
    setInputValue(item);
    showModal();
  }
  console.log("ini page : " + page);
  console.log("ini cuerentPage : " + currentPage);
  const maxVisible = 3;
  const limit = 5;
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

  function handleClick() {
    setPage(page);
    setCurrentPage(page);
  }
  function onClickDelete(id) {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (!confirmDelete) return;
    fetch(`/api/pengeluaran?id=${id}`, { method: "DELETE" })
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

  const start = (page - 1) * limit;
  const end = start + limit;
  function handleShowModal(keterangan) {
    setSelectedKeterangan(keterangan);
  }

  return (
    <div>
      <table className="table table-hover align-text-center  mt-1  ">
        <thead className={TableHead}>
          <tr className="text-center">
            <th scope="col">No</th>
            <th scope="col">Tanggal</th>
            <th scope="col">Kebutuhan</th>
            <th scope="col">Total Belanja</th>
            <th scope="col">Keterangan</th>
            {ShowTable && <th scope="col">Aksi</th>}
          </tr>
        </thead>
        <tbody className="table-light">
          {data.slice(start, end).map((item: Databases, index) => (
            <tr key={item.id}>
              <td className="text-center">{(page - 1) * limit + index + 1}</td>
              <td className="text-center">{item.date}</td>
              <td className="text-center">{item.kebutuhan}</td>
              <td className="text-center">
                Rp.{item.expense.toLocaleString()}
              </td>
              <td onClick={() => handleShowModal(item.keterangan)}>
                <div className="scroll-keterangan">{item.keterangan}</div>
              </td>
              {ShowTable && (
                <td>
                  <div className="gap-2 d-flex">
                    <button
                      onClick={() => onClickEdit(item.id)}
                      type="button"
                      className="m-2 btn btn-primary"
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
      {selectedKeterangan && (
        <div
          onClick={() => setSelectedKeterangan(null)}
          className="vw-100 vh-100 position-fixed "
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            top: 0,
            left: 0,
            minHeight: "100vh",
          }}
        >
          <div className="ModalBox">{selectedKeterangan}</div>
        </div>
      )}

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
      <ModalBoxExpense
        selectedValue={inputValue}
        submit={submit}
        setSubmit={setSubmit}
        first="kebutuhan"
        ShowSubmit={false}
        second="Total Belanja"
        ShowInput={true}
        ShowForm={true}
        isShow={isModalShow}
        onCloseModal={closeModal}
      />
    </div>
  );
}
