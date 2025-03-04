import Sidebar from "@/component/sidebar";
import TableIncome from "@/component/tabelIncome";

export default function Income() {
  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <div className="Home   p-0 bg-light-subtle ">
        <section className=" bg-dark-subtle p-3 text-dark rounded py-20">
          <h1 className="fw-bold">Halaman Pemasukan</h1>
        </section>

        <button type="button" className=" ms-5 my-3 btn btn-success">
          <i className="bi bi-plus-circle"></i> Tambah
        </button>
        <div className="ms-5">
          <TableIncome width="70vw" height="70vh" />
        </div>
      </div>
    </div>
  );
}
