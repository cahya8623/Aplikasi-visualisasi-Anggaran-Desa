import { useState } from "react";

export default function Coba2() {
  const [pendapatan, setPendapatan] = useState(0);
  const [Pengeluaran, setPengeluaran] = useState(0);

  return (
    <div className="vh-100">
      <h1>Pendapatan </h1>
      <input
        type="text"
        onChange={(e) => setPendapatan(parseInt(e.target.value))}
      />

      <h1>Pengeluran</h1>
      <input
        type="text"
        onChange={(e) => setPengeluaran(parseInt(e.target.value))}
      />

      <p>Pembelanjaan 1 : {pendapatan - Pengeluaran}</p>
    </div>
  );
}
