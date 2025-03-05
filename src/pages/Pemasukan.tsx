import ModalBox, { useModal } from "@/component/ModalBox";
import Sidebar from "@/component/sidebar";
import TableIncome from "@/component/tabelIncome";

export default function Pemasukan() {
  const { isModalShow, closeModal, showModal } = useModal();
  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <div className="Home   p-0 bg-light-subtle ">
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
          <TableIncome width="70vw" height="70vh" />
        </div>
      </div>

      <ModalBox isShow={isModalShow} onCloseModal={closeModal} />
    </div>
  );
}
