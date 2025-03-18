import ModalBox, { useModal } from "@/component/ModalBox";
import Sidebar from "@/component/sidebar";
import TableIncome from "@/component/tabelIncome";

export default function Pemasukan() {
  const { isModalShow, closeModal, showModal } = useModal();
  console.log(isModalShow);
  return (
    <div className=" w-100 d-flex vh-100">
      <Sidebar />
      <div className="Home container-fluid p-0 bg-light-subtle ">
        <section className=" bg-dark-subtle p-3 text-dark rounded py-20">
          <h1 className="fw-bold">Halaman Pemasukan</h1>
        </section>

        <button
          onClick={showModal}
          type="button"
          className=" ms-5 my-3 btn btn-success"
        >
          <i className="bi bi-plus-circle"></i> Tambah
        </button>
        <div className="ms-5">
          <TableIncome showTable={true} width="70vw" height="70vh" />
        </div>
      </div>

      <ModalBox
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
