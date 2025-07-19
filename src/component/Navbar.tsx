import logo from "@/asset/Kabupaten.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar-costom">
      <div className="d-flex p-1 justify-content-around container-fluid">
        {/* Logo dan Nama Desa */}
        <div className="d-flex align-items-center">
          <Link href="/">
            <Image src={logo} alt="Logo Desa" width={50} height={60} />
          </Link>
          <div className="font lh-2 py-1 ms-3">
            <p className=" m-0">Desa Gending</p>
            <p className="m-0 fw-light fst-italic">Kabupaten Probolinggo</p>
          </div>
        </div>

        <div style={{ width: "30vw", marginLeft: "450px" }}>
          <ul className="d-flex mt-3 justify-content-between m-0 fs-5 text-center">
            <li className="nav-item">
              <Link href="/" className="nav-link nav-font">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Profil" className="nav-link nav-font">
                Profil Desa
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Kontak" className="nav-link nav-font">
                Kontak
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/APDES" className="nav-link nav-font">
                Transparansi
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="nav-link terakhir">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
