"use client"; // kalau pakai app router

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Coba() {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="vh-100 bg-secondary d-flex justify-content-between position-relative">
      <div className="Box px-5 vw-100 d-flex justify-content-between ">
        <p>Menu</p>
        <button
          className="btn btn-primary d-flex align-items-center"
          onClick={toggleDropdown}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {open && (
          <ul
            className="dropdown-menu show mt-2"
            style={{ display: "block", position: "absolute" }}
          >
            <li>
              <a className="dropdown-item" href="#">
                Beranda
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Tentang Kami
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Layanan
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Kontak
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
