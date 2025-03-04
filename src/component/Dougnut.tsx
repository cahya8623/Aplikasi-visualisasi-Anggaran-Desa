import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels);

type DoughnutChartProps = {
  width?: string;
  height?: string;
};
export default function DoughnutChart({
  width = "100vw",
  height = "100vh",
}: DoughnutChartProps) {
  const data = [
    { name: "data A", value: 3000000 },
    { name: "data B", value: 25000000 },
    { name: "data C", value: 24000000 },
    { name: "data E", value: 50000000 },
    { name: "data F", value: 123000000 },
  ];

  const totalValue = data.reduce((acc, item) => acc + item.value, 0);

  // Menghitung persentase untuk setiap nilai

  const config = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.value),

        backgroundColor: [
          "#FF6384",
          "#FF9F40",
          "#FFCD56",
          "#4BC0C0",
          "#36A2EB",
        ],
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
