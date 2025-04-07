import { useEffect, useState } from "react";
import { useYear } from "./ContexAPI";

export default function Filter() {
  const [data, setData] = useState<{ tahun: number }[]>([]);
  const { selectedYear, setSelectedYear } = useYear();

  console.log("select year :" + selectedYear);

  useEffect(() => {
    fetch("http://localhost:3000/api/filter")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const Selected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };
  return (
    <div className="ms-3 mt-3 p-2">
      <select
        value={selectedYear}
        onChange={Selected}
        className="Scroll-options p-2 rounded"
      >
        {data.map((item) => (
          <option className="" key={item.tahun} value={item.tahun}>
            {item.tahun}
          </option>
        ))}
      </select>
    </div>
  );
}
