import logo from "@/asset/Kabupaten.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-md vw-100 px-4 py-3">
      <div className="container-fluid">
        {/* Logo dan Nama Desa */}
        <div className="d-flex align-items-center">
          <Link href="/">
            <Image src={logo} alt="Logo Desa" width={50} height={60} />
          </Link>
          <div className="font lh-2 py-1 ms-3">
            <p className="fw-bold fst-italic m-0">Desa Gending</p>
            <p className="m-0 fw-light fst-italic">Kabupaten Probolinggo</p>
          </div>
        </div>

        {/* Tombol hamburger di layar kecil */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu navigasi */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarMenu"
        >
          <ul className="navbar-nav fs-5 text-center">
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

    // <div className="navbar vw-100 px-5 py-4 ">
    //   <div className="d-flex ms-4">
    //     <Link href="/">
    //       <Image src={logo} alt="Logo Desa" width={50} height={60} />
    //     </Link>
    //     <div className="font lh-2 py-1 ms-3">
    //       <p className=" fw-bold fst-italic m-0">Desa Gending</p>
    //       <p className="m-0  fw-light fst-italic">Kabupaten Probolinggo</p>
    //     </div>
    //   </div>
    //   <div className=" d-flex justify-content-around align-items-center me-5 ">
    //     <ul
    //       className="list-unstyled fs-5 d-flex justify-content-between around text-center m-0 "
    //       style={{ width: "400px" }}
    //     >
    //       <li>
    //         <Link href="/">
    //           <p className="nav-font">Home</p>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/Profil">
    //           <p className="nav-font">Profil Desa</p>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/Kontak">
    //           <p className="nav-font">Kontak</p>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/APDES">
    //           <p className="nav-font">Transparansi</p>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/login">
    //           <p className="terakhir">Login</p>
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}
