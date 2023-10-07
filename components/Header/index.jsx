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
      <Notice />
      <div className="container pb-5">
        <div className="flex gap-5 justify-center">
        <div className="flex">
          <Image
            src={`/assets/${menuHeader.logo}`}
            height={90}
            width={90}
            alt="BIST"
          />
        </div>
        <div className="">
          <h2 className="text-[3rem] uppercase font-medium">{menuHeader.title}</h2>
          <p className="text-center text-sm font-medium text-zinc-700">{menuHeader.location}</p>
        </div>
        </div>
      </div>
      <NavMenu/>
    </>
  );
}
