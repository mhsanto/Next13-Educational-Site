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
import { UserAuth } from "@/lib/Context";

export default function SwiperOne() {
  const { user } = UserAuth();
  const rating = (number) => {
    const starIcons = Array(number).fill(
      <AiFillStar size={20} color="bisque" />
    );
    return starIcons;
  };
  return (
    <Swiper slidesPerView={3} rewind={true} className="SwiperOne">
      {courses.map((course) => (
        <SwiperSlide
          key={course.id}
          className="flex flex-col rounded-md bg-gray-900"
        >
          <div className="flex flex-col gap-3 ">
            <Image
              src={course.img}
              width={200}
              height={200}
              alt={course.name}
            />
            <h3 className="px-3">{course.name}</h3>
            <p className="text-base text-zinc-200">{course.subject}</p>
            <span className="flex justify-center">{rating(course.star)}</span>
            <span className="text-sm">({course.star})</span>
            <p className="text-sm">Monthly 2000TK only</p>
          </div>

          <div className=" flex justify-between w-full p-7">
            <div className="flex flex-col">
              <span className="text-sm text-zinc-200 underline underline-offset-2">
                Course Time
              </span>
              <span className="text-sm">{course.courseTime} Year</span>
            </div>
            {user ? (
              <Link
                href="/contact"
                className="bg-slate-50 hover:bg-slate-200 text-sm font-medium text-gray-900 px-4 py-2 rounded-sm"
              >
                Enroll Now
              </Link>
            ) : (
              <Link
                href="/sign-in"
                className="bg-slate-50 hover:bg-slate-200 text-sm font-medium text-gray-900 px-4 py-2 rounded-sm"
              >
                Enroll Now
              </Link>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
