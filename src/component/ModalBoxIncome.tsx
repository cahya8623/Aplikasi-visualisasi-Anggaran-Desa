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
  return {
    isModalShow,
    showModal,
    closeModal,
  };
};

interface DataItem {
  jmlPendapatan: number;
  Sumber: string;
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
};

export default function ModalBoxIncome(props: ModalBoxProps) {
  const [Sumber, setSumber] = useState<string>("");
  const [jmlPendapatan, setJmlPendapatan] = useState<number>(0);

  const onClickSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah reload halaman

    if (Sumber === "" || jmlPendapatan <= 0) {
      alert("Isi Data Terlebih Dahulu");
      return;
    } else if (isNaN(jmlPendapatan) || typeof Sumber !== "string") {
      return alert("Isi Data Sesuai Format");
    }

    try {
      const response = await fetch("http://localhost:3000/api/pemasukan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jmlPendapatan, Sumber }),
      });

      const data = await response.json();
      if (response.ok) {
        // Update state submit agar data muncul di tabel
        props.setSubmit((item) => [...item, { jmlPendapatan, Sumber }]);
      } else {
        alert(data.message || "Gagal menyimpan data");
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
                      onChange={(e) =>
                        setJmlPendapatan(parseInt(e.target.value))
                      }
                      className="rounded-5 mb-3 form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder={props.first}
                    />
                    <input
                      type="text"
                      onChange={(e) => setSumber(e.target.value)}
                      className="rounded-5 form-control"
                      id="exampleInputPassword1"
                      placeholder={props.second}
                    />
                  </div>
                </div>

                <button
                  onClick={onClickSubmit}
                  type="submit"
                  className="btn  btn-outline-success"
                  style={{ marginRight: "110px" }}
                >
                  Submit
                </button>
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
