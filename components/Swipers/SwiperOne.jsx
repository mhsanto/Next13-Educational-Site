"use client";
import React, { useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { courses } from "@/staffsData/courses";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiperOne.css";

// import required modules
import Image from "next/image";
import Link from "next/link";

export default function SwiperOne() {
  const rating = (number) => {
    const starIcons = Array(number).fill(<AiFillStar size={25} />);
    return starIcons;
  };
  return (
    <>
      <Swiper slidesPerView={3} spaceBetween={30} className="SwiperOne">
        {courses.map((course) => (
          <SwiperSlide
            key={course.id}
            className="flex flex-col rounded-md bg-gray-900"
          >
            <div className="flex flex-col gap-3">
              <Image
                src={course.img}
                width={200}
                height={200}
                alt={course.name}
              />
              <h3>{course.name}</h3>
              <p className="text-base text-zinc-200">{course.subject}</p>
              <span className="flex justify-center">{rating(course.star)}</span>
              <span>({course.star})</span>
            </div>

            <div className=" flex justify-between w-full p-7">
              <div className="flex flex-col">
                <span className="text-sm text-zinc-200 underline underline-offset-2">Course Time</span>
                <span className="text-sm">{course.courseTime}{ " "}Year</span>
              </div>
              <Link
                href="/"
                className="bg-slate-50 hover:bg-slate-200 text-sm font-medium text-gray-900 px-4 py-2 rounded-sm"
              >
                Enroll Now
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
