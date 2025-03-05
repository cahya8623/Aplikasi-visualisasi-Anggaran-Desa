import Expense from "@/component/Expenses";
import Sidebar from "@/component/sidebar";
import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <div className="gap-2">
        <button type="button" className="m-2 btn btn-primary">
          <i className="bi bi-pencil-fill"></i> Edit
        </button>
        <button type="button" className="btn btn-danger">
          <i className="bi bi-trash3-fill"></i> Hapus
        </button>
      </div>
    );
  }
}

export default function Pengeluaran() {
  return (
    <div className="d-flex vw-100 vh-100">
      <Sidebar />
      <div className="Home p-0 bg-light-subtle ">
        <section className=" bg-dark-subtle p-3 text-dark rounded py-20">
          <h1 className="fw-bold">Halaman Pengeluaran</h1>
        </section>
        <button type="button" className=" ms-5 mb-3 mt-4 btn btn-success">
          <i className="bi bi-plus-circle"></i> Tambah
        </button>
        <Expense ShowTable={true} width="20vw" height="100px" />
      </div>
    </div>
  );
}
