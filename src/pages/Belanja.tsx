import ModalBoxBelanja, { useModal } from "@/component/ModalBoxBelanja";
import Sidebar from "@/component/sidebar";
import TableBelanja from "@/component/TableBelanja";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface DataItem {
  Anggaran: number;
  Belanja: string;
}

export default function Pemasukan() {
  const { isModalShow, closeModal, showModal } = useModal();
  const [submit, setSubmit] = useState<DataItem[]>([]);

  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      router.replace("/login");
    } else {
      setIsReady(true);
    }
  }, []);

  if (!isReady) return null;
  return (
    <div className=" w-100 d-flex vh-100">
      <Sidebar />
      <div
        className="Belanja container-fluid p-0 bg-light-subtle "
        style={{ height: "800" }}
      >
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
