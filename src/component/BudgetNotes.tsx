export default function Notes() {
  return (
    <div className=" container d-flex flex-row ">
      <div
        className=" p-3 shadow px-4 fs-4 lh-base me-5 rounded w-50 m-auto "
        style={{ height: "110px", backgroundColor: "#8fff94" }}
      >
        <p className="fw-bold" style={{ color: "#16611a" }}>
          Total Budget <br />
          IDR.100.000.000
        </p>
        <p></p>
      </div>

      <div
        className="p-3 shadow px-4 rounded w-50  lh-sm opacity-90 fs-4"
        style={{
          height: "110px",
          backgroundColor: "#8fdcff",
        }}
      >
        <p className="fw-bold" style={{ color: "#095885" }}>
          Alokasi Dana Terbesar <br />
          Makan
        </p>
      </div>
    </div>
  );
}
