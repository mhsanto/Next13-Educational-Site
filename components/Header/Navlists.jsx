import Link from "next/link";
import React from "react";

export default function Navlists({ navItem }) {
  return (
    <Link href={navItem.href}>

      <li className="text-base cursor-pointer">{navItem.title}</li>
    </Link>
  );
}
