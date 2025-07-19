import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
type Database = {
  id: number;
  gambar: string;
  title: string;
  description: string;
};

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useContext, useEffect } from "react";
import { adminContext } from "./LoginContex";
import { useYear } from "./ContexAPI";

export default function App() {
  const { selectedYear, confirm } = useYear();
  const { Data, setSubmit, Submit, setData } = useContext(adminContext);
  useEffect(() => {
    setSubmit(false);
    fetch(`/api/Image?year=${selectedYear}`)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [Submit, confirm]);

  return (
    <Swiper
      spaceBetween={100}
      centeredSlides={false}
      slidesPerView={3.4}
      autoplay={{
        delay: 9000,
        disableOnInteraction: false,
      }}
      pagination={true}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className=" position-absolute rounded"
      style={{ left: "-5px", width: "100vw" }}
    >
      {Data.map((item: Database, index) => (
        <SwiperSlide
          className=" hover-box d-flex flex-column justify-content-center align-center"
          key={index}
        >
          <div className="Box-Gambar">
            <Image
              className="gambar"
              src={`/uploads/${item.gambar}`}
              alt={`Foto ${index + 1}`}
              width={400}
              height={300}
            />
            <h1 className="text-center">{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
