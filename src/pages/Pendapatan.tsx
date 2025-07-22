import ModalBoxIncome, { useModal } from "@/component/ModalBoxIncome";
import Sidebar from "@/component/sidebar";
import TableIncome from "@/component/tabelIncome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface DataItem {
  jmlPendapatan: number;
  // Kode: number;
  Source: string;
}

export default function Pemasukan() {
  const { isModalShow, closeModal, showModal } = useModal();
  const [submit, setSubmit] = useState<DataItem[]>([]);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token || role !== "bendahara") {
      router.replace("/login");
      return;
    } else {
      setIsReady(true);
    }
  }, []);

  if (!isReady) return null;
  return (
    <div className=" w-100 d-flex vh-100">
      <Sidebar />
      <div className="Home container-fluid  p-0 bg-light-subtle ">
        <button
          onClick={showModal}
          type="button"
          className=" ms-5 my-3 btn btn-success"
        >
          <i className="bi bi-plus-circle"></i> Tambah
        </button>
        <div
          className="d-flex  flex-column justify-content-center px-5"
          style={{ width: "70vw" }}
        >
          <TableIncome
            isShow={false}
            setSubmit={setSubmit}
            submit={submit}
            showTable={true}
            width="20vw"
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
