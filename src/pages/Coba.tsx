import { useEffect, useState } from "react";

export default function Filter() {
  const [data, setData] = useState<{ tahun: number }[]>([]);
  const [Select, setSelect] = useState<number>();

  useEffect(() => {
    fetch("http://localhost:3000/api/filter")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const Selected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(parseInt(e.target.value));
  };

  console.log(Select);
  return (
    <div>
      <select onChange={Selected}>
        {data.map((item) => (
          <option key={item.tahun} value={item.tahun}>
            {item.tahun}
          </option>
        ))}
      </select>
    </div>
  );
}
