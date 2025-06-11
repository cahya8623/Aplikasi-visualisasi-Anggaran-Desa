import Expense from "@/component/Expenses";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TableIncome from "@/component/tabelIncome";
import { useState } from "react";

import TablePembiayaan from "@/component/TablePembiayaan";
import TableBelanja from "@/component/TableBelanja";
import { Navigation } from "swiper/modules";

interface DataItem {
  jmlPendapatan: number;
  Source: string;
}

interface Pembiayaan {
  Penerimaan: number;
  Pengeluaran: number;
}

interface Expenses {
  kebutuhan: string;
  total: number;
  Realisasi: number;
}

interface Belanja {
  Anggaran: number;
  Belanja: string;
}

export default function APDES() {
  const [incomeSubmit, setIncomeSubmit] = useState<DataItem[]>([]);
  const [expenseSubmit, setExpenseSubmit] = useState<Expenses[]>([]);
  const [Pembiayaan, setPembiayaan] = useState<Pembiayaan[]>([]);
  const [Belanja, setBelanja] = useState<Belanja[]>([]);
  //   const { selectedYear } = useYear();
  return (
    <div className="swiper">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="d-flex flex-column justify-content-center">
            <h1 className="my-4 text-center">Realisasi</h1>
            <Expense
              isShow={true}
              submit={expenseSubmit}
              setSubmit={setExpenseSubmit}
              TableHead="table-dark"
              ShowTable={false}
              width="20vw"
              height="10vh"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <h1 className="my-4 text-center">Belanja</h1>
          <TableBelanja
            isShow={true}
            submit={Belanja}
            setSubmit={setBelanja}
            showTable={false}
            TableHead="table-dark"
            width="80vw"
            height="50vh"
          />
        </SwiperSlide>

        <SwiperSlide>
          <h1 className="my-4 text-center">Pembiayaan</h1>
          <TablePembiayaan
            isShow={true}
            submit={Pembiayaan}
            setSubmit={setPembiayaan}
            TableHead="table-dark"
            showTable={false}
          />
        </SwiperSlide>

        <SwiperSlide>
          <h1 className="my-4 text-center">Pendapatan</h1>
          <TableIncome
            isShow={true}
            submit={incomeSubmit}
            setSubmit={setIncomeSubmit}
            showTable={false}
            TableHead="table-dark"
            width="80vw"
            height="50vh"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
