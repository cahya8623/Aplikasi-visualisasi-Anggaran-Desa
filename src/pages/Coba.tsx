import { useEffect, useState } from "react";

export default function Filter() {
  const [data, setData] = useState<{ tahun: number }[]>([]);
  const [SelectYear, setSelectYear] = useState<string>();

  useEffect(() => {
    fetch("http://localhost:3000/api/filter")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.info("Selected year : " + SelectYear);

  const Selected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectYear(e.target.value);
  };
  return (
    <div className="vh-100 bg-secondary ">
      <p>{SelectYear}</p>

      <select onChange={Selected} className="Scroll-options p-2 rounded">
        {data.map((item) => (
          <option className="" key={item.tahun} value={item.tahun}>
            {item.tahun}
          </option>
        ))}
      </select>
    </div>
  );
}
