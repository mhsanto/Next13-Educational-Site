import React from "react";
import Navlists from "./Navlists";
import { navItems } from "./navitems";
export default function NavMenu() {
  return (
    <nav className="flex justify-center py-2 items-center bg-gray-900 text-white drop-shadow-sm ">
      <ul className="flex items-center  gap-8 font-base">
        {navItems.map((navItem) => (
          <Navlists key={navItem.id} navItem={navItem} />
        ))}
        Join us
      </ul>
    </nav>
  );
}
