import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [Admin, setAdmin] = useState("");
  const [Adminpassword, setAdminPassword] = useState("");
  const [Bendahara, setBendahara] = useState("");
  const [Bendaharapassword, setBendaharaPassword] = useState("");

  async function SubmitAdmin() {
    if (Admin === "" && Adminpassword === "") {
      alert("Masukkan Username Dan Password Telebih Dahulu");
    } else if (Admin === "") {
      alert("Masukkan Dulu Usernamenya");
    } else if (Adminpassword === "") {
      alert("Masukkan Dulu Passwordnya");
    }
    const res = await fetch("/api/loginAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Admin, Adminpassword }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      if (data.role === "bendahara") {
        router.push("/Pendapatan");
      } else if (data.role === "admin") {
        router.push("/Berita");
      }
    } else {
      alert(data.message);
    }
  }
  async function SubmitBendahara() {
    const res = await fetch("/api/loginBendahara", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Bendahara, Bendaharapassword }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      if (data.role === "bendahara") {
        router.push("/Pendapatan");
      } else if (data.role === "admin") {
        router.push("/Berita");
      }
    } else {
      alert(data.message);
    }
  }

  //
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
                  <h4 className="mb-4 pb-3 text-white">Bendahara</h4>
                  <div className="form-group">
                    <input
                      onChange={(e) => setBendahara(e.target.value)}
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
                      onChange={(e) => setBendaharaPassword(e.target.value)}
                      type="password"
                      name="logpass"
                      className="form-style"
                      placeholder="Password"
                      id="logpass"
                      autoComplete="off"
                    />
                    <i className="input-icon uil uil-lock-alt"></i>
                  </div>
                  <button
                    onClick={SubmitBendahara}
                    type="submit"
                    className="submit mt-4"
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
            <div className="card-back">
              <div className="center-wrap">
                <div className="section text-center">
                  <h4 className="mb-4 pb-3 text-white">Admin</h4>
                  <div className="form-group">
                    <input
                      onChange={(e) => setAdmin(e.target.value)}
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
                      onChange={(e) => setAdminPassword(e.target.value)}
                      type="password"
                      name="logpass"
                      className="form-style"
                      placeholder="Password"
                      id="logpass"
                      autoComplete="off"
                    />
                    <i className="input-icon uil uil-lock-alt"></i>
                  </div>
                  <button
                    onClick={SubmitAdmin}
                    type="submit"
                    className="submit mt-4"
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="wrap d-flex vh-100 vw-100 text-dark">
    //   <div className="login-box vh-25  rounded-5 p-3  m-auto ">
    //     <div className=" cbol-sm-10 p-2 h-100 justify-content-center m-auto d-flex  flex-column">
    //       <h1 className="mx-4 text-dark text-center">LOGIN</h1>
    //       <input
    //         onChange={(e) => setUsername(e.target.value)}
    //         type="text"
    //         className="bg-light-subtle mb-4 form-control"
    //         id="validationCustom01"
    //         placeholder="Username"
    //         required
    //       />
    //       <input
    //         onChange={(e) => setPassword(e.target.value)}
    //         type="password"
    //         className="bg-light-subtle form-control"
    //         id="validationCustom01"
    //         placeholder="Password"
    //         required
    //       />
    //       <button
    //         onClick={onClickSubmit}
    //         type="submit"
    //         className="mt-5 btn btn-dark"
    //       >
    //         Masuk
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
