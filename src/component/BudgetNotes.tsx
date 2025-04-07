import { useEffect, useState } from "react";
import { useYear } from "./ContexAPI";

export default function Notes() {
  const [DataBudget, setDataBudget] = useState<{ total: number }[]>([]);
  const [DataExpenses, setDataExpenses] = useState<{ kebutuhan: string }[]>([]);
  const { selectedYear } = useYear();

  console.log("data budget " + DataExpenses);

  useEffect(() => {
    fetch(`http://localhost:3000/api/income?year=${selectedYear}`)
      .then((res) => res.json())
      .then((data) => setDataBudget(data.data))
      .catch((err) => console.log(`error fetching${err}`));

    fetch(`http://localhost:3000/api/expense?year=${selectedYear}`)
      .then((res) => res.json())
      .then((data) => setDataExpenses(data.data))
      .catch((err) => console.log(`error fetching${err}`));
  }, [selectedYear]);

  // const total = parseInt(DataBudget[0]);
  // console.log(DataExpenses);
  return (
    <div className=" container d-flex flex-row ">
      <div
        className=" p-3 shadow px-4 fs-4 lh-base me-5 rounded w-50 m-auto "
        style={{ height: "110px", backgroundColor: "#8fff94" }}
      >
        <p className="fw-bold" style={{ color: "#16611a" }}>
          Total Budget <br />
          Rp.
          {DataBudget.length > 0
            ? DataBudget[0].total.toLocaleString("id")
            : "Loading..."}
        </p>
        <p></p>
      </div>

      <div
        className="p-3 shadow px-4 rounded w-50  lh-sm opacity-90 fs-4"
        style={{
          height: "110px",
          backgroundColor: "#8fdcff",
        }}
      >
        <p className="fw-bold" style={{ color: "#095885" }}>
          Total Alokasi Dana Terbesar <br />
          {DataExpenses.length > 0 ? DataExpenses[0].kebutuhan : "Loading..."}
        </p>
      </div>
    </div>
  );
}
