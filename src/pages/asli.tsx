import Notes from "@/component/BudgetNotes";
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
import TableIncome from "@/component/tabelIncome";
import { useYear } from "@/component/ContexAPI";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
interface DataItem {
  jmlPendapatan: number;
  Sumber: string;
}
interface Expenses {
  kebutuhan: string;
  total: number;
  keterangan: string;
}

export default function Index() {
  const [expenseSubmit, setExpenseSubmit] = useState<Expenses[]>([]);
  const [incomeSubmit, setIncomeSubmit] = useState<DataItem[]>([]);
  const { selectedYear } = useYear();

  console.log("Select Year : " + selectedYear);

  return (
    <div className="max-vh-100 bg-light ">
      {/* Navbar */}
      <section className=" bg-primary p-3 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Visualisasi Anggaran Desa Gending
          </h1>
          <p className="text-xl">
            Selamat datang di platform visualisasi anggaran desa gending. Di
            sini, Anda dapat melihat bagaimana desa kami mengalokasikan sumber
            daya dan melacak anggaran dari waktu ke waktu.
          </p>
        </div>
      </section>

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

          <h1 className="my-4">Daftar Pemasukan</h1>
          <TableIncome
            isShow={true}
            submit={incomeSubmit}
            setSubmit={setIncomeSubmit}
            showTable={false}
            TableHead="table-dark"
            width="80vw"
            height="50vh"
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
