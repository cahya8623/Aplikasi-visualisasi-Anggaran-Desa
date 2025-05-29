import logo from "@/asset/Kabupaten.png";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Color = {
  BackgroundColor?: string;
};

export default function Navbar(props: Color) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="navbar vw-100 px-5 py-4 "
      style={{ backgroundColor: props.BackgroundColor }}
    >
      <div className="d-flex ms-4">
        <Link href="/">
          <Image src={logo} alt="Logo Desa" width={50} height={60} />
        </Link>
        <div className="font lh-2 py-1 ms-3">
          <p className=" fw-bold fst-italic m-0">Desa Gending</p>
          <p className="m-0  fw-light fst-italic">Kabupaten Probolinggo</p>
        </div>
      </div>
      <div className=" d-flex justify-content-around align-items-center me-5 ">
        <ul
          className="list-unstyled fs-5 d-flex justify-content-between around text-center m-0 "
          style={{ width: "300px" }}
        >
          <li>
            <Link href="/">
              <p className="nav-font">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/Profil">
              <p className="nav-font">Profil Desa</p>
            </Link>
          </li>
          <li>
            <Link href="/Kontak">
              <p className="nav-font">Kontak</p>
            </Link>
          </li>
          <li>
            <button
              className="border-0 bg-none d-flex align-items-center"
              // onMouseEnter={() => setOpen(true)}
              // onMouseLeave={() => setOpen(false)}
              style={{
                transition: "1s",
                width: "auto",
                marginTop: "2px",
                padding: "0",
                color: "whitesmoke",
                background: "none",
              }}
            >
              <Link href="/APDES">
                <p className="nav-font">APBDesa</p>
              </Link>
              {/* {open ? <X size={24} /> : <Menu size={24} />} */}
            </button>
          </li>
        </ul>

        {open && (
          <ul
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="dropdown-menu show mt-2"
            style={{
              display: "block",
              position: "absolute",
              right: "60px",
              top: "60px",
              backgroundColor: "whitesmoke",
              transition: "1s",
              textShadow: "0 0 0 0",
            }}
          >
            <li>
              <Link className="dropdown-item" href="/Income">
                <p>Pendapatan</p>
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/Expenses">
                <p>Realisasi</p>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
