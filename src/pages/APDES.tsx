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

        <TableInfo />

        <h1 className="mt-5">Perbandingan Anggaran Tahunan</h1>
        <ComparationChart />
      </div>
    </div>
  );
}
