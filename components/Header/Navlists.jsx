import Link from "next/link";
import React from "react";

export default function Navlists({ navItem }) {
  return (
    <>
      {navItem.subMenu ? (
        <li className="text-lg hover:font-medium">{navItem.title}</li>
      ) : (
        <Link href={navItem.href}>
          {" "}
          <li className="text-lg hover:font-medium ">{navItem.title}</li>
        </Link>
      )}
    </>
  );
}
