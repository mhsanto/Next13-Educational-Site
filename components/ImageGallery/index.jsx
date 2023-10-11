"use client";
import useFirestore from "@/hooks/useFirestore";
import Image from "next/image";
import React from "react";
import "./style.css";
import Link from "next/link";
export default function ImageGallery() {
  const { docs: images } = useFirestore("images");
  return (
    <div className="__gridDesign">
      <div className="uppercase flex flex-col justify-between text-center py-8 items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold ">Students of BIST</h1>
          <p>2020 -2023 Event Photos</p>
        </div>
        <Image src="/assets/logo.png" width={120} height={120} alt="logo" />
        <div>
          <Link
            href="/contact"
            className="bg-gray-900 text-white px-14 py-2 hover:bg-gra-800"
          >
            Join this community
          </Link>
        </div>
      </div>
      {images.length > 0 ? (
        images.map((image) => (
          <div
            key={image.imageUrl}
            className="h-[350px] rounded-md overflow-hidden __images"
          >
            <Image
              width={400}
              height={350}
              src={image.imageUrl}
              className="__img"
              alt="uploaded pic"
            />
          </div>
        ))
      ) : (
        <h1 className="text-center text-2xl">Loading...</h1>
      )}
    </div>
  );
}
