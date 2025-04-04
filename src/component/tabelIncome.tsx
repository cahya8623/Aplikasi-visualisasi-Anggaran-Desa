import { useEffect, useState } from "react";
import Button from "./Button";
import ModalBoxIncome, { useModal } from "./ModalBoxIncome";

type Databases = {
  id: number;
  amount: number;
  source: string;
  keterangan?: string;
  date: string;
};

type TableIncomeProps = {
  width?: string;
  height?: string;
  TableHead?: string;
  showTable: boolean;
  submit: DataItem[];
  setSubmit: React.Dispatch<React.SetStateAction<DataItem[]>>;
};
interface DataItem {
  jmlPendapatan: number;
  Sumber: string;
}

export default function TableIncome({
  width = "90vw",
  height = "80vh",
  TableHead = "table-info",
  showTable = false,
  submit,
  setSubmit,
}: TableIncomeProps) {
  const { isModalShow, closeModal, showModal } = useModal();
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Databases[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/pemasukan")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [submit]);

  const limit = 5;
  const maxVisible = 1;
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
    <div>
      <table
        className="table table-hover p-0 text-center    "
        style={{ width, height }}
      >
        <thead className={TableHead}>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Tanggal</th>
            <th scope="col">Jumlah Pendapatan</th>
            <th scope="col">Sumber Pendapatan</th>
            {showTable && <th scope="col">Aksi</th>}
          </tr>
        </thead>
        <tbody>
          {data.slice(start, end).map((item: Databases, index) => (
            <tr key={item.id}>
              <td className="text-center">{(page - 1) * limit + index + 1}</td>
              <td className="text-center">{item.date}</td>
              <td className="text-center">Rp.{item.amount.toLocaleString()}</td>
              <td className="text-center">{item.source}</td>
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
      <div>
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className="p-2  bg-gray-200 rounded"
        >
          &lt;First
        </button>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="p-2  bg-gray-200 rounded"
        >
          &lt; Prev
        </button>

        {getPaginationRange().map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            disabled={true}
            className={`p-2  rounded `}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPage))}
          disabled={page >= totalPage}
          className="p-2 bg-gray-200 rounded"
        >
          Next &gt;
        </button>
        <button
          onClick={() => setPage(totalPage)}
          disabled={page >= totalPage}
          className="p-2 bg-gray-200 rounded"
        >
          Last&gt;
        </button>
      </div>

      <ModalBoxIncome
        ShowValue={true}
        selectedValue={inputValue}
        ShowSubmit={false}
        first="Jumlah Pendapatan"
        ShowInput={true}
        ShowForm={true}
        second="Sumber Pendapatan"
        isShow={isModalShow}
        onCloseModal={closeModal}
        submit={submit}
        setSubmit={setSubmit}
      />
    </div>
  );
}
