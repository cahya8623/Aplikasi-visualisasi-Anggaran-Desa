import { useEffect, useState } from "react";

export default function Filter() {
  const [data, setData] = useState<{ tahun: number }[]>([]);
  const [SelectYear, setSelectYear] = useState<number>();
  useEffect(() => {
    fetch("http://localhost:3000/api/filter")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setData(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(data)


  const Selected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectYear(parseInt(e.target.value));
  };
  return (
    <div className="ms-3 mt-3 p-2">
      <select onChange={Selected} className=" p-2 rounded">
        {data.map((item) => (
          <option key={item.tahun} value={item.tahun}>
            {item.tahun}
          </option>
        ))}
      </select>
    </div>
  );
}
