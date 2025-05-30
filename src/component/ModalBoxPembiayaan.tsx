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
  Kode: number;
  Penerimaan: number;
  Pengeluaran: number;
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
  ShowSubmit: boolean;
  selectedValue?: string | number;
  setSubmit: React.Dispatch<React.SetStateAction<DataItem[]>>;
};

export default function ModalBoxIncome(props: ModalBoxProps) {
  const [Kode, setKode] = useState<number>(0);
  const [Penerimaan, setPenerimaan] = useState(0);
  const [Pengeluaran, setPengeluaran] = useState(0);

  const { setEdit, setConfirm } = useYear();

  useEffect(() => {
    setKode(props.selectedValue);
    setPenerimaan(props.selectedValue);
    setPengeluaran(props.selectedValue);
  }, [props.selectedValue]);

  const onClickEdit = async (
    id: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (Kode <= 0 || Penerimaan <= 0 || Pengeluaran <= 0) {
      return alert("Masukkan Data Terlebih Dahulu");
    } else if (isNaN(Penerimaan) || isNaN(Kode) || isNaN(Pengeluaran)) {
      return alert("Masukkan Data Sesuai Format");
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/pembiayaan?id=${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ Penerimaan, Kode, Pengeluaran }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setEdit((prev) =>
          prev.id === id ? { ...prev, Penerimaan, Kode, Pengeluaran } : prev
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

    if (Kode <= 0 || Penerimaan <= 0 || Pengeluaran <= 0) {
      return alert("Masukkan Data Terlebih Dahulu");
    } else if (isNaN(Penerimaan) || isNaN(Kode) || isNaN(Pengeluaran)) {
      return alert("Masukkan Data Sesuai Format");
    }
    try {
      const response = await fetch("http://localhost:3000/api/pembiayaan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Penerimaan, Kode, Pengeluaran }),
      });

      const data = await response.json();
      if (response.ok) {
        props.setSubmit((item) => [...item, { Penerimaan, Kode, Pengeluaran }]);
      } else {
        alert(data.message || "Gagal menyimpan data");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan, coba lagi!");
    } finally {
      alert("Data Sudah Ditambahkan");
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
                      value={props.ShowValue ? setKode.Kode : null}
                      onChange={(e) => setKode(parseInt(e.target.value))}
                      className="rounded-5 mb-3 form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Kode"
                    />
                    <input
                      type="text"
                      //   value={props.ShowValue ? Penerimaan.amount : null}
                      onChange={(e) => setPenerimaan(parseInt(e.target.value))}
                      className="rounded-5 mb-3 form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Penerimaan Dana"
                    />
                    <input
                      type="text"
                      //   value={props.ShowValue ? Penerimaan.amount : null}
                      onChange={(e) => setPengeluaran(parseInt(e.target.value))}
                      className="rounded-5 mb-3 form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Pengeluaran Dana"
                    />

                    {/* <select
                      value={Pengeluaran}
                      onMouseLeave={() => setPendapatan(false)}
                      onChange={(e) => setPengeluaran(parseInt(e.target.value))}
                    >
                      <option
                        onClick={() => setPendapatan(true)}
                        value="Pendapatan Lain-Lain"
                      >
                        Pendapatan Lain-Lain
                      </option>
                      <option value="Dana Desa">Dana Desa</option>
                    </select> */}
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
                    Submit
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
