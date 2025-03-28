import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useEffect, useState } from "react";
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
  width = "100vw",
  height = "100vh",
}: DoughnutChartProps) {
  const [data, setData] = useState<Databases[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/pengeluaran")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const totalValue = data.reduce((acc, item) => acc + item.expense, 0);

  // Menghitung persentase untuk setiap nilai

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const backgroundColors = data.map(() => getRandomColor());
  console.log(backgroundColors);

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
        text: "Data Alokasi Dana Desa",
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
      className="m-auto"
      style={{
        width,
        height,
      }}
    >
      <Pie data={config} options={options} />
    </div>
  );
}
