import Link from "next/link";
import React from "react";

export default function Navlists({ navItem }) {
  return (
    <Link href={navItem.href}>
      <li className="text-base px-2 cursor-pointer hover:bg-white hover:text-gray-900 md:hover:underline md:hover:bg-transparent md:hover:text-white underline-offset-2 w-screen md:w-full text-center py-2 md:py-0 md:text-sm lg:text-lg">
        {navItem.title}
      </li>
    </Link>
  );
}
