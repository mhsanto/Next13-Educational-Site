"use client";
import { useEffect, useState } from "react";
import Navlists from "./Navlists";
import { navItems } from "./navitems";
import { FaHamburger } from "react-icons/fa";
export default function NavMenu() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isWidth, setIsWidth] = useState(0);
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  useEffect(() => {
    //check width is greater than 768px
    setIsWidth(window.innerWidth);
    if (isWidth >= 768) {
      setNavbarOpen(true);
    } 
  }, [navbarOpen, isWidth]);
  return (
    <nav className="flex justify-center items-center md:bg-gray-900 text-white drop-shadow-sm py-5">
      {/* Hamburger menu button for smaller screens */}
      <button
        className="inline-flex items-center justify-center w-10 h-10 ml-auto border rounded-md outline-none visible  md:hidden focus:outline-none absolute top-0 right-0 z-[210]"
        onClick={toggleNavbar}
      >
        <FaHamburger color="gray" size={50} />
      </button>
      {/* Navigation items */}
      <ul
        className="flex flex-col md:flex-row items-center px-3 gap-1 bg-gray-900 md:flex"
        style={{ display: `${navbarOpen ? "flex" : "none"}` }}
      >
        {navItems.map((navItem) => (
          <Navlists key={navItem.id} navItem={navItem} />
        ))}
      </ul>
    </nav>
  );
}
