import { adminContext } from "@/component/LoginContex";
import Sidebar from "@/component/sidebar";
import { ImageUp } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type status = "Browse" | "Submit";
type Database = {
  id: number;
  date: string;
  gambar: string;
  title: string;
  description: string;
};

export default function Experiment() {
  const [Gambar, setGambar] = useState<File | null>(null);
  const [Preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<status>("Browse");
  const [Description, setDescription] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [Title, setTitle] = useState("");
  const [data, setData] = useState<Database[]>([]);
  const { setSubmit, Submit } = useContext(adminContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [page, setPage] = useState(1);

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
    fetch("/api/Image")
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
      const response = await fetch("/api/Image", {
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
  function onClickDelete(id: unknown) {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (!confirmDelete) return;
    fetch(`/api/Image?id=${id}`, { method: "DELETE" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal menghapus data.");
        }
        return response.json();
      })
      .then(() => {
        setData(data.filter((item) => item.id !== id));
        alert("Data berhasil dihapus!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan.");
      });
  }
  const handleButtonClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    inputRef.current?.click();
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token || role !== "admin") {
      router.replace("/login");
      return;
    } else {
      setIsReady(true);
    }
  }, []);

  if (!isReady) return null;

  const limit = 2;
  const maxVisible = 3;
  const totalPage = Math.ceil(data.length / limit);

  const getPaginationRange = () => {
    let startPage, endPage;
    if (totalPage <= maxVisible) {
      startPage = 1;
      endPage = totalPage;
    } else {
      const middle = Math.floor(maxVisible / 2);
      if (page <= middle + 1) {
        startPage = 1;
        endPage = maxVisible;
      } else if (page + middle >= totalPage) {
        startPage = totalPage - maxVisible + 1;
        endPage = totalPage;
      } else {
        startPage = page - middle;
        endPage = page + middle;
      }
    }
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const start = (page - 1) * limit;
  const end = start + limit;

  return (
    <div className=" w-100 d-flex vh-100">
      <Sidebar />
      <div className="Home container-fluid pb-2 p-0 bg-info ">
        <Swiper spaceBetween={50} slidesPerView={1}>
          {/* Slide Pertama - Form Input */}
          <SwiperSlide>
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
                  className="text-dark input-berita"
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
          </SwiperSlide>
          {/* Slide Kedua */}
          <SwiperSlide>
            <div className="slide-2">
              <table className="table">
                <thead>
                  <tr className="text-center">
                    <th scope="col">No</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Realisasi</th>
                    <th scope="col">Deskripsi</th>
                    <th scope="col">Dokumentasi</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {data.slice(start, end).map((item: Database, index) => (
                    <tr
                      className="text-center  align-item-center"
                      key={item.id}
                    >
                      <td>{(page - 1) * limit + index + 1}</td>
                      <td>{item.date}</td>
                      <td>{item.title}</td>
                      <td>
                        <div className="cobain">{item.description}</div>
                      </td>
                      <td>
                        <Image
                          className="gambar"
                          src={item.gambar}
                          alt={`Foto ${index + 1}`}
                          width={170}
                          height={190}
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => onClickDelete(item.id)}
                          type="button"
                          className="m-2 btn btn-danger"
                        >
                          <i className="bi bi-trash3-fill"></i> Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="gap-3 me-5">
                <button
                  onClick={() => setPage(1)}
                  disabled={page === 1}
                  className={`p-2  bg-gray-200 border-0 ${
                    page === 1 ? "" : "tombol"
                  }`}
                >
                  &laquo;
                </button>
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                  className={`p-2  bg-gray-200 border-0 ${
                    page === 1 ? "" : "tombol"
                  }`}
                >
                  Prev
                </button>

                {getPaginationRange().map((numberPage) => (
                  <button
                    key={numberPage}
                    onClick={() => setPage(numberPage)}
                    className={`p-2 tombol border-0 ${
                      numberPage === page ? "active" : "non-active"
                    } `}
                  >
                    {numberPage}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setPage((prev) => Math.min(prev + 1, totalPage))
                  }
                  disabled={page >= totalPage}
                  className={`p-2 bg-gray-200 border-0 ${
                    page >= totalPage ? "" : "tombol"
                  }`}
                >
                  Next
                </button>
                <button
                  onClick={() => setPage(totalPage)}
                  disabled={page >= totalPage}
                  className={`p-2 bg-gray-200 border-0 ${
                    page >= totalPage ? "" : "tombol"
                  }`}
                >
                  &raquo;
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="d-flex ms-5">
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
        </div> */}
      </div>
    </div>
  );
}
