import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useYear } from "./ContexAPI";

export type measuringChart = {
  width: string;
  height: string;
};
type DataBulan = {
  tahun: number;
  bulan: string;
  amount: number;
};

export default function ComparationMonth() {
  const [dataBulan, setDataBulan] = useState<DataBulan[]>([]);
  const { selectedYear } = useYear();

  useEffect(() => {
    fetch("http://localhost:3000/api/getMonth")
      .then((res) => res.json())
      .then((data) => setDataBulan(data.data))
      .catch((err) => console.log(`error fetching${err}`));
  }, []);

  const bulanLengkap = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const data = {
    labels: bulanLengkap,
    datasets: [
      {
        label: "Total",
        data: bulanLengkap.map((bulan) => {
          const found = dataBulan.find((item) => item.bulan === bulan);
          return found ? found.amount : 0;
        }),
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
        display: true,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const bulan = bulanLengkap[tooltipItem.dataIndex];
            const nilai = tooltipItem.raw.toLocaleString("id-ID");
            return `${bulan}: Rp.${nilai}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "80vw" }}>
      <Line data={data} options={options} />
    </div>
  );
}
