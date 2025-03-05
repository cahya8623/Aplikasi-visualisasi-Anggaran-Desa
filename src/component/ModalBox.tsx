import { useState } from "react";

export const useModal = () => {
  const [isModalShow, setIsModalShow] = useState(false);

  function showModal() {
    setIsModalShow(true);
  }

  function closeModal() {
    setIsModalShow(false);
  }

  return { isModalShow, showModal, closeModal };
};

export type ModalBoxProps = {
  isShow: boolean;
  onCloseModal: () => void;
};

export default function ModalBox(props: ModalBoxProps) {
  return props.isShow ? (
    <div
      className="w-100 h-100 position-relative "
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", top: 0, left: 0 }}
    >
      <div className="ModalBox">
        <button onClick={props.onCloseModal} className="btn btn-danger">
          Tutup
        </button>
      </div>
    </div>
  ) : null;
}
