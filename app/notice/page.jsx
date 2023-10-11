import Link from "next/link";
import { BsCalendarDate } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
const notices = [
  {
    id: crypto.randomUUID(),
    title: "Registration process is going on for Department of AMT, FDT",
    date: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    role: "Administrator",
  },
  {
    id: crypto.randomUUID(),
    title: "All Students have to pay their tuition fees by 10th October",
    date: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    role: "Vice Principal",
  },
  {
    id: crypto.randomUUID(),
    title: "The institute will close due to Ashura on 10th September 19",
    date: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    role: "Class Teacher",
  },
  {
    id: crypto.randomUUID(),
    title:
      "New students have to dress properly,Anyone who does not dress properly will be fined",
    date: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    role: "Administrator",
  },
];
export default function Notice() {
  return (
    <div className="container flex flex-col gap-2 mt-4">
      <h1 className="text-center text-2xl py-2 font-semibold">
        Welcome to Notice page
      </h1>
      {notices.map((notice) => (
        <div
          key={notice.id}
          className="bg-gray-900 text-white flex flex-col py-4 gap-2 px-4 rounded"
        >
          <Link href="/notice" className="underline text-lg">
            {notice.title}
          </Link>
          <p className="flex items-center gap-2 font-sm">
            <BsCalendarDate />
            {notice.date}
          </p>
          <p className="flex items-center gap-2 font-sm text-slate-300">
            <BiUserCircle />
            {notice.role}
          </p>{" "}
        </div>
      ))}
    </div>
  );
}
