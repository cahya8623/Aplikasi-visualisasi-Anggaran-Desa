import { useState } from "react";
import Button from "./Button";

export default function Paginition() {
  const data = [
    { id: 1, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 2, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 3, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 4, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 5, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 1, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 2, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 3, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 4, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 5, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 1, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 2, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 3, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 4, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 5, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 1, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 2, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 3, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 4, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 5, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 1, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 2, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 3, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 4, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 5, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 1, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 2, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 3, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 4, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 5, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 1, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
  ];

  const [page, setPage] = useState(1);
  const limit = 4;
  const totalPage = Math.ceil(data.length / limit);

  const start = (page - 1) * limit;
  const end = start + limit;
  return (
    <div>
      {Array.from(Array(totalPage)).map((_, index) => (
        <button className="p-5" key={index} onClick={() => setPage(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}
