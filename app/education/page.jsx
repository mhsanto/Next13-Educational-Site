import SwiperTwo from "@/components/Swipers/SwiperTwo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Education() {
  return (
    <div>
      <h1 className="text-3xl py-6 uppercase underline text-center font-medium px-5 ">
        Education And Training
      </h1>

      <div className="flex ">
        <div className="flex flex-col justify-between px-8 py-5">
          <h2 className="text-2xl font-medium text-center">
            Explore Our Options
          </h2>
          <div>
            <Image src="/assets/logo.png" width={200} height={200} alt="logo" />
          </div>
          <Link href="/contact" className=" bg-gray-900 text-white text-center py-2 rounded">
            Connect With Us
          </Link>
        </div>
        <SwiperTwo />
      </div>
    </div>
  );
}
