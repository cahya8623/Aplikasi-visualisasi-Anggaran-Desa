import { useState } from "react";

export const useModal = () => {
  const [isModalShow, setIsModalShow] = useState(false);

  function showModal() {
    setIsModalShow(true);
  }

  function closeModal() {
    setIsModalShow(false);
  }

  console.log(isModalShow);
  return { isModalShow, showModal, closeModal };
};

export type ModalBoxProps = {
  first: string;
  second: string;
  isShow: boolean;
  onCloseModal: () => void;
  ShowInput?: boolean;
};

export default function ModalBox(props: ModalBoxProps) {
  return props.isShow ? (
    <div
      onClick={props.onCloseModal}
      className="vw-100 vh-100 position-fixed "
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        top: 0,
        left: 0,
        minHeight: "100vh",
      }}
    >
      <div onClick={(e) => e.stopPropagation()} className="ModalBox">
        <form>
          <div className="p-2 ">
            <div className=" m-2">
              <input
                type="text"
                className="rounded-5 mb-3 form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={props.first}
              />
              <input
                type="text"
                className="rounded-5 form-control"
                id="exampleInputPassword1"
                placeholder={props.second}
              />
            </div>
            {props.ShowInput && (
              <div className=" m-2 form-group">
                <textarea
                  typeof="text"
                  className=" modal-keterangan form-control"
                  id="exampleInputPassword1"
                  placeholder="keterangan"
                />
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
        </form>
        <i
          onClick={props.onCloseModal}
          className="fs-5  bi bi-x-circle-fill"
          style={{
            position: "absolute",
            top: "2.5%",
            right: "2.5%",
            cursor: "pointer",
          }}
        ></i>
      </div>
    </div>
  ) : null;
}
