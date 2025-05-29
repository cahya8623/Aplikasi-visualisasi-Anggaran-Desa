import DoughnutChart from "@/component/Dougnut";
import Filter from "@/component/filter";

import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Expense from "@/component/Expenses";
import Navbar from "@/component/Navbar";
import ComparationChart from "./Line";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Expenses {
  kebutuhan: string;
  total: number;
  keterangan: string;
}

export default function Index() {
  const [expenseSubmit, setExpenseSubmit] = useState<Expenses[]>([]);

  return (
    <div className="main  max-vh-100  ">
      {/* Navbar */}
      <Navbar />

      {/* Box Content */}

      {/* Budget Notes */}
      {/* <Notes /> */}

      <Filter />

      {/* Pie Chart */}
      <div>
        <DoughnutChart />
      </div>
      <p className="mt-5 fs-5 text-center">
        Diagram di atas menunjukkan alokasi dana anggaran desa, menggambarkan
        bagaimana setiap pos anggaran dialokasikan untuk berbagai kebutuhan guna
        memastikan transparansi dan efektivitas dalam pengelolaan keuangan desa
      </p>

      {/* Rincian Anggaran */}
      <div className="p-1 px-5 text-center" style={{ width: "100vw" }}>
        <h1 className="my-4">Realisasi</h1>
        <Expense
          isShow={true}
          submit={expenseSubmit}
          setSubmit={setExpenseSubmit}
          TableHead="table-dark"
          ShowTable={false}
          width="20vw"
          height="10vh"
        />
      </div>
      <h1 className="mt-5">Perbandingan Anggaran Tahunan</h1>
      <ComparationChart />
    </div>
  );
}
