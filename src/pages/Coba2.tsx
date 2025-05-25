export default function Coba2() {
  return (
    <div style={{ width: "100vw", height: "100%" }}>
      <Navbar />
      <Image src={Background} alt="background" className="background"></Image>
      <h1 className="Heading">
        Selamat Datang <br />
        Website Resmi Desa Gending
      </h1>
      <h5 className="Heading-2">
        Sumber informasi terbaru tentang pemerintahan di Desa Gending
      </h5>
      <div className="vw-100 bg-white vh-100 p-absolute">
        <h1>halo</h1>
      </div>

      {/* <div className="APBD d-flex px-5">
        <Image
          style={{ marginTop: "150px" }}
          src={Book}
          width={450}
          height={450}
          alt="Book Icon"
        />

        <div className="sub-content">
          <h1>APB DESA {selectedYear}</h1>
          <p style={{ fontSize: "20px" }}>
            Berikut merupakan akumulasi dari pendapatan desa seperti{" "}
            <span style={{ color: "#085946", fontWeight: "700" }}>
              Pendapatan Desa
            </span>
            ,{" "}
            <span style={{ color: "#ff1500", fontWeight: "700" }}>
              Belanja Desa
            </span>{" "}
            dan{" "}
            <span style={{ color: "#00a2ff", fontWeight: "700" }}>
              Alokasi Dana Terbesar
            </span>{" "}
            pada tahun {selectedYear}
          </p>
          <Filter />

          <Notes />
        </div>
      </div> */}
    </div>
  );
}
