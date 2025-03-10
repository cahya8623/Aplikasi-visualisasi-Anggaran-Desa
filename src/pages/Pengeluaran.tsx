import Expense from "@/component/Expenses";
import ModalBox, { useModal } from "@/component/ModalBox";
import Sidebar from "@/component/sidebar";
import React from "react";

export default function Pengeluaran() {
  const { isModalShow, closeModal, showModal } = useModal();
  return (
    <div className="d-flex vw-100 vh-100">
      <Sidebar />
      <div className="Home p-0 bg-light-subtle ">
        <section className=" bg-dark-subtle p-3 text-dark rounded py-20">
          <h1 className="fw-bold">Halaman Pengeluaran</h1>
        </section>
        <button
          onClick={showModal}
          type="button"
          className=" ms-5 mb-3 mt-4 btn btn-success"
        >
          <i className="bi bi-plus-circle"></i> Tambah
        </button>
        <Expense ShowTable={true} width="20vw" height="50px" />
        <ModalBox
          first="Kebutuhan"
          second="Total Belanja"
          ShowInput={true}
          isShow={isModalShow}
          onCloseModal={closeModal}
        />
      </div>
    </div>
  );
}
