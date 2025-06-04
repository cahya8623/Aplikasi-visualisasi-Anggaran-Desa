import { useEffect, useState } from "react";
import ModalBoxIncome, { useModal } from "./ModalBoxIncome";
import { useYear } from "./ContexAPI";

type Databases = {
  id: number;
  amount: number;
  // Kode: number;
  Uraian: string;
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
  jmlPendapatan: number;
  // Kode: number;
  Source: string;
}

export default function TableIncome({
  showTable = false,
  submit,
  setSubmit,
  isShow,
}: TableIncomeProps) {
  const { isModalShow, closeModal, showModal } = useModal();
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Databases[]>([]);
  const [inputValue, setInputValue] = useState("");
  const { selectedYear, confirm } = useYear();

  useEffect(() => {
    const url = isShow
      ? `http://localhost:3000/api/pemasukan?year=${selectedYear}`
      : `http://localhost:3000/api/pemasukan`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [submit, selectedYear, confirm]);

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

  function onClickDelete(id) {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (!confirmDelete) return;
    fetch(`/api/pemasukan?id=${id}`, { method: "DELETE" })
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

  function onClickEdit(item) {
    setInputValue(item);
    showModal();
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  return (
    <div className="table-responsive">
      <table className="table table-hover align-text-center  mt-1 ">
        <thead className="header table-info">
          <tr>
            <th scope="col">No</th>
            {/* <th scope="col">Kode</th> */}
            <th style={{ width: "40%" }} scope="col">
              Uraian
            </th>
            <th scope="col">Anggaran</th>
            {showTable && <th scope="col">Aksi</th>}
          </tr>
        </thead>
        <tbody className="header">
          {data.slice(start, end).map((item: Databases, index) => (
            <tr key={item.id}>
              <td>{(page - 1) * limit + index + 1}</td>
              {/* <td>{item.Kode}</td> */}
              <td
                style={{
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  // width: "40%",
                }}
              >
                {item.Uraian}
              </td>
              <td>Rp.{item.amount.toLocaleString()}</td>
              {showTable && (
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

      <ModalBoxIncome
        ShowValue={true}
        ShowSubmit={false}
        selectedValue={inputValue}
        submit={submit}
        setSubmit={setSubmit}
        first="Kode"
        ShowInput={true}
        ShowForm={true}
        second="Jumlah Anggaran"
        isShow={isModalShow}
        onCloseModal={closeModal}
      />
    </div>
  );
}
