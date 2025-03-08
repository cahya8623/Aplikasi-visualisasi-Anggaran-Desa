import ModalBox, { useModal } from "./ModalBox";

type ButtonClick = {
  label1: string;
  label2: string;
  Shown: boolean;
};
export default function Button(props: ButtonClick) {
  const { closeModal, isModalShow, showModal } = useModal();
  return (
    <div className="gap-2">
      <button onClick={showModal} type="button" className="m-2 btn btn-primary">
        <i className="bi bi-pencil-fill"></i> Edit
      </button>
      <button
        onClick={() => console.log("hapus")}
        type="button"
        className="btn btn-danger"
      >
        <i className="bi bi-trash3-fill"></i> Hapus
      </button>

      <ModalBox
        first={props.label1}
        second={props.label2}
        ShowInput={props.Shown}
        isShow={isModalShow}
        onCloseModal={closeModal}
      />
    </div>
  );
}
