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
import Filter from "@/component/filter";
import Navbar from "@/component/Navbar";
import ComparationChart from "./Line";
import TableInfo from "./TableInfo";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function APDES() {
  return (
    <div className="main max-vh-100  ">
      <div className=" pb-1" style={{ paddingTop: "100px" }}>
        {/* Navbar */}
        <Navbar />

        {/* Box Content */}

        {/* Budget Notes */}
        {/* <Notes /> */}

        <div style={{ width: "100vw", height: "500px" }}>
          <Filter />
          <DoughnutChart />
        </div>
        <p className="mt-5 fw-3 fs-5 text-center">
          Diagram di atas menunjukkan presentase alokasi dana anggaran desa,
          menggambarkan bagaimana setiap pos anggaran dialokasikan untuk
          berbagai kebutuhan
        </p>

        <TableInfo />

        <h1 className="ms-3" style={{ marginTop: "150px" }}>
          Perbandingan Anggaran Tahunan
        </h1>
        <div style={{ width: "98vw", height: "70vh" }}>
          <ComparationChart />
        </div>
      </div>
    </div>
  );
}
