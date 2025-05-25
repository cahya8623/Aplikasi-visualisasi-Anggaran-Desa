import { adminContext } from "@/component/LoginContex";
import ModalBoxBelanja, { useModal } from "@/component/ModalBoxBelanja";
import Sidebar from "@/component/sidebar";
import TableBelanja from "@/component/TableBelanja";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

interface DataItem {
  jmlPendapatan: number;
  Sumber: string;
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
      <div className="Home container-fluid vh-100 p-0 bg-light-subtle ">
        <section className="shadow ps-4 p-2 mb-1 bg-white rounded">
          <h1 className="fw-bold text-secondary">Halaman Belanja</h1>
        </section>

        <button
          onClick={showModal}
          type="button"
          className=" ms-5 my-3 btn btn-success"
        >
          <i className="bi bi-plus-circle"></i> Tambah
        </button>
        <div className="px-5">
          <TableBelanja
            isShow={false}
            setSubmit={setSubmit}
            submit={submit}
            showTable={true}
            width="70vw"
            height="70vh"
          />
        </div>
      </div>

      <ModalBoxBelanja
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
