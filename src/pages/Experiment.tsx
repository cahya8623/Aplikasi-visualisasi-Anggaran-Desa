import { ChangeEvent, useState } from "react";

type UploadStatus = "idle" | "uploading" | "error" | "succes";
export default function Experiment() {
  const [Gambar, setGambar] = useState<File | null>(null);
  const [Status, setStatus] = useState<UploadStatus>("idle");

  function HandleInput(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setGambar(e.target.files[0]);
    }
  }

  const HandleSumbit = async () => {
    if (!Gambar) return;

    const formData = new FormData();
    formData.append("gambar", Gambar);

    try {
      const response = await fetch("http://localhost:3000/api/Image", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result) setStatus("succes");
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan, coba lagi!");
    }
  };

  return (
    <div className="vh-100">
      <h1>Halaman Experiment</h1>

      <form>
        <input onChange={HandleInput} type="file" accept="image/*" />
      </form>

      <button onClick={HandleSumbit}>Submit</button>
      {Status === "succes" && <p>Upload Succes</p>}
    </div>
  );
}
