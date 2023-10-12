"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./custom.css";
import slider from "@/staffsData/Slider.json";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function SwiperJS() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slider.map((s, i) => (
          <SwiperSlide key={i} className="swiper">
            <Image
              width={1000}
              height={300}
              src={`/assets/${s.img}`}
              className="w-full h-auto object-contain aspect-video"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
