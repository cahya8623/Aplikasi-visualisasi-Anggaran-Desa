import Navbar from "@/component/Navbar";
import Image from "next/image";
import logo from "@/asset/WhatsApp Image 2025-02-13 at 20.02.39.jpeg";

export default function Profil() {
  return (
    <div>
      <Navbar />
      <div className="bg-content">
        <div className="sub-content">
          <h1 className="text-center">Visi</h1>
          <h4 className="text-center">
            &quot;Meningkatkan Kesejahteraan Dan Sumber Daya Masyarakat&quot;
          </h4>
        </div>
        <div className="sub-content mb-5">
          <h1 className="text-center">Misi</h1>
          <ol className="fs-4 ">
            <li>Meningkatkan taraf hidup ekonomi masyarakat</li>
            <li>Meningkatkan fasilitas</li>
            <li>
              Meningkatkan keahlian dalam bidang pertanian, perikanan dan UMKM
            </li>
          </ol>
        </div>
      </div>
      <div className="bg-content mt-0">
        <h1 style={{ fontFamily: "monospace", color: "white" }}>
          Sejarah Desa
        </h1>

        <div className="sejarah ">
          Pada jaman Majapahit ada seorang raja bernama Prabu Minak Jinggo dari
          Blambangan, Banyuwangi. Beliau adalah Raja yang sakti mandraguna tak
          ada yang mengalahkan dan semua takut padanya. Pada suatu hari beliau
          berkeinginan melamar ratu Majapahit yang bernama Ratu Kencana Wungu
          atau sebutan dalam sejarah adalah Ratu Tribuana Tungga Dewi. Ratu
          mendengar bahwa Prabu Minak Jinggo hendak melamarnya, namun Rtu
          Kencono Wungu tidak menyukai karena Prabu Minak Jinggo adalah Raja
          yang kasar dan menakutkan. Apabila menolak maka Zprabu Minak Jinggo
          akan memerangi dan jelas bala tentara Majapahit tidak akan mampu
          menghadapinya. Akhirnya sang Ratu mempunyai ide yaitu “Barang siapa
          yang dapat mengalahkan Prabu Minak Jinggo akan diajadikan suaminya
          apabila seorang laki-laki dan akan diangkat menjadi saudaranya apabila
          seorang perempuan. Kemudian muncullah seseorang yang bernama Damar
          Wulan yang datang kepada Sang Ratu agar diperkenankan mengikuti
          sayembara tersebut. Dikirimlah kurir untuk mengirim surat tantangan
          kepada Raja Blambangan tersebut. Merasa dihina maka Prabu Minak Jinggo
          mau melayani tantangan Damar Wulan. Bergegaslah Prabu Minak Jinggo
          dengan diiringi bala tentara yang banyak dan kuat menuju Majapahit.
          Kemudian beliau dan bala tentaranya beristirahat di suatu daerah
          tepatnya antara Kraksaan – Probolinggo. Rupanya beliau disambut
          gembira oleh penduduk setempat dan memberikan hiburan berupa
          tari-tarian dan gendingan. (lagu jawa yang diiringi music tradisional
          seperti gamelan, gong, dll) dan Prabu Minak Jinggo sangat menyukainya.
          Karena merupakan tempat penyambutan Sang Prabu maka dikenal dngan
          Daerah Gendingan/nyanyian. Maka sampai dengan sekarang disebut dengan
          Desa Gending.
        </div>
        <div className="bagan">
          <h1 className="mb-5 fs-italic text-white text-center fw-bold">
            Struktur Organisasi Desa
          </h1>
          <Image alt="logo" src={logo} width={1000} height={600} />
        </div>
      </div>
    </div>
  );
}
