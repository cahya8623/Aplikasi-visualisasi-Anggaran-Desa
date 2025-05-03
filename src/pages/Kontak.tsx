import Navbar from "@/component/Navbar";
import { Instagram } from "lucide-react";

export default function Kontak() {
  return (
    <div>
      <Navbar />
      <div className="Kontak">
        <div className="content-1">
          <h1>Contact us</h1>

          <p className="">
            Beritahu kami jika ada kekurangan atau kesalahan dalam penginputan
            data
          </p>

          <div className="Contacs">
            <h5 className="ms-2">
              <i className="me-2 bi bi-instagram"></i>
              Instagram
            </h5>
            <h5 className="bi bi-telegram"> Telegram</h5>
            <h5 className="bi bi-whatsapp"> Whatsapp</h5>
          </div>
        </div>

        <div className="content-2">
          <div style={{ marginRight: "130px" }}>
            <h5>Email</h5>
            <p>example@gmail.com</p>

            <h5 className="mt-5">address</h5>
            <p>jln.gending no.5</p>
          </div>

          <div>
            <h5>No Telepon</h5>
            <p>085xxxx76xxxx</p>
          </div>
        </div>
      </div>
    </div>
  );
}
