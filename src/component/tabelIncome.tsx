import { Button } from "@/pages/Pengeluaran";

type TableIncomeProps = {
  width?: string;
  height?: string;
};

export default function TableIncome({
  width = "90vw",
  height = "80vh",
}: TableIncomeProps) {
  const data = [
    { id: 1, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 2, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 3, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 4, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
    { id: 5, Tanggal: "21/3/2034", Income: 1200000, Source: "Desa" },
  ];
  return (
    <div>
      <table
        className="table table-hover p-0 align-text-center  table-dark   "
        style={{ width, height }}
      >
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Tanggal</th>
            <th scope="col">Jumlah Pendapatan</th>
            <th scope="col">Sumber Pendapatan</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.Tanggal}</td>
              <td>{item.Income}</td>
              <td>{item.Source}</td>
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
