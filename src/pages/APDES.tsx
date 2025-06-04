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
import TablePembiayaan from "@/component/TablePembiayaan";
import TableBelanja from "@/component/TableBelanja";
import Coba2 from "./Coba2";

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
  Source: string;
}

interface Pembiayaan {
  Penerimaan: number;
  Pengeluaran: number;
}

interface Expenses {
  kebutuhan: string;
  total: number;
  Realisasi: number;
}

interface Belanja {
  Anggaran: number;
  Belanja: string;
}

export default function APDES() {
  const [incomeSubmit, setIncomeSubmit] = useState<DataItem[]>([]);
  const [expenseSubmit, setExpenseSubmit] = useState<Expenses[]>([]);
  const [Pembiayaan, setPembiayaan] = useState<Pembiayaan[]>([]);
  const [Belanja, setBelanja] = useState<Belanja[]>([]);
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
        <div style={{ width: "100vw", height: "300px" }}>
          <DoughnutChart />
        </div>
        <p className="mt-5 fs-5 text-center">
          Diagram di atas menunjukkan alokasi dana anggaran desa, menggambarkan
          bagaimana setiap pos anggaran dialokasikan untuk berbagai kebutuhan
          guna memastikan transparansi dan efektivitas dalam pengelolaan
          keuangan desa
        </p>

        {/* Rincian Anggaran */}
        {/* <div className="vw-100 d-flex flex-column align-center ps-5 justify-content-center">
          <div className="p-1 px-5 text-center" style={{ width: "90vw" }}>
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
          <div className="p-1 px-5 text-center" style={{ width: "90vw" }}>
            <TableBelanja
              isShow={true}
              submit={Belanja}
              setSubmit={setBelanja}
              showTable={false}
              TableHead="table-dark"
              width="80vw"
              height="50vh"
            />
          </div>
          <div className="p-1 px-5 text-center" style={{ width: "90vw" }}>
            <h1 className="my-4">Pembiayaan</h1>
            <TablePembiayaan
              isShow={true}
              submit={Pembiayaan}
              setSubmit={setPembiayaan}
              TableHead="table-dark"
              showTable={false}
              width="20vw"
              height="10vh"
            />
          </div>
          {/* Pie Chart */}

        {/* </div> */}

        <Coba2 />

        <h1 className="mt-5">Perbandingan Anggaran Tahunan</h1>
        <ComparationChart />
      </div>
    </div>
  );
}
