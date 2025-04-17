import Navbar from "@/component/Navbar";
import Home from "@/asset/Home.png";
import Computer from "@/asset/Computer.png";
import Chart from "@/asset/Chart.png";
import Book from "@/asset/Book.png";
import Image from "next/image";
import { useYear } from "@/component/ContexAPI";
import Notes from "../component/BudgetNotes";
import Filter from "@/component/filter";

export default function Coba() {
  const { selectedYear } = useYear();
  return (
    <div className="color ">
      <Navbar />
      <div className="main ">
        <h1 className="font text-center">WEBSITE ANGGARAN</h1>
        <h1 className=" text-center">DESA GENDING</h1>
      </div>
      <div className="Content">
        <div className="fs-5 px-5 ms-1   mt-5 py-5 d-flex">
          <p>
            Selamat datang di situs visualisasi resmi Desa Gending, Kabupaten
            Probolinggo. Melalui platform ini, kami berkomitmen menyajikan
            informasi desa secara mudah diakses, cepat diperoleh, dan akurat
            disajikan untuk seluruh masyarakat. Dapatkan informasi terkini
            mengenai anggaran desa, program pembangunan, laporan keuangan, serta
            berita dan kegiatan desa dalam satu tempat yang transparan dan
            terpercaya.
          </p>
          <div className="Box">
            <Image src={Home} alt="Logo" width={140} height={120} />
            <Image
              style={{ position: "absolute", top: "110px", left: "180px" }}
              src={Computer}
              alt="Logo"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="fs-5 px-5 me-1 text-end  mt-5 py-5 d-flex">
          <div className="Box">
            <Image src={Chart} alt="Logo" width={140} height={120} />
          </div>
          <p>
            Tujuan utama dari platform ini adalah untuk memberikan kemudahan
            bagi masyarakat dalam memahami, memantau, dan ikut serta mengawasi
            pengelolaan anggaran desa secara terbuka dan bertanggung jawab.
            Melalui visualisasi data dan informasi yang disajikan secara
            sistematis, diharapkan masyarakat dapat lebih aktif dalam menjaga
            transparansi, serta mendorong terciptanya pemerintahan desa yang
            akuntabel dan partisipatif.
          </p>
        </div>
      </div>
      <div className="APBD d-flex px-5">
        <Image
          className="mt-5"
          src={Book}
          width={450}
          height={450}
          alt="Book Icon"
        />

        <div className="sub-content">
          <h1>APB DESA {selectedYear}</h1>
          <p style={{ fontSize: "20px" }}>
            Berikut merupakan akumulasi dar pendapatan desa seperti{" "}
            <span style={{ color: "#085946", fontWeight: "700" }}>
              Pendapatan Desa
            </span>
            ,{" "}
            <span style={{ color: "#ff1500", fontWeight: "700" }}>
              Belanja Desa
            </span>{" "}
            dan{" "}
            <span style={{ color: "#00a2ff", fontWeight: "700" }}>
              Alokasi Dana Terbesar
            </span>{" "}
            pada tahun {selectedYear}
          </p>
          <Filter />

          <Notes />
        </div>
      </div>
    </div>
  );
}
