import { adminContext } from "@/component/LoginContex";
import Sidebar from "@/component/sidebar";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function Laporan() {
  const { login } = useContext(adminContext);
  const router = useRouter();

  useEffect(() => {
    if (!login) {
      router.push("/login");
    }
  }, [login]);

  if (!login) return null;
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="Home p-0 bg-light-subtle vh-100">
        <section className=" ps-4 shadow p-2 mb-4 bg-white rounded">
          <h1 className="fw-bold text-secondary">Halaman Belanja Desa</h1>
        </section>
        <table></table>
      </div>
    </div>
  );
}
