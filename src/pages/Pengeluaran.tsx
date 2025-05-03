import Expense from "@/component/Expenses";
import { adminContext } from "@/component/LoginContex";
import ModalBoxExpense, { useModal } from "@/component/ModalBoxExpense";
// import ModalBoxExpense from "@/component/ModalBoxExpense";
import Sidebar from "@/component/sidebar";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

interface DataItem {
  kebutuhan: string;
  total: number;
  keterangan: string;
}
export default function Pengeluaran() {
  const { isModalShow, closeModal, showModal } = useModal();
  const [submit, setSubmit] = useState<DataItem[]>([]);
  const { login } = useContext(adminContext);
  const router = useRouter();

  useEffect(() => {
    if (!login) {
      router.push("/login");
    }
  }, [login]);

  if (!login) return null;

  return (
    <div className="d-flex vw-100 vh-100">
      <Sidebar />
      <div className="Home pb-3 bg-light-subtle " style={{ height: "110%" }}>
        <section className="ps-4 shadow p-2 mb-4 bg-white rounded">
          <h1 className="fw-bold text-secondary">Halaman Pengeluaran</h1>
        </section>
        <button
          onClick={showModal}
          type="button"
          className=" ms-5 mb-3 mt-4 btn btn-success"
        >
          <i className="bi bi-plus-circle"></i> Tambah
        </button>
        <div className="px-5">
          <Expense
            isShow={false}
            setSubmit={setSubmit}
            submit={submit}
            ShowTable={true}
            width="20vw"
            height="50px"
          />

          <ModalBoxExpense
            submit={submit}
            setSubmit={setSubmit}
            ShowSubmit={true}
            first="kebutuhan"
            second="Total Belanja"
            ShowInput={true}
            ShowForm={true}
            isShow={isModalShow}
            onCloseModal={closeModal}
          />
        </div>
      </div>
    </div>
  );
}
