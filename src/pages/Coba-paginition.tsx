import { Button } from "./Pengeluaran";

export default function coba() {
  const data = [
    {
      id: 1,
      Tanggal: "12/2/2003",
      Kebutuhan: "infastruktur",
      Belanja: 2200000,
      Keterangan: "bagus",
    },
    {
      id: 2,
      Tanggal: "30/5/2045",
      Kebutuhan: "infastruktur",
      Belanja: 30000000,
      Keterangan: "bagus",
    },
    {
      id: 3,
      Tanggal: "22/4/2012",
      Kebutuhan: "infastruktur",
      Belanja: 560000000,
      Keterangan: "bagus",
    },
    {
      id: 4,
      Tanggal: "11/6/2045",
      Kebutuhan: "infastruktur",
      Belanja: 230000000,
      Keterangan: "bagus",
    },
  ];
  return (
    <div>
      <table className="table table-hover align-text-center p-5 table-dark mt-1  ">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Tanggal</th>
            <th scope="col">Kebutuhan</th>
            <th scope="col">Total Belanja</th>
            <th scope="col">Keterangan</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.Tanggal}</td>
              <td>{item.Kebutuhan}</td>
              <td>{item.Belanja}</td>
              <td>{item.Keterangan}</td>
              <td>
                <Button></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
