import DoughnutChart from "@/component/Dougnut";
import Filter from "@/component/filter";
import ComparationChart from "@/component/lineChart";
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
import { useYear } from "@/component/ContexAPI";
import Navbar from "@/component/Navbar";

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
  const { selectedYear } = useYear();

  console.log("Select Year : " + selectedYear);

  return (
    <div className="main max-vh-100 bg-light ">
      {/* Navbar */}
      <Navbar />

      {/* Box Content */}

      <div
        className="min-vh-100 mt-4 p-3 rounded container-lg text-black bg-info-subtle"
        style={{ border: "5px dashed grey" }}
      >
        <h1 className="fs-3 fw-bolder text-center m-4">CATATAN ANGGARAN</h1>
        {/* Budget Notes */}
        {/* <Notes /> */}

        <Filter />

        {/* Pie Chart */}
        <div style={{ marginLeft: "21vw" }}>
          <DoughnutChart />
        </div>
        <p className="mt-5 fs-5 text-center">
          Diagram di atas menunjukkan alokasi dana anggaran desa, menggambarkan
          bagaimana setiap pos anggaran dialokasikan untuk berbagai kebutuhan
          guna memastikan transparansi dan efektivitas dalam pengelolaan
          keuangan desa
        </p>

        {/* Rincian Anggaran */}
        <h1>Rincian Anggaran</h1>
        <div
          className="flex-row p-1 ms-5 text-center"
          style={{ width: "80vw" }}
        >
          <h1 className="my-4">Daftar Pengeluaran</h1>
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
        <div className="mt-5 ms-3 p-2 ">
          <ComparationChart />
        </div>
      </div>
    </div>
  );
}
