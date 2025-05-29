import { adminContext } from "@/component/LoginContex";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setLogin } = useContext(adminContext);

  async function onClickSubmit(e) {
    e.preventDefault();

    // setAuth({ username, password });
    if (!password && username) {
      alert("Masukkan Dulu Passwordnya");
      return;
    } else if (!username && password) {
      alert("Masukkan Dulu Usernamenya");
    } else if (!username || !password) {
      alert("Masukkan Dulu Password Dan Usernamenya");
    }

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setLogin(true);
        setTimeout(() => {
          router.push("/dashboard");
        }, 100);
      } else {
        router.push("/login");
        // alert("Password Salah");
        alert(data.message || "Gagal menyimpan data");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan, coba lagi!");
    }
  }

  return (
    <div className="wrap d-flex vh-100 vw-100 text-dark">
      <div className="login-box vh-25  rounded-5 p-3  m-auto ">
        <div className=" cbol-sm-10 p-2 h-100 justify-content-center m-auto d-flex  flex-column">
          <h1 className="mx-4 text-dark text-center">LOGIN</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="bg-light-subtle mb-4 form-control"
            id="validationCustom01"
            placeholder="Username"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="bg-light-subtle form-control"
            id="validationCustom01"
            placeholder="Password"
            required
          />
          <button
            onClick={onClickSubmit}
            type="submit"
            className="mt-5 btn btn-dark"
          >
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
}
