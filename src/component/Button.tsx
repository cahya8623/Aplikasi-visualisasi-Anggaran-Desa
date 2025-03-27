import { Dispatch, SetStateAction } from "react";
import ModalBox, { useModal } from "./ModalBoxExpense";

type ButtonClick = {
  label1: string;
  label2: string;
  Shown: boolean;
  item: { id: number };
  setData: Dispatch<SetStateAction<any[]>>;
  data: any[];
};

export default function Button(props: ButtonClick) {
  function onClickDelete() {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (!confirmDelete) return;

    fetch(`/api/pemasukan?id=${props.item.id}`, { method: "DELETE" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal menghapus data.");
        }
        return response.json();
      })
      .then(() => {
        props.setData(props.data.filter((item) => item.id !== item.id));
        alert("Data berhasil dihapus!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan.");
      });
  }

  const { closeModal, isModalShow, showModal } = useModal();
  return (
    <div className="gap-2 d-flex">
      <button onClick={showModal} type="button" className="m-2 btn btn-primary">
        <i className="bi bi-pencil-fill"></i> Edit
      </button>
      <button
        onClick={() => onClickDelete(props.item.id)}
        type="button"
        className="m-2 btn btn-danger"
      >
        <i className="bi bi-trash3-fill"></i> Hapus
      </button>

      <ModalBox
        first={props.label1}
        second={props.label2}
        ShowInput={props.Shown}
        isShow={isModalShow}
        ShowForm={true}
        onCloseModal={closeModal}
      />
    </div>
  );
}
