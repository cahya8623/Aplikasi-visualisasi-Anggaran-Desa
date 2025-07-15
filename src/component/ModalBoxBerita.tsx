import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { useYear } from "./ContexAPI";
import Image from "next/image";
import { ImageUp } from "lucide-react";
import { adminContext } from "./LoginContex";
import { useRouter } from "next/router";

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
  selectedValue?: string | number;
  ShowSubmit: boolean;
};

type status = "Browse" | "Submit";

export default function Berita(props: ModalBoxProps) {
  const [Gambar, setGambar] = useState<File | null>(null);
  const [Preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<status>("Browse");
  const [Description, setDescription] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [Title, setTitle] = useState("");
  const { setData, setSubmit, Submit } = useContext(adminContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function HandleInput(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setGambar(file);
      setPreview(URL.createObjectURL(file));
      setStatus("Submit");
    } else {
      console.warn("Tidak ada file yang dipilih.");
    }
  }
  useEffect(() => {
    setSubmit(false);
    fetch("http://localhost:3000/api/Image")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [Submit]);

  const HandleSumbit = async () => {
    if (!Gambar) {
      alert("Pilih Gambar Terlebih Dahulu!!");
      return;
    }

    if (Title === "") {
      alert("Masukkan Dulu Judulnya!!");
      return;
    } else if (Description === "") {
      alert("Masukkan Dulu Deskripsinya!!");
      return;
    }
    const formData = new FormData();
    formData.append("gambar", Gambar);
    formData.append("title", Title);
    formData.append("description", Description);

    try {
      const response = await fetch("http://localhost:3000/api/Image", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result);
      setPreview(null);
      setGambar(null);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan, coba lagi!");
    } finally {
      setSubmit(true);
      setStatus("Browse");
      setDescription("");
      setTitle("");
      alert("Data Sudah Disimpan");
    }
  };

  const handleButtonClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    inputRef.current.click();
  };
  return (
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
                <div className="box-berita">
                  <div className=" d-flex gap-5 flex-column justify-content-center">
                    <input
                      type="text"
                      placeholder="Judul"
                      className="rounded bg-white text-dark"
                      value={Title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                      value={Description}
                      className="text-dark w-100 input-berita"
                      placeholder="Deskripsi"
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="box-file">
                    {Preview != null ? (
                      <div className="box-preview">
                        <Image
                          src={Preview}
                          width={250}
                          height={210}
                          alt="gambar"
                        />
                      </div>
                    ) : (
                      <ImageUp size={100} strokeWidth={2} />
                    )}
                    <p>Drag and drop files here</p>
                    <span>-OR-</span>
                    {status === "Browse" ? (
                      <button type="button" onClick={handleButtonClick}>
                        Browse Files
                      </button>
                    ) : (
                      <button type="button" onClick={HandleSumbit}>
                        Simpan
                      </button>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      ref={inputRef}
                      onChange={HandleInput}
                    />
                  </div>
                </div>

                {props.ShowSubmit ? (
                  <button
                    onClick={HandleSumbit}
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
  );
}
