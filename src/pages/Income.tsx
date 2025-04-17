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

        <h1>Rincian Anggaran</h1>
        <div
          className="flex-row p-1 ms-5 text-center"
          style={{ width: "80vw" }}
        >
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
