import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathName = usePathname();
  return (
    <div className="vh-100 position-fixed">
      <div
        className="position-static d-flex vh-100 flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "100vw" }}
      >
        <Link
          href="/"
          className={`d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none `}
        >
          <svg className="bi me-2" width="40" height="32">
            <use href="#"></use>
          </svg>
          <span className="fs-4">Admin</span>
        </Link>
        <hr />
        <ul className="nav Dashboard-sidebar nav-pills flex-column mb-auto">
          <li>
            <Link
              href="/Pendapatan"
              className={`nav-link  text-white ${
                pathName === "/Pendapatan" ? "clicked" : ""
              }`}
            >
              Pendapatan
            </Link>
          </li>
          <li>
            <Link
              href="/Belanja"
              className={`nav-link  text-white ${
                pathName === "/Belanja" ? "clicked" : ""
              }`}
            >
              Belanja
            </Link>
          </li>
          <li>
            <Link
              href="/Realisasi"
              className={`nav-link  text-white ${
                pathName === "/Realisasi" ? "clicked" : ""
              }`}
            >
              Realisasi
            </Link>
          </li>
          <li>
            <Link
              href="/Pembiayaan"
              className={`nav-link  text-white ${
                pathName === "/Pembiayaan" ? "clicked" : ""
              }`}
            >
              Pembiayaan
            </Link>
          </li>
          <li>
            <Link
              href="/Berita"
              className={`nav-link  text-white ${
                pathName === "/Berita" ? "clicked" : ""
              }`}
            >
              Berita
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
