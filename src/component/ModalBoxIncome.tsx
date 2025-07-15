/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useYear } from "./ContexAPI";
import Select from "react-select";

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
  jmlPendapatan: number;
  // Kode: number;
  Source: string;
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
  selectedValue?: any;
  setSubmit: React.Dispatch<React.SetStateAction<DataItem[]>>;
};

export default function ModalBoxIncome(props: ModalBoxProps) {
  const [jmlPendapatan, setJmlPendapatan] = useState(0);
  const [Source, setSource] = useState("");

  const { setEdit, setConfirm } = useYear();

  const options = [
    {
      label: "Pendapatan Asli Desa",
      options: [
        { value: "Bagi Hasil Bumdes", label: "Bagi Hasil Bumdes" },
        { value: "Pengelolaan Kas Desa", label: "Pengelolaan Kas Desa" },
        {
          value: "Pengelolaan TKD",
          label: "Pengelolaan Tanah Kas Desa",
        },
      ],
    },
    {
      label: "Pendapatan Transfer",
      options: [
        { value: "Dana Desa", label: "Dana Desa" },
        { value: "Bagi Hasil Pajak", label: "Bagi Hasil Pajak" },
        { value: "Alokasi Dana Desa", label: "Alokasi Dana Desa" },
        {
          value: "BK Kabupaten",
          label: "Bantuan Keuangan Kabupaten",
        },
        {
          value: "BK Provinsi",
          label: "Bantuan Keuangan Provinsi",
        },
      ],
    },
    {
      label: "Pendapatan Lain-Lain",
      options: [{ value: "Pendapatan Lain-Lain", label: "Bunga Bank" }],
    },
  ];

  useEffect(() => {
    setJmlPendapatan(Number(props.selectedValue || 0));
    setSource(String(props.selectedValue || ""));
  }, [props.selectedValue]);

  const onClickEdit = async (
    id: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (jmlPendapatan <= 0 || Source === "") {
      return alert("Masukkan Data Terlebih Dahulu");
    } else if (isNaN(jmlPendapatan) || typeof Source !== "string") {
      return alert("Masukkan Data Sesuai Format");
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/pemasukan?id=${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ jmlPendapatan, Source }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setEdit((prev) =>
          prev.id === id ? { ...prev, jmlPendapatan, Source } : prev
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

    if ((jmlPendapatan <= 0 || isNaN(jmlPendapatan)) && Source === "") {
      return alert("Masukkan Data Terlebih Dahulu");
    } else if (jmlPendapatan <= 0) {
      return alert("Masukkan Anggaran Terlebih Dahulu");
    } else if (Source === "") {
      return alert("Pilih Sumber Pendapatan Terlebih Dahulu");
    } else if (isNaN(jmlPendapatan) || typeof Source !== "string") {
      return alert("Masukkan Data Sesuai Format");
    }
    try {
      const response = await fetch("http://localhost:3000/api/pemasukan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jmlPendapatan, Source }),
      });

      if (response.ok) {
        props.setSubmit((item) => [...item, { jmlPendapatan, Source }]);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan, coba lagi!");
    } finally {
      setSource("");
      setJmlPendapatan(0);
    }
  };

  const customStyles = {
    control: (base: any) => ({
      ...base,
      backgroundColor: "#000",
      color: "#fff",
      borderColor: "#444",
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: "#2e2e2e",
      color: "#fff",
    }),
    singleValue: (base: any) => ({
      ...base,
      color: "#fff",
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isFocused ? "#333" : "#000",
      color: "#fff",
      cursor: "pointer",
    }),
    groupHeading: (base: any) => ({
      ...base,
      color: "#fffff",
      fontWeight: "bolder",
      fontSize: "1rem",
    }),
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
                      value={props.ShowValue ? jmlPendapatan : undefined}
                      onChange={(e) =>
                        setJmlPendapatan(
                          parseInt(e.target.value.toLocaleString())
                        )
                      }
                      className="rounded-5 mb-3 form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Anggaran"
                    />

                    <div>
                      <label htmlFor="source">Pilih Sumber:</label>
                      <Select
                        id="source"
                        options={options}
                        styles={customStyles}
                        value={options
                          .flatMap((group) => group.options)
                          .find((opt) => opt.value === Source)}
                        onChange={(selectedOption) =>
                          setSource(selectedOption?.value ?? "")
                        }
                        placeholder="-- Pilih --"
                      />
                    </div>
                  </div>
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
