/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useYear } from "./ContexAPI";

export const useModal = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const { setConfirm } = useYear();

  function showModal() {
    setIsModalShow(true);
  }

  function closeModal() {
    setIsModalShow(false);
    setConfirm(false);
  }

  return {
    isModalShow,
    showModal,
    closeModal,
  };
};

interface DataItem {
  kebutuhan: string;
  total: number;
  Realisasi: number;
}
export type ModalBoxProps = {
  first?: string;
  second?: string;
  isShow: boolean;
  onCloseModal: () => void;
  ShowInput?: boolean;
  ShowForm?: boolean;
  submit: DataItem[];
  setSubmit: React.Dispatch<React.SetStateAction<DataItem[]>>;
  selectedValue?: any;
  ShowSubmit: boolean;
};

export default function ModalBoxExpense(props: ModalBoxProps) {
  const [kebutuhan, setKebutuhan] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [Realisasi, setRealisasi] = useState<number>(0);
  // const [Image, setImage] = useState<string>("");
  const { setEdit, setConfirm } = useYear();

  console.log("Image : " + Image);

  useEffect(() => {
    setKebutuhan(props.selectedValue);
    setTotal(props.selectedValue);
    setRealisasi(props.selectedValue);
  }, [props.selectedValue]);

  const onClickEdit = async (
    id: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (kebutuhan === "" || total <= 0 || Realisasi <= 0) {
      alert("Isi Data Terlebih Dahulu");
      return;
    } else if (
      isNaN(total) ||
      typeof kebutuhan !== "string" ||
      typeof Realisasi === "string"
    ) {
      return alert("Isi Data Sesuai Format");
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/pengeluaran?id=${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ kebutuhan, total, Realisasi }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setEdit((prev) =>
          prev.id === id ? { ...prev, kebutuhan, total, Realisasi } : prev
        );
        setConfirm(true);
        alert(data.message || "Data Sudah Diganti");
      } else {
        alert(data.message || "Gagal menyimpan data");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan, coba lagi!");
    }
  };

  const onClickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (kebutuhan === "" || total <= 0 || Realisasi == 0) {
      alert("Isi Data Terlebih Dahulu");
      return;
    } else if (
      isNaN(total) ||
      typeof kebutuhan !== "string" ||
      isNaN(Realisasi)
    ) {
      return alert("Isi Data Sesuai Format");
    }
    try {
      const response = await fetch("http://localhost:3000/api/pengeluaran", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kebutuhan, total, Realisasi }),
      });

      const data = await response.json();
      if (response.ok) {
        props.setSubmit((item) => [...item, { kebutuhan, total, Realisasi }]);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan, coba lagi!");
    }
  };

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
        {props.ShowForm ? (
          <div>
            <div>
              <form>
                <div className="p-2 ">
                  <div className=" m-2">
                    <input
                      type="text"
                      onChange={(e) => setKebutuhan(e.target.value)}
                      className="rounded-5 mb-3 form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder={props.first}
                    />
                    <input
                      type="text"
                      onChange={(e) => setTotal(parseInt(e.target.value))}
                      className="rounded-5 form-control"
                      id="exampleInputPassword1"
                      placeholder={props.second}
                    />
                  </div>
                  {props.ShowInput && (
                    <div className=" m-2 ">
                      <input
                        type="text"
                        onChange={(e) => setRealisasi(parseInt(e.target.value))}
                        className="rounded-5 form-control"
                        id="exampleInputPassword1"
                        placeholder="Realisasi"
                      />
                    </div>
                  )}
                </div>

                {props.ShowSubmit ? (
                  <button
                    onClick={onClickSubmit}
                    type="submit"
                    className="btn  btn-outline-success"
                    style={{ marginRight: "110px" }}
                  >
                    Simpan
                  </button>
                ) : (
                  <button
                    onClick={(e) => onClickEdit(props.selectedValue, e)}
                    type="submit"
                    className="btn  btn-outline-success"
                    style={{ marginRight: "110px" }}
                  >
                    Simpan
                  </button>
                )}
              </form>
            </div>
          </div>
        ) : null}

        {props.ShowForm ? null : (
          <div className="Modal-content">
            <p className="props-keterangan text-white">{props.second}</p>{" "}
          </div>
        )}
        <i
          onClick={props.onCloseModal}
          className="transition fs-5 text-light bi bi-x-circle-fill"
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
