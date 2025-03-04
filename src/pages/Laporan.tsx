import Sidebar from "@/component/sidebar";

export default function Laporan() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="Home p-0 bg-light-subtle vh-100">
        <section className=" bg-dark-subtle p-3 text-dark rounded py-20">
          <h1 className="fw-bold">Halaman Laporan</h1>
        </section>
      </div>
    </div>
  );
}
