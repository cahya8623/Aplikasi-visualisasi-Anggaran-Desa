import Navbar from "@/component/Navbar";
import Home from "@/asset/Home.png";
import Computer from "@/asset/Computer.png";
import Chart from "@/asset/Chart.png";
import Book from "@/asset/Book.png";
import Background from "@/asset/Background2.jpg";
import Image from "next/image";
import { useYear } from "@/component/ContexAPI";
import Notes from "../component/BudgetNotes";
import Filter from "@/component/filter";
import { Contact, HandCoins, IdCard } from "lucide-react";

export default function Coba() {
  const { selectedYear } = useYear();
  return (
    <div>
      <Navbar />
      <div className="background"> </div>
      <h1 className="Heading">
        Selamat Datang <br />
        Website Resmi Desa Gending
      </h1>
      <h5 className="Heading-2">
        Sumber informasi terbaru tentang pemerintahan di Desa Gending
      </h5>

      <div className="vw-100 bg-dark pt-5 ">
        <hr className="line" />
        <div className="hero-1">
          <h1>JELAJAHI DESA</h1>
          <p>
            Melalui website ini Anda dapat menjelajahi segala hal yang terkait
            dengan Desa. <br /> Aspek pemerintahan, penduduk, demografi, potensi
            Desa, dan juga berita tentang Desa.
          </p>
        </div>
        <hr className="line" style={{ marginLeft: "39%" }} />

        <div className="vw-100 p-5 d-flex justify-content-center gap-3">
          <div className="square ">
            <IdCard size={135} strokeWidth={1} />
            <p>Profil Desa</p>
          </div>
          <div className="square">
            <Contact size={130} strokeWidth={1} />
            <p className="mt-2">Kontak</p>
          </div>
          <div className="square">
            <HandCoins size={135} strokeWidth={1} />
            <p className="mt-2">APBD</p>
          </div>
        </div>
      </div>
    </div>
  );
}
