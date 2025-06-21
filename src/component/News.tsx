import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
type Database = {
  id: number;
  gambar: string;
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
    fetch(`http://localhost:3000/api/Image?year=${selectedYear}`)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [Submit, confirm]);

  return (
    <Swiper
      spaceBetween={280}
      centeredSlides={false}
      slidesPerView={4}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={true}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className=" me-5 position-absolute"
      style={{ left: "-100px", width: "110%" }}
    >
      {Data.map((item: Database, index) => (
        <SwiperSlide
          className="hover-box d-flex flex-column justify-content-center align-center"
          key={index}
        >
          <Image
            className=""
            src={`/uploads/${item.gambar}`}
            alt={`Foto ${index + 1}`}
            width={550}
            height={450}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
