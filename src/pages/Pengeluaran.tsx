import Sidebar from "@/component/sidebar";
import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <div className="gap-2">
        <button type="button" className="m-2 btn btn-primary">
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
    {
      id: 5,
      Tanggal: "11/6/2045",
      Kebutuhan: "infastruktur",
      Belanja: 230000000,
      Keterangan: "bagus",
    },
  ];
  return (
    <div className="d-flex vw-100 vh-100">
      <Sidebar />
      <div className="Home p-0 bg-light-subtle vh-100">
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
      </div>
    </div>
  );
}
