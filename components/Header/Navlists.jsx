import Link from "next/link";
import React from "react";

export default function Navlists({ navItem }) {
  return (
    <>
      {navItem.subMenu ? (
        <li className="text-base">{navItem.title}</li>
      ) : (
        <Link href={navItem.href}>
          {" "}
          <li className="text-base">{navItem.title}</li>
        </Link>
      )}
    </>
  );
}
