import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export type measuringChart = {
  width: string;
  height: string;
};

type Database = {
  tahun: number;
  total: string;
};
export default function ComparationChart() {
  const [dataChart, setdataChart] = useState<Database[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/lineChart")
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
        data: dataChart.map((item) => item.total),
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
          title: () => "",
          label: (tooltipItem) => `Rp.${tooltipItem.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{ width: "1300px", height: "550px", padding: "30px" }}
    >
      <Line data={data} options={options} />
    </div>
  );
}
