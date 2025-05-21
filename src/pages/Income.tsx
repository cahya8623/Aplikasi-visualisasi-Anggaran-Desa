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
import TableIncome from "@/component/tabelIncome";
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
interface DataItem {
  jmlPendapatan: number;
  Sumber: string;
}

export default function Index() {
  const [incomeSubmit, setIncomeSubmit] = useState<DataItem[]>([]);
  const { selectedYear } = useYear();

  return (
    <div className="main max-vh-100  ">
      {/* Navbar */}
      <Navbar />

      {/* Box Content */}

      {/* Budget Notes */}
      {/* <Notes /> */}

      <Filter />

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
      <div className="mt-5 ms-3 p-2 ">
        <ComparationChart />
      </div>
    </div>
  );
}
