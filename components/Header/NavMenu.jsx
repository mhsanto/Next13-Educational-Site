import React from "react";
import Navlists from "./Navlists";
const navItems = [
  {
    id: crypto.randomUUID(),
    title: "Home",
    href: "/",
  },
  {
    id: crypto.randomUUID(),
    title: "Contact Us",
    href: "/contact",
  },
  {
    id: crypto.randomUUID(),
    title: "Notice",
    href: "/notice",
  },
  {
    id: crypto.randomUUID(),
    title: "Our Students",
    desc: "lorem d dlfaj fl;adjfla jld;afja;ldjf;lj",
    href: "/students",
  },
  {
    id: crypto.randomUUID(),
    title: "About Us",
    href: "",
    subMenu: [
      {
        id: crypto.randomUUID(),
        image: "",
        title: "About Us",
        desc: "lorem d dlfaj fl;adjfla jld;afja;ldjf;lj",
        href: "/about",
      },
      {
        id: crypto.randomUUID(),
        image: "",
        title: "Head of Institute",
        desc: "lorem d dlfaj fl;adjfla jld;afja;ldjf;lj",
        href: "/head",
      },

      {
        id: crypto.randomUUID(),
        title: "Exam Results",
        desc: "lorem d dlfaj fl;adjfla jld;afja;ldjf;lj",
        href: "/exam",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Education & Training",
    href: "/education",
  },
  {
    id: crypto.randomUUID(),
    title: "Gallery",
    href: "/gallery",
  },
];
export default function NavMenu() {
  return (
    <nav className="flex justify-center py-4 items-center w-full   border-t-orange-500 border-b-orange-500 border-2">
      <ul className="flex items-center  gap-8 font-medium">
        {navItems.map((navItem) => (
          <Navlists key={navItem.id} navItem={navItem} />
        ))}
        <button className=" bg-white px-4 py-2 rounded-md ml-10">
          Join Now
        </button>
      </ul>
    </nav>
  );
}
