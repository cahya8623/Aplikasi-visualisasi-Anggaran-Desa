import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathName = usePathname();
  return (
    <div className="vh-100 position-fixed">
      <div
        className="position-static d-flex vh-100 flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "280px" }}
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
          <li className="nav-item">
            <Link
              href="/Home"
              className={` nav-link text-white ${
                pathName === "/Home" ? "clicked" : ""
              }`}
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/income"
              className={`nav-link  text-white ${
                pathName === "/income" ? "clicked" : ""
              }`}
            >
              Pemasukan
            </Link>
          </li>
          <li>
            <Link
              href="/Pengeluaran"
              className={`nav-link  text-white ${
                pathName === "/Pengeluaran" ? "clicked" : ""
              }`}
            >
              Pengeluaran
            </Link>
          </li>
          <li>
            <Link
              href="/Laporan"
              className={`nav-link  text-white ${
                pathName === "/Laporan" ? "clicked" : ""
              }`}
            >
              Laporan
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
