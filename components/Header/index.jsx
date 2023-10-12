import React from "react";
import Notice from "../Notice";
import Image from "next/image";
import NavMenu from "./NavMenu";
const menuHeader = {
  title: "bgift institute of science & technology",
  logo: "logo.png",
  location: "Unishe Tower, Mymensingh Road, Chandona Chowrasta, Gazipur-1702",
};
export default function Header() {
  return (
    <>
      <div className="container pb-5">
        <div className="flex gap-2 md:gap-5 justify-center flex-col md:flex-row items-center">
          <div className="flex w-fit h-auto">
            <Image
              src={`/assets/${menuHeader.logo}`}
              height={90}
              width={90}
              alt="BIST"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center leading-tight justify-center ">
            <h2 className="text-2xl md:text-4xl text-center uppercase font-medium">
              {menuHeader.title}
            </h2>
            <p className="text-center text-xs md:text-sm font-medium text-zinc-700 capitalize">
              {menuHeader.location}
            </p>
          </div>
        </div>
      </div>
      <NavMenu />
    </>
  );
}
