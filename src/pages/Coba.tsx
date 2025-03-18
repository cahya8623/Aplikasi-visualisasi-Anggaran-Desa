import { useState } from "react";

interface DataItem {
  Kebutuhan: string;
  total: number;
  keterangan: string;
}

export default function Paginition() {
  const [Kebutuhan, setKebutuhan] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [keterangan, setKeterangan] = useState<string>("");

  const [submit, setSubmit] = useState<DataItem[]>([]);

  console.log(submit);

  const onClickSubmit = () => {
    if (Kebutuhan === "" || isNaN(total) || keterangan === "") {
      alert("isi input terlebih dahulu");
      return;
    }
    setSubmit((item) =>
      item.concat({
        Kebutuhan: Kebutuhan,
        total: total,
        keterangan: keterangan,
      })
    );
  };

  function onClickDelete(index: number) {
    setSubmit(submit.filter((_, id) => id != index));
  }
  return (
    <div className="vh-100 d-flex flex-column bg-secondary">
      <input
        onChange={(e) => setKebutuhan(e.target.value)}
        type="text"
        placeholder="Kebutuhan"
      />
      <input
        onChange={(e) => setTotal(parseInt(e.target.value))}
        type="text"
        placeholder="total belanja"
      />
      <input
        onChange={(e) => setKeterangan(e.target.value)}
        type="text"
        placeholder="keterangan"
      />
      <button onClick={onClickSubmit} type="submit">
        Submit
      </button>
      <ul>
        {submit.map((item, Index) => (
          <div key={item.keterangan}>
            <li> {item.Kebutuhan}</li>
            <li> {item.total}</li>
            <li> {item.keterangan}</li>
            <button onClick={() => onClickDelete(Index)}>Delete</button>
            <li>=================</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
