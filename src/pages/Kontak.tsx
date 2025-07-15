import Navbar from "@/component/Navbar";
import { Instagram } from "lucide-react";
import Link from "next/link";

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
            <Link href="https://www.instagram.com/desagending13/">
              <h5 className="ms-2 me-2 bi bi-instagram gap-3 text-white">
                Instagram
              </h5>
            </Link>
            <h5 className="bi bi-telegram"> Telegram</h5>
            <Link href="https://chat.whatsapp.com/FMTZF4cGh4dFy8DvpUSst6">
              <h5 className="bi bi-whatsapp text-white"> Whatsapp</h5>
            </Link>
          </div>
        </div>

        <div className="content-2">
          <div style={{ marginRight: "130px" }}>
            <h5>Email</h5>
            <p>desagending@gmail.com</p>

            <h5 className="mt-5">address</h5>
            <p>
              Jalan Raya Probolinggo, Dusun Kerajan, RT.13 RW.03 Desa Gending
              Kec.Gending Kab.Probolinggo Kode Pos 67272{" "}
            </p>
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
