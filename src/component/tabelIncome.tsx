import { Button } from "@/pages/Pengeluaran";

type Box = {
  width?: string;
  height?: string;
};

export default function TableIncome({ width = "90vw", height = "80vh" }: Box) {
  return (
    <div>
      <table
        className="table table-hover align-text-center p-5 table-dark mt-1  "
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
          <tr>
            <th scope="row">1</th>
            <td>12/2/2002</td>

            <td>500000000000000000000</td>
            <td>Desa</td>
            <td className="gap-2">
              <Button></Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>02/03/2003</td>

            <td>Rp.23000000</td>
            <td>Desa</td>
            <td className="gap-2">
              <Button></Button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>12/03/2025</td>

            <td>Rp.2000000</td>
            <td>Desa</td>
            <td className="gap-2">
              <Button></Button>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>02/03/2003</td>

            <td>Rp.23000000</td>
            <td>Desa</td>
            <td className="gap-2">
              <Button></Button>
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>12/03/2025</td>

            <td>Rp.2000000</td>
            <td>Desa</td>
            <td className="gap-2">
              <Button></Button>
            </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>12/03/2025</td>

            <td>Rp.2000000</td>
            <td>Desa</td>
            <td className="gap-2">
              <Button></Button>
            </td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>12/03/2025</td>

            <td>Rp.2000000</td>
            <td>Desa</td>
            <td className="gap-2">
              <Button></Button>
            </td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>12/03/2025</td>

            <td>Rp.2000000</td>
            <td>Desa</td>
            <td className="gap-2">
              <Button></Button>
            </td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>12/03/2025</td>

            <td>Rp.2000000</td>
            <td>Desa</td>
            <td className="gap-2">
              <Button></Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
