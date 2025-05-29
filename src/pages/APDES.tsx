import DoughnutChart from "@/component/Dougnut";
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
import Filter from "@/component/filter";
import Navbar from "@/component/Navbar";
import TableIncome from "@/component/tabelIncome";
import { useState } from "react";
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

interface DataItem {
  jmlPendapatan: number;
  Kode: number;
  Source: string;
}

interface Expenses {
  kebutuhan: string;
  total: number;
  Realisasi: number;
}

export default function APDES() {
  const [incomeSubmit, setIncomeSubmit] = useState<DataItem[]>([]);
  const [expenseSubmit, setExpenseSubmit] = useState<Expenses[]>([]);
  //   const { selectedYear } = useYear();
  return (
    <div>
      <div className="main max-vh-100  ">
        {/* Navbar */}
        <Navbar />

        {/* Box Content */}

        {/* Budget Notes */}
        {/* <Notes /> */}

        <Filter />
        <div>
          <DoughnutChart />
        </div>
        <p className="mt-5 fs-5 text-center">
          Diagram di atas menunjukkan alokasi dana anggaran desa, menggambarkan
          bagaimana setiap pos anggaran dialokasikan untuk berbagai kebutuhan
          guna memastikan transparansi dan efektivitas dalam pengelolaan
          keuangan desa
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
        {/* Pie Chart */}

        <div className="p-1 px-5 text-center" style={{ width: "100vw" }}>
          <h1 className="my-4">Anggaran Pendapatan Desa</h1>
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
        <ComparationChart />
      </div>
    </div>
  );
}
