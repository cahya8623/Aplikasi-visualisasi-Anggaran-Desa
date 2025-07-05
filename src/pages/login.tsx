import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onClickSubmit() {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
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

  // async function onClickSubmit(e) {
  //   e.preventDefault();

  //   // setAuth({ username, password });
  //   if (!password && username) {
  //     alert("Masukkan Dulu Passwordnya");
  //     return;
  //   } else if (!username && password) {
  //     alert("Masukkan Dulu Usernamenya");
  //   } else if (!username || !password) {
  //     alert("Masukkan Dulu Password Dan Usernamenya");
  //   }

  //   try {
  //     const response = await fetch("http://localhost:3000/api/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     const data = await response.json();
  //     if (response.ok) {
  //       setLogin(true);
  //       setTimeout(() => {
  //         router.push("/dashboard");
  //       }, 100);
  //     } else {
  //       router.push("/login");

  //       alert(data.message || "Gagal menyimpan data");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("Terjadi kesalahan, coba lagi!");
  //   }
  // }

  // const onClickSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!password && username) {
  //     alert("Masukkan Dulu Passwordnya");
  //     return;
  //   } else if (!username && password) {
  //     alert("Masukkan Dulu Usernamenya");
  //   } else if (!username || !password) {
  //     alert("Masukkan Dulu Password Dan Usernamenya");
  //   }
  //   const res = await fetch("/api/Auth", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ username, password }),
  //   });

  //   const data = await res.json();
  //   console.log(data);
  //   if (res.ok) {
  //     sessionStorage.setItem("token", data.token);
  //     router.push("/dashboard");
  //   } else {
  //     alert(data.message);
  //   }
  // };
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
