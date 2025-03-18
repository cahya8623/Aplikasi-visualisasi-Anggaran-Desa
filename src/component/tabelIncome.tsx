import { useState } from "react";
import Button from "./Button";

type TableIncomeProps = {
  width?: string;
  height?: string;
  TableHead?: string;
  showTable: boolean;
};

export default function TableIncome({
  width = "90vw",
  height = "80vh",
  TableHead = "table-info",
  showTable = false,
}: TableIncomeProps) {
  const [page, setPage] = useState(1);

  const data = [
    { id: 1, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 2, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 3, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 4, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 5, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 6, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 7, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 8, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 9, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 10, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 11, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 12, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 13, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 14, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 15, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 16, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 17, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 18, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 19, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 20, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 21, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 22, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 23, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 24, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 25, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 26, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 27, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 28, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 29, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 30, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
  ];

  console.log(page);

  const maxVisible = 1;

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
  const limit = 4;
  const totalPage = Math.ceil(data.length / limit);

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
          {data.slice(start, end).map((item) => (
            <tr key={item.id}>
              <td className="text-center">{item.id}</td>
              <td className="text-center">{item.Tanggal}</td>
              <td className="text-center">Rp.{item.Income}</td>
              <td className="text-center">{item.Source}</td>
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
    </div>
  );
}
