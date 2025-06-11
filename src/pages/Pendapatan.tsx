import { adminContext } from "@/component/LoginContex";
import ModalBoxIncome, { useModal } from "@/component/ModalBoxIncome";
import Sidebar from "@/component/sidebar";
import TableIncome from "@/component/tabelIncome";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

interface DataItem {
  jmlPendapatan: number;
  // Kode: number;
  Source: string;
}

export default function Pemasukan() {
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
    <div className=" w-100 d-flex vh-100">
      <Sidebar />
      <div className="Home container-fluid pb-2 p-0 bg-light-subtle ">
        <section className="shadow ps-4 p-2 mb-1 bg-white rounded">
          <h1 className="fw-bold text-secondary">Halaman Pendapatan</h1>
        </section>

        <button
          onClick={showModal}
          type="button"
          className=" ms-5 my-3 btn btn-success"
        >
          <i className="bi bi-plus-circle"></i> Tambah
        </button>
        <div className="d-flex flex-column justify-content-center px-5">
          <TableIncome
            isShow={false}
            setSubmit={setSubmit}
            submit={submit}
            showTable={true}
            width="70vw"
            height="70vh"
          />
        </div>
      </div>

      <ModalBoxIncome
        ShowValue={false}
        ShowSubmit={true}
        submit={submit}
        setSubmit={setSubmit}
        first="Jumlah Pendapatan"
        second="Sumber Pendapatan"
        ShowInput={false}
        ShowForm={true}
        isShow={isModalShow}
        onCloseModal={closeModal}
      />
    </div>
  );
}
