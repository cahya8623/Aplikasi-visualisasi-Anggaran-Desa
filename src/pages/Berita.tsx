import { adminContext } from "@/component/LoginContex";
import Sidebar from "@/component/sidebar";
import { ImageUp } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";

type status = "Browse" | "Submit";

export default function Experiment() {
  const [Gambar, setGambar] = useState<File | null>(null);
  const [Preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<status>("Browse");
  const { setData, setSubmit, Submit } = useContext(adminContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

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
    } else if (Description === "") alert("Masukkan Dulu Deskripsinya!!");

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
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    inputRef.current.click();
  };

  return (
    <div className=" w-100 d-flex vh-100">
      <Sidebar />
      <div className="Home  container-fluid pb-2 p-0 bg-info ">
        <section className="shadow ps-4 p-2 mb-1 bg-white rounded">
          <h1 className="fw-bold text-secondary">Halaman Pendapatan</h1>
        </section>

        <div className="d-flex ms-5">
          <div className=" ms-5 d-flex gap-5 flex-column justify-content-center">
            <input
              type="text"
              placeholder="Judul"
              className="rounded bg-white text-dark"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              value={Description}
              className="text-dark input-berita"
              placeholder="Deskripsi"
              name=""
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="box-file">
            {Preview != null ? (
              <div className="box-preview">
                <Image src={Preview} width={250} height={210} alt="gamar" />
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
      </div>
    </div>
  );
}
