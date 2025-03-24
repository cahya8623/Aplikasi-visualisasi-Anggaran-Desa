import { useEffect, useState } from "react";
import Button from "./Button";
import ModalBoxIncome, { useModal } from "./ModalBoxIncome";

type Databases = {
  id: number;
  amount: number;
  source: string;
  keterangan: string;
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
  const { isModalShow, closeModal } = useModal();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/pemasukan")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [submit]);

  console.log(data);
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
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{item.date}</td>
              <td className="text-center">Rp.{item.amount.toLocaleString()}</td>
              <td className="text-center">{item.source}</td>
              {showTable && (
                <td>
                  <Button
                    Shown={false}
                    label1="Jumlah Pendapatan"
                    label2="Sumber Pendapatan"
                  ></Button>
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
        first="Kebutuhan"
        ShowInput={true}
        ShowForm={false}
        isShow={isModalShow}
        onCloseModal={closeModal}
        submit={submit}
        setSubmit={setSubmit}
      />
    </div>
  );
}
