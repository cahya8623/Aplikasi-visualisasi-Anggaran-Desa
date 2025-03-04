import { Line } from "react-chartjs-2";

export default function ComparationChart() {
  const dataDanaDesa = [
    { tahun: 2015, dana: 5000000 },
    { tahun: 2016, dana: 70000000 },
    { tahun: 2017, dana: 8000000 },
    { tahun: 2018, dana: 300000000 },
    { tahun: 2019, dana: 120000000 },
    { tahun: 2020, dana: 150000000 },
    { tahun: 2021, dana: 140000000 },
    { tahun: 2022, dana: 170000000 },
    { tahun: 2023, dana: 190000000 },
    { tahun: 2024, dana: 210000000 },
  ];

  const data = {
    labels: dataDanaDesa.map((item) => item.tahun),
    datasets: [
      {
        data: dataDanaDesa.map((item) => item.dana),
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

  return <Line data={data} options={options} />;
}
