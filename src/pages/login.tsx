import { useState } from "react";

export default function LoginPage() {
  const [type, setType] = useState("");
  return (
    <div className="wrap d-flex vh-100 vw-100 text-dark">
      <div className="login-box vh-25 rounded-5 p-3  m-auto">
        <div className=" col-sm-10 p-2 h-100 justify-content-center m-auto d-flex  flex-column">
          <input
            onChange={(e) => setType(e.target.value)}
            type="text"
            className="bg-light-subtle mb-4 form-control"
            id="validationCustom01"
            placeholder="Username"
            value={type}
            required
          />
          <input
            onChange={(e) => setType(e.target.value)}
            type="text"
            className="bg-light-subtle form-control"
            id="validationCustom01"
            placeholder="Password"
            value={type}
            required
          />
          <button type="submit" value="Submit" className="mt-5 btn btn-dark">
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
}
