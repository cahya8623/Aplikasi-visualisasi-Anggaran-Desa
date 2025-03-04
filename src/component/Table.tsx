type Box = {
  width?: string;
  height?: string;
};

export default function Tables({ width = "90vw", height = "80vh" }: Box) {
  return (
    <div>
      <table
        className="table table-hover align-text-center p-5 table-dark mt-1  "
        style={{ width, height }}
      >
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Date</th>
            <th scope="col">Departemen</th>
            <th scope="col">Budget</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>12/2/2002</td>
            <td>Kesehatan</td>
            <td>500000000000000000000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>02/03/2003</td>
            <td>Infrastruktur</td>
            <td>Rp.23000000</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>12/03/2025</td>
            <td>Keamanan</td>
            <td>Rp.2000000</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>02/03/2003</td>
            <td>Infrastruktur</td>
            <td>Rp.23000000</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>12/03/2025</td>
            <td>Keamanan</td>
            <td>Rp.2000000</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>12/03/2025</td>
            <td>Keamanan</td>
            <td>Rp.2000000</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>12/03/2025</td>
            <td>Keamanan</td>
            <td>Rp.2000000</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>12/03/2025</td>
            <td>Keamanan</td>
            <td>Rp.2000000</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>12/03/2025</td>
            <td>Keamanan</td>
            <td>Rp.2000000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
