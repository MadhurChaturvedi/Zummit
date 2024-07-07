import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";

export default function Carosel() {
  return (
    <div className="bg-skin pt-10">
      <div className="bg-skyblue py-10 px-32">
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          modules={[Pagination,Autoplay]}
          className="mySwiper"
        >
          {/* <SwiperSlide>
            <Slide1 />
          </SwiperSlide> */}
          <SwiperSlide>
            <Slide2 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide3 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide4 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
