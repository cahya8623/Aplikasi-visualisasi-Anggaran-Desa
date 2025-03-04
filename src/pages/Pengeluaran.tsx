import Sidebar from "@/component/sidebar";
import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <div>
        <button type="button" className="m-1 btn btn-primary">
          <i className="bi bi-pencil-fill"></i> Edit
        </button>
        <button type="button" className="btn btn-danger">
          <i className="bi bi-trash3-fill"></i> Hapus
        </button>
      </div>
    );
  }
}

export default function Pengeluaran() {
  return (
    <div className="d-flex vw-100 vh-100">
      <Sidebar />
      <div className="Home p-0 bg-light-subtle ">
        <section className=" bg-dark-subtle p-3 text-dark rounded py-20">
          <h1 className="fw-bold">Halaman Pengeluaran</h1>
        </section>

        <div className="Pengeluaran">
          <button type="button" className=" my-3 btn btn-success">
            <i className="bi bi-plus-circle"></i> Tambah
          </button>
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
              <tr>
                <th scope="row">1</th>
                <td>12/2/2002</td>
                <td>Kesehatan</td>
                <td>500000000000000000000</td>
                <td>Lorem</td>
                <td className="gap-2">
                  <Button></Button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>02/03/2003</td>
                <td>Infrastruktur</td>
                <td>Rp.23000000</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid sint possimus harum? Explicabo consequuntur corporis
                  harum vero beatae corrupti reprehenderit aliquid facilis
                  distinctio, assumenda eos incidunt ipsum autem? Unde, magni.
                </td>
                <td className="gap-2">
                  <Button></Button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>12/03/2025</td>
                <td>Keamanan</td>
                <td>Rp.2000000</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid sint possimus harum? Explicabo consequuntur corporis
                  harum vero beatae corrupti reprehenderit aliquid facilis
                  distinctio, assumenda eos incidunt ipsum autem? Unde, magni.
                </td>
                <td className="gap-2">
                  <Button></Button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>02/03/2003</td>
                <td>Infrastruktur</td>
                <td>Rp.23000000</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid sint possimus harum? Explicabo consequuntur corporis
                  harum vero beatae corrupti reprehenderit aliquid facilis
                  distinctio, assumenda eos incidunt ipsum autem? Unde, magni.
                </td>
                <td className="gap-2">
                  <Button></Button>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>12/03/2025</td>
                <td>Keamanan</td>
                <td>Rp.2000000</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid sint possimus harum? Explicabo consequuntur corporis
                  harum vero beatae corrupti reprehenderit aliquid facilis
                  distinctio, assumenda eos incidunt ipsum autem? Unde, magni.
                </td>
                <td className="gap-2">
                  <Button></Button>
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>12/03/2025</td>
                <td>Keamanan</td>
                <td>Rp.2000000</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid sint possimus harum? Explicabo consequuntur corporis
                  harum vero beatae corrupti reprehenderit aliquid facilis
                  distinctio, assumenda eos incidunt ipsum autem? Unde, magni.
                </td>
                <td className="gap-2">
                  <Button></Button>
                </td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>12/03/2025</td>
                <td>Keamanan</td>
                <td>Rp.2000000</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid sint possimus harum? Explicabo consequuntur corporis
                  harum vero beatae corrupti reprehenderit aliquid facilis
                  distinctio, assumenda eos incidunt ipsum autem? Unde, magni.
                </td>
                <td className="gap-2">
                  <Button></Button>
                </td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>12/03/2025</td>
                <td>Keamanan</td>
                <td>Rp.2000000</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid sint possimus harum? Explicabo consequuntur corporis
                  harum vero beatae corrupti reprehenderit aliquid facilis
                  distinctio, assumenda eos incidunt ipsum autem? Unde, magni.
                </td>
                <td className="gap-2">
                  <Button></Button>
                </td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>12/03/2025</td>
                <td>Keamanan</td>
                <td>Rp.2000000</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid sint possimus harum? Explicabo consequuntur corporis
                  harum vero beatae corrupti reprehenderit aliquid facilis
                  distinctio, assumenda eos incidunt ipsum autem? Unde, magni.
                </td>
                <td className="gap-2">
                  <Button></Button>
                </td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>12/03/2025</td>
                <td>Keamanan</td>
                <td>Rp.2000000</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid sint possimus harum? Explicabo consequuntur corporis
                  harum vero beatae corrupti reprehenderit aliquid facilis
                  distinctio, assumenda eos incidunt ipsum autem? Unde, magni.
                </td>
                <td className="gap-2">
                  <Button></Button>
                </td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>12/03/2025</td>
                <td>Keamanan</td>
                <td>Rp.2000000</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid sint possimus harum? Explicabo consequuntur corporis
                  harum vero beatae corrupti reprehenderit aliquid facilis
                  distinctio, assumenda eos incidunt ipsum autem? Unde, magni.
                </td>
                <td className="gap-2">
                  <Button></Button>
                </td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>12/03/2025</td>
                <td>Keamanan</td>
                <td>Rp.2000000</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid sint possimus harum? Explicabo consequuntur corporis
                  harum vero beatae corrupti reprehenderit aliquid facilis
                  distinctio, assumenda eos incidunt ipsum autem? Unde, magni.
                </td>
                <td className="gap-2">
                  <Button></Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
