import { Button } from "@/pages/Pengeluaran";

type Measuring = {
  width: string;
  height: string;
  ShowTable?: boolean;
};

export default function Expense({
  width,
  height,
  ShowTable = true,
}: Measuring) {
  const data = [
    {
      id: 1,
      Tanggal: "12/2/2003",
      Kebutuhan: "infastruktur",
      Belanja: 2200000,
      Keterangan:
        "bagasdsadsadkjpaodkoawjdkopiwasdsadsadiosahjdp9oihjohdsgiofugdhsfiusdofgiousdhiousgdhiouasdasdiksadopkjadopkjadpjadaddopaiajdoipaodihjoasidjiasdopjksadopkjaopjdwkpowajdpioajdiosado0padjsopis",
    },
    {
      id: 2,
      Tanggal: "30/5/2045",
      Kebutuhan: "infastruktur",
      Belanja: 30000000,
      Keterangan:
        "bagasdsadsadkjpaodkoawjdkopiwasdsadsadiosahjdp9oihjohdsgiofugdhsfiusdofgiousdhiousgdhiouasdasdiksadopkjadopkjadpjadaddopaiajdoipaodihjoasidjiasdopjksadopkjaopjdwkpowajdpioajdiosado0padjsopis",
    },
    {
      id: 3,
      Tanggal: "22/4/2012",
      Kebutuhan: "infastruktur",
      Belanja: 560000000,
      Keterangan:
        "bagasdsadsadkjpaodkoawjdkopiwasdsadsadiosahjdp9oihjohdsgiofugdhsfiusdofgiousdhiousgdhiouasdasdiksadopkjadopkjadpjadaddopaiajdoipaodihjoasidjiasdopjksadopkjaopjdwkpowajdpioajdiosado0padjsopis",
    },
    {
      id: 4,
      Tanggal: "11/6/2045",
      Kebutuhan: "infastruktur",
      Belanja: 230000000,
      Keterangan:
        "bagasdsadsadkjpaodkoawjdkopiwasdsadsadiosahjdp9oihjohdsgiofugdhsfiusdofgiousdhiousgdhiouasdasdiksadopkjadopkjadpjadaddopaiajdoipaodihjoasidjiasdopjksadopkjaopjdwkpowajdpioajdiosado0padjsopis",
    },
    {
      id: 5,
      Tanggal: "11/6/2045",
      Kebutuhan: "infastruktur",
      Belanja: 230000000,
      Keterangan:
        "bagasdsadsadkjpaodkoawjdkopiwasdsadsaaspdlas[pdl[aspdl[sapdl[pdiosahjdp9oihjohdsgiofugdhsfiusdofgiousdhiousgdhiouasdasdiksadopkjadopkjadpjadaddopaiajdoipaodihjoasidjiasdopjksadopkjaopjdwkpowajdpioajdiosado0padjsopisbagasdsadsadkjpaodkoawjdkopiwasdsadsaaspdlas[pdl[aspdl[sapdl[pdiosahjdp9oihjohdsgiofugdhsfiusdofgiousdhiousgdhiouasdasdiksadopkjadopkjadpjadaddopaiajdoipaodihjoasidjiasdopjksadopkjaopjdwkpowajdpioajdiosado0padjsopis",
    },
  ];
  return (
    <div className="Pengeluaran">
      <table className="table table-hover align-text-center  table-dark mt-1  ">
        <thead>
          <tr className="text-center">
            <th scope="col">No</th>
            <th scope="col">Tanggal</th>
            <th scope="col">Kebutuhan</th>
            <th scope="col">Total Belanja</th>
            <th scope="col">Keterangan</th>
            {ShowTable && <th scope="col">Aksi</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="text-center">{item.id}</td>
              <td className="text-center">{item.Tanggal}</td>
              <td className="text-center">{item.Kebutuhan}</td>
              <td className="text-center">Rp.{item.Belanja}</td>
              <td>
                <div className="scroll-keterangan" style={{ width, height }}>
                  {item.Keterangan}
                </div>
              </td>
              {ShowTable && (
                <td>
                  <Button></Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
