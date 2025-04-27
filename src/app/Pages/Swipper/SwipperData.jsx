"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../Swipper/SwipperStyles.css";
import { Navigation } from "swiper/modules";

export default function SwipperData() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
   

      <div className="w-full h-full">
      <div className="w-full h-[5vw] bg-red-600 flex items-center">
      <div
          ref={prevRef}
          className="swiper-button-prev w-[40px] h-[40px] bg-black text-white flex items-center justify-center rounded-full z-10 cursor-pointer"
        >
          &lt;
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next w-[40px] h-[40px] bg-black text-white flex items-center justify-center rounded-full z-10 cursor-pointer"
        >
          &gt;
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3.2}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
