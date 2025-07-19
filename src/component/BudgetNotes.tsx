import { useEffect, useState } from "react";
import { useYear } from "./ContexAPI";

export default function Notes() {
  const [DataBudget, setDataBudget] = useState<{ total: number }[]>([]);
  const [DataAlokasi, setDataAlokasi] = useState<{ kebutuhan: string }[]>([]);
  const [DataExpenses, setDataExpenses] = useState<{ total: string }[]>([]);
  const { selectedYear } = useYear();

  useEffect(() => {
    fetch(`/api/income?year=${selectedYear}`)
      .then((res) => res.json())
      .then((data) => setDataBudget(data.data))
      .catch((err) => console.log(`error fetching${err}`));

    fetch(`/api/expense?year=${selectedYear}`)
      .then((res) => res.json())
      .then((data) => setDataAlokasi(data.data))
      .catch((err) => console.log(`error fetching${err}`));
    fetch(`/api/expense?year=${selectedYear}`)
      .then((res) => res.json())
      .then((data) => setDataExpenses(data.data))
      .catch((err) => console.log(`error fetching${err}`));
  }, [selectedYear]);

  return (
    <div className="container m-1 ">
      <div className="Dana-box ">
        <p className="Label">Pendapatan Desa</p>
        <p className="Font-Data" style={{ color: "#085946" }}>
          Rp.
          {DataBudget.length > 0
            ? DataBudget[0].total.toLocaleString("id")
            : "0"}
        </p>
        <p></p>
      </div>

      <div className="Dana-box">
        <p className="Label">Belanja Desa</p>
        <p className="Font-Data" style={{ color: "#ff1500" }}>
          Rp.
          {DataExpenses.length > 0
            ? parseInt(DataExpenses[0].total).toLocaleString("id")
            : "0"}
        </p>
      </div>

      <div className="Dana-box">
        <p className="Label">Alokasi Dana Terbesar</p>
        <p className="Font-Data" style={{ color: "#00a2ff" }}>
          {DataAlokasi.length > 0
            ? DataAlokasi[0].kebutuhan.toLocaleUpperCase()
            : "Tidak Ada Dana Yang Keluar"}
        </p>
      </div>
    </div>
  );
}
