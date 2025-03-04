import Notes from "@/component/BudgetNotes";
import DoughnutChart from "@/component/Dougnut";
import Filter from "@/component/filter";
import ComparationChart from "@/component/lineChart";
import Tables from "@/component/Table";
import React from "react";
import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Index() {
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
        <Notes />

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
        <Tables />
        <h1 className="mt-5">Perbandingan Anggaran Tahunan</h1>
        <div className="mt-5 ms-3 p-2">
          <ComparationChart />
        </div>
      </div>
    </div>
  );
}
