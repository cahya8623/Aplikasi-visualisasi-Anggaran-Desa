import Navbar from "@/component/Navbar";
import logo from "@/asset/Kabupaten.png";
import { Contact, HandCoins, IdCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import News from "@/component/News";

export default function Coba() {
  return (
    <div className="container-fluid p-0 m-0">
      <Navbar />
      <div className="background"></div>
      <h1 className="Heading">
        Selamat Datang <br />
        Website Resmi Desa Gending
      </h1>
      <h5 className="Heading-2">
        Sumber informasi terbaru tentang pemerintahan di Desa Gending
      </h5>

      <div className="w-100 bg-dark pt-5 ">
        <hr className="line" />
        <div className="hero-1">
          <h1>JELAJAHI DESA</h1>
          <p>
            Melalui website ini Anda dapat menjelajahi segala hal yang terkait
            dengan Desa. <br />
            mulai dari Profil Desa, Anggaran Pendapatan dan Belanja Desa (APBD),
            hingga informasi kontak perangkat desa
          </p>
        </div>
        <hr className="line" style={{ marginLeft: "39%" }} />

        <div className="w-100 p-5 d-flex justify-content-center gap-3 mb-5">
          <Link href="/Profil">
            <div className="square ">
              <IdCard stroke="whitesmoke" size={135} strokeWidth={1} />
              <p>Profil Desa</p>
            </div>
          </Link>

          <Link href="/Kontak">
            <div className="square">
              <Contact stroke="whitesmoke" size={130} strokeWidth={1} />
              <p className="mt-2">Kontak</p>
            </div>
          </Link>

          <Link href="/APDES">
            <div className="square">
              <HandCoins stroke="whitesmoke" size={135} strokeWidth={1} />
              <p className="mt-2">APBD</p>
            </div>
          </Link>
        </div>

        <div className="w-100 bg-dark p-5  d-flex justify-content-around">
          <div
            style={{
              width: "410px",
              height: "400px",
              backgroundColor: "#537D5D",
              borderRadius: "50%",
              padding: "80px 100px 10px 80px",
              alignItems: "center",
              paddingRight: "100px",
              paddingLeft: "80px",
              marginRight: "100px",
            }}
          >
            <Image src={logo} alt="logo desa" width={250} height={300} />
          </div>
          <div className="w-50 d-flex justify-content-center flex-column">
            <h1 className="fw-bold text-info">Sambutan Kepala Desa</h1>
            <p className="w-100 lh-lg">
              <span className="fs-5 fw-bold">
                Assalamu Alaikum Warohmatullahi Wabarakatu
              </span>{" "}
              <br />
              Website ini hadir sebagai wujud transformasi desa gending menjadi
              desa yang mampu memanfaatkan teknologi informasi dan komunikasi,
              terintegrasi kedalam sistem online. Keterbukaan informasi publik,
              pelayanan publik dan kegiatan perekonomian di desa, guna
              mewujudkan desa gending sebagai desa wisata yang berkelanjutan,
              adaptasi dan mitigasi terhadap perubahan iklim serta menjadi desa
              yang mandiri. Terima kasih kepada semua pihak yang telah banyak
              memberi dukungan dan kontribusi baik berupa tenaga, pikiran dan
              semangat,
            </p>
          </div>
        </div>

        <div className="box-swiper">
          <News />
        </div>
      </div>
    </div>
  );
}
