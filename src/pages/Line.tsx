/* eslint-disable @typescript-eslint/no-explicit-any */
import { TooltipItem } from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export type measuringChart = {
  width: string;
  height: string;
};

type Database = {
  tahun: number;
  total: number;
};
export default function ComparationChart() {
  const [dataChart, setdataChart] = useState<Database[]>([]);
  // console.log(dataChart.total);
  useEffect(() => {
    fetch("/api/lineChart")
      .then((res) => res.json())
      .then((data) => setdataChart(data.data))
      .catch((err) => console.log(`error fetching${err}`));
  }, []);

  console.log(dataChart);

  const data = {
    labels: dataChart.map((item) => item.tahun),
    datasets: [
      {
        label: "Total",
        data: dataChart.map((item) => Number(item.total)),
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "blue",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<"line">) {
            const value = context.parsed.y;
            return `Rp ${value.toLocaleString("id-ID")}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: number | string) {
            const num = typeof value === "string" ? Number(value) : value;
            return `Rp ${num.toLocaleString("id-ID")}`;
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}
