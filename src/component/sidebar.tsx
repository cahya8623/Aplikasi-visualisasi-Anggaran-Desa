import {
  BanknoteArrowUp,
  ChartNoAxesCombined,
  Repeat2,
  ScrollText,
  ShieldUser,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathName = usePathname();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  function onClickLogOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  }
  return (
    <div className="vh-100 position-fixed">
      <div
        className="position-static d-flex vh-100 flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "900px" }}
      >
        <Link
          href="/"
          className={`d-flex align-items-center gap-3 mb-3 ms-2 mb-md-0 me-md-auto text-white text-decoration-none `}
        >
          <ShieldUser size={50} />
          <span className="fs-3 " style={{ fontWeight: "700" }}>
            DASHBOARD
          </span>
        </Link>
        <hr />
        <ul className="nav  Dashboard-sidebar nav-pills flex-column mb-auto">
          <li className={` ${!token || role !== "bendahara" ? "disable" : ""}`}>
            <Link
              href="/Pendapatan"
              className={`nav-link d-flex text-center align-item-center gap-3 text-white ${
                pathName === "/Pendapatan" ? "clicked" : ""
              }`}
            >
              <BanknoteArrowUp size={30} />
              Pendapatan
            </Link>
          </li>
          <li className={`${!token || role !== "bendahara" ? "disable" : ""}`}>
            <Link
              href="/Belanja"
              className={`nav-link d-flex text-center align-item-center gap-3 text-white ${
                pathName === "/Belanja" ? "clicked" : ""
              }`}
            >
              <ShoppingCart size={30} />
              Belanja
            </Link>
          </li>
          <li className={`${!token || role !== "bendahara" ? "disable" : ""}`}>
            <Link
              href="/Realisasi"
              className={`nav-link d-flex text-center align-item-center gap-3 text-white ${
                pathName === "/Realisasi" ? "clicked" : ""
              }`}
            >
              <ChartNoAxesCombined size={30} />
              Realisasi
            </Link>
          </li>
          <li className={`${!token || role !== "bendahara" ? "disable" : ""}`}>
            <Link
              href="/Pembiayaan"
              className={`nav-link d-flex text-center align-item-center gap-3 text-white ${
                pathName === "/Pembiayaan" ? "clicked" : ""
              }`}
            >
              <Repeat2 size={30} />
              Pembiayaan
            </Link>
          </li>
          <li className={`${!token || role !== "admin" ? "disable" : ""}`}>
            <Link
              href="/Berita"
              className={`nav-link d-flex text-center align-item-center gap-3 text-white ${
                pathName === "/Berita" ? "clicked " : ""
              }`}
            >
              <ScrollText size={30} />
              Berita
            </Link>
          </li>
        </ul>

        <button className="Logout" onClick={onClickLogOut}>
          Log Out
        </button>
      </div>
    </div>
  );
}
