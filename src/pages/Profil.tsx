import Navbar from "@/component/Navbar";

export default function Profil() {
  return (
    <div>
      <Navbar BackgroundColor="#222831" />

      <div className="bg-content">
        <div className="sub-content">
          <h1 className="text-center">Visi</h1>
          <h4 className="text-center">
            &quot;Kebersihan adalah sebagian dari iman&quot;
          </h4>
        </div>
        <div className="sub-content mb-5">
          <h1 className="text-center">Misi</h1>
          <ol className="fs-4 ">
            <li>Sayang Ibu</li>
            <li>Sayang Ayah</li>
            <li>Sayang Kakek</li>
            <li>Sayang Nenek</li>
            <li>Sayang Anak Orang</li>
          </ol>
        </div>
      </div>
      <div className="bg-content mt-0">
        <h1>Sejarah Desa</h1>
      </div>
    </div>
  );
}
