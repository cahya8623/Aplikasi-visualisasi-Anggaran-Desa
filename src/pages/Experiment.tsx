import Link from "next/link";
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
    <div className="vh-100" style={{ backgroundColor: "#1f2029" }}>
      <div className="section pb-5 pt-5 pt-sm-2 text-center">
        <input
          className="checkbox"
          type="checkbox"
          id="reg-log"
          name="reg-log"
        />
        <label htmlFor="reg-log" className="custom-toggle"></label>
        <div className="card-3d-wrap mx-auto">
          <div className="card-3d-wrapper">
            <div className="card-front">
              <div className="center-wrap">
                <div className="section text-center">
                  <h4 className="mb-4 pb-3">Bendahara</h4>
                  <div className="form-group">
                    <input
                      type="text"
                      name="logemail"
                      className="form-style"
                      placeholder="Username"
                      id="logemail"
                      autoComplete="off"
                    />
                    <i className="input-icon uil uil-user"></i>
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="password"
                      name="logpass"
                      className="form-style"
                      placeholder="Password"
                      id="logpass"
                      autoComplete="off"
                    />
                    <i className="input-icon uil uil-lock-alt"></i>
                  </div>
                  <button className="btn mt-4">submit</button>
                </div>
              </div>
            </div>
            <div className="card-back">
              <div className="center-wrap">
                <div className="section text-center">
                  <h4 className="mb-4 pb-3">Admin</h4>
                  <div className="form-group">
                    <input
                      type="text"
                      name="logemail"
                      className="form-style"
                      placeholder="Username"
                      id="logemail"
                      autoComplete="off"
                    />
                    <i className="input-icon uil uil-user"></i>
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="password"
                      name="logpass"
                      className="form-style"
                      placeholder="Password"
                      id="logpass"
                      autoComplete="off"
                    />
                    <i className="input-icon uil uil-lock-alt"></i>
                  </div>
                  <button className="btn mt-4">submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
