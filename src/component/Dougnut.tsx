import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useEffect, useState } from "react";
import { useYear } from "./ContexAPI";
ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels);

type DoughnutChartProps = {
  width?: string;
  height?: string;
};

type Databases = {
  id: number;
  date: string;
  kebutuhan: string;
  expense: number;
  keterangan: string;
};
export default function DoughnutChart({
  width = "70vw",
  height = "70vh",
}: DoughnutChartProps) {
  const [data, setData] = useState<Databases[]>([]);
  const { selectedYear } = useYear();

  useEffect(() => {
    if (!selectedYear) return;
    fetch(`http://localhost:3000/api/pengeluaran?year=${selectedYear}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [selectedYear]);

  const totalValue = data.reduce((acc, item) => acc + item.expense, 0);

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const backgroundColors = data.map(() => getRandomColor());

  const config = {
    labels: data.map((item) => item.kebutuhan),
    datasets: [
      {
        data: data.map((item) => item.expense),

        backgroundColor: backgroundColors,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Anggaran Belanja Desa",
        font: {
          size: 24,
          weight: "bold",
        },
      },
      datalabels: {
        formatter: (value: number) =>
          `${((value / totalValue) * 100).toFixed(2)}%`,
        color: "#fff",
        font: {
          weight: "bold",
          size: 14,
        },
        align: "center",
        anchor: "center",
      },
    },
  };

  return (
    <div
      className="d-flex justify-content-center  w-auto "
      style={{
        width,
        height,
      }}
    >
      {data.length <= 0 ? (
        <h1>Tidak Ada Data</h1>
      ) : (
        <Pie data={config} options={options} />
      )}
    </div>
  );
}
