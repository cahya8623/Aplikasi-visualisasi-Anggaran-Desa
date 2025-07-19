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
  Anggaran: number;
  // Kode: number;
  Belanja: string;
}
export type ModalBoxProps = {
  first?: string;
  second?: string;
  isShow: boolean;
  onCloseModal: () => void;
  ShowInput?: boolean;
  ShowForm?: boolean;
  submit: DataItem[];
  ShowValue: boolean;
  setSubmit: React.Dispatch<React.SetStateAction<DataItem[]>>;
  selectedValue?: any;
  ShowSubmit: boolean;
};

export default function ModalBoxExpense(props: ModalBoxProps) {
  const [Anggaran, setAnggaran] = useState(0);
  const [Belanja, setBelanja] = useState("");
  const { setEdit, setConfirm } = useYear();

  useEffect(() => {
    setAnggaran(props.selectedValue);
    setBelanja(props.selectedValue);
  }, [props.selectedValue]);

  const onClickEdit = async (
    id: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (Anggaran <= 0 || Belanja === "") {
      alert("Isi Data Terlebih Dahulu");
      return;
    } else if (
      isNaN(Anggaran) ||
      typeof Belanja !== "string" ||
      !/^[A-Za-z\s]+$/.test(Belanja)
    ) {
      return alert("Isi Data Sesuai Format");
    }

    try {
      const response = await fetch(`/api/Belanja?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Anggaran, Belanja }),
      });

      const data = await response.json();
      if (response.ok) {
        setEdit((prev) =>
          prev.id === id ? { ...prev, Anggaran, Belanja } : prev
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

    try {
      const response = await fetch("/api/Belanja", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Anggaran, Belanja }),
      });

      const data = await response.json();
      if (response.ok) {
        props.setSubmit((item) => [...item, { Anggaran, Belanja }]);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("dataTerjadi kesalahan, coba lagi!");
    } finally {
      // alert("Data Sudah Ditambahkan");
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
                      onChange={(e) => setBelanja(e.target.value)}
                      className="rounded-5 mb-3 form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Belanja"
                    />
                    <input
                      type="text"
                      onChange={(e) => setAnggaran(parseInt(e.target.value))}
                      className="rounded-5 mb-3 form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Anggaran"
                    />
                  </div>
                </div>

                {props.ShowSubmit ? (
                  <button
                    onClick={onClickSubmit}
                    type="submit"
                    className="btn  btn-outline-success"
                    style={{ marginRight: "110px" }}
                  >
                    Submit
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
