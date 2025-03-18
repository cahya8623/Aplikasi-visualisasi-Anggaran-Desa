import { useState } from "react";
import Button from "./Button";
import ModalBox, { useModal } from "./ModalBox";

type Measuring = {
  width: string;
  height: string;
  ShowTable?: boolean;
  TableHead?: string;
};

export default function Expense({
  width,
  height,
  ShowTable = true,
  TableHead = "table-info",
}: Measuring) {
  const data = [
    {
      id: 1,
      Tanggal: "12/2/2003",
      Kebutuhan: "infastruktur",
      Belanja: 2200000,
      Keterangan:
        "ini adalah contoh keterangan web desa gending yang dimana isinya keterangan dari sumber pendapatan desa asalnya dari mana yang mana ketika ada dana masuk maka harus di laporkan sumber pendapatannya itu wajib ",
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
        "asdaspokdapsodkapsodkopaskdpoaskdpoaskdpoaskdpaosdkaspodkasopdkaspodksapod",
    },
    {
      id: 5,
      Tanggal: "11/6/2045",
      Kebutuhan: "infastruktur",
      Belanja: 230000000,
      Keterangan:
        "bagasdsadsadkjpaodkoawjdkopiwasdsadsaaspdlas[pdl[aspdl[sapdl[pdiosahjdp9oihjohdsgiofugdhsfiusdofgiousdhiousgdhiouasdasdiksadopkjadopkjadpjadaddopaiajdoipaodihjoasidjiasdopjksadopkjaopjdwkpowajdpioajdiosado0padjsopisbagasdsadsadkjpaodkoawjdkopiwasdsadsaaspdlas[pdl[aspdl[sapdl[pdiosahjdp9oihjohdsgiofugdhsfiusdofgiousdhiousgdhiouasdasdiksadopkjadopkjadpjadaddopaiajdoipaodihjoasidjiasdopjksadopkjaopjdwkpowajdpioajdiosado0padjsopis",
    },
    {
      id: 6,
      Tanggal: "11/6/2045",
      Kebutuhan: "infastruktur",
      Belanja: 230000000,
      Keterangan:
        "bagasdsadsadkjpaodkoawjdkopiwasdsadsaaspdlas[pdl[aspdl[sapdl[pdiosahjdp9oihjohdsgiofugdhsfiusdofgiousdhiousgdhiouasdasdiksadopkjadopkjadpjadaddopaiajdoipaodihjoasidjiasdopjksadopkjaopjdwkpowajdpioajdiosado0padjsopisbagasdsadsadkjpaodkoawjdkopiwasdsadsaaspdlas[pdl[aspdl[sapdl[pdiosahjdp9oihjohdsgiofugdhsfiusdofgiousdhiousgdhiouasdasdiksadopkjadopkjadpjadaddopaiajdoipaodihjoasidjiasdopjksadopkjaopjdwkpowajdpioajdiosado0padjsopis",
    },
  ];
  const [page, setPage] = useState(1);

  console.log(page);

  const maxVisible = 1;

  const getPaginationRange = () => {
    let startPage, endPage;
    if (totalPage <= maxVisible) {
      startPage = 1;
      endPage = totalPage;
    } else {
      const middle = Math.floor(maxVisible / 2);
      if (page <= middle + 1) {
        startPage = 1;
        endPage = maxVisible;
      } else if (page + middle >= totalPage) {
        startPage = totalPage - maxVisible + 1;
        endPage = totalPage;
      } else {
        startPage = page - middle;
        endPage = page + middle;
      }
    }
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };
  const limit = 5;
  const totalPage = Math.ceil(data.length / limit);

  const start = (page - 1) * limit;
  const end = start + limit;
  const { isModalShow, closeModal, showModal } = useModal();
  const [selectedKeterangan, setSelectedKeterangan] = useState("");
  function handleShowModal(keterangan: string) {
    setSelectedKeterangan(keterangan);
    showModal();
  }
  return (
    <div className="Pengeluaran">
      <table className="table table-hover align-text-center  mt-1  ">
        <thead className={TableHead}>
          <tr className="text-center">
            <th scope="col">No</th>
            <th scope="col">Tanggal</th>
            <th scope="col">Kebutuhan</th>
            <th scope="col">Total Belanja</th>
            <th scope="col">Keterangan</th>
            {ShowTable && <th scope="col">Aksi</th>}
          </tr>
        </thead>
        <tbody className="table-light">
          {data.slice(start, end).map((item) => (
            <tr key={item.id}>
              <td className="text-center">{item.id}</td>
              <td className="text-center">{item.Tanggal}</td>
              <td className="text-center">{item.Kebutuhan}</td>
              <td className="text-center">Rp.{item.Belanja}</td>
              <td onClick={() => handleShowModal(item.Keterangan)}>
                <div className="scroll-keterangan" style={{ width, height }}>
                  {item.Keterangan}
                </div>
              </td>
              {ShowTable && (
                <td>
                  <Button
                    label1="Kebutuhan"
                    label2="Total Belanja"
                    Shown={true}
                  ></Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className="p-2  bg-gray-200 rounded"
        >
          &lt;First
        </button>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="p-2  bg-gray-200 rounded"
        >
          &lt; Prev
        </button>

        {getPaginationRange().map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            disabled={true}
            className={`p-2  rounded `}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPage))}
          disabled={page >= totalPage}
          className="p-2 bg-gray-200 rounded"
        >
          Next &gt;
        </button>
        <button
          onClick={() => setPage(totalPage)}
          disabled={page >= totalPage}
          className="p-2 bg-gray-200 rounded"
        >
          Last&gt;
        </button>
      </div>
      <ModalBox
        first="Kebutuhan"
        second={selectedKeterangan}
        ShowInput={true}
        ShowForm={false}
        isShow={isModalShow}
        onCloseModal={closeModal}
      />
    </div>
  );
}
