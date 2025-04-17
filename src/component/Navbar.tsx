import logo from "@/asset/Kabupaten.png";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar vw-100  px-5 py-4 ">
      <div className="d-flex ms-4">
        <Link href="/">
          <Image src={logo} alt="Logo Desa" width={50} height={60} />
        </Link>
        <div className="font lh-2 py-1 ms-3">
          <p className="fw-bold fst-italic m-0">Desa Gending</p>
          <p className="m-0 fw-light fst-italic">Kabupaten Probolinggo</p>
        </div>
      </div>
      <div className="d-flex justify-content-around align-items-center me-5 ">
        <ul
          className="list-unstyled fs-5 d-flex justify-content-between text-center m-0 "
          style={{ width: "300px" }}
        >
          <li>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p>Kontak</p>
            </Link>
          </li>
          <li>
            <button
              className="border-0 bg-none d-flex align-items-center"
              onClick={toggleDropdown}
              style={{
                width: "auto",
                marginTop: "2px",
                padding: "0",
                color: "black",
                background: "none",
              }}
            >
              <p>APBDesa</p>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </li>
        </ul>

        {open && (
          <ul
            className="dropdown-menu show mt-2"
            style={{
              display: "block",
              position: "absolute",
              right: "60px",
              top: "70px",
            }}
          >
            <li>
              <Link className="dropdown-item" href="/Income">
                <p>Pemasukan</p>
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/Expenses">
                <p>Pengeluaran</p>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
