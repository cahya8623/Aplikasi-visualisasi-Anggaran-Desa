import Expense from "@/component/Expenses";
import ModalBoxExpense, { useModal } from "@/component/ModalBoxExpense";
import Sidebar from "@/component/sidebar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface DataItem {
  kebutuhan: string;
  total: number;
  Realisasi: number;
}
export default function Pengeluaran() {
  const { isModalShow, closeModal, showModal } = useModal();
  const [submit, setSubmit] = useState<DataItem[]>([]);

  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token || role !== "bendahara") {
      router.replace("/login");
    } else {
      setIsReady(true);
    }
  }, []);

  if (!isReady) return null;

  return (
    <div className="d-flex vw-100 vh-100">
      <Sidebar />
      <div className="Home pb-3 bg-light-subtle ">
        <button
          onClick={showModal}
          type="button"
          className=" ms-5 mt-3 mb-3  btn btn-success"
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
            first="Uraian"
            second="Anggaran"
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
