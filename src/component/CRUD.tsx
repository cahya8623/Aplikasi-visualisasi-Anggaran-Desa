import { useState } from "react";
interface DataItem {
  Kebutuhan: string;
  total: number;
  keterangan: string;
}
export function CRUD() {
  const [Kebutuhan, setKebutuhan] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [keterangan, setKeterangan] = useState<string>("");

  const [submit, setSubmit] = useState<DataItem[]>([]);

  console.log(submit);

  const onClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
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

  return {
    Kebutuhan,
    total,
    keterangan,
    setKebutuhan,
    setKeterangan,
    setTotal,
    onClickSubmit,
    submit,
    onClickDelete,
  };
}
