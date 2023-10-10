import NavMenu from "@/components/Header/NavMenu";
import Image from "next/image";
import { TbWorldWww } from "react-icons/tb";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { BsMap } from "react-icons/bs";
const contactInfo = {
  id: crypto.randomUUID(),
  title: "bgift institute of science & technology",
  logo: "logo.png",
  location: "Unishe Tower, Mymensingh Road, Chandona Chowrasta, Gazipur-1702",
  phone: "+88 01922-065111",
  phoneTwo: "+88 01992-077041",
  email: "bist.admission@gmail.com",
  website: "www.bist.edu.bd",
  iconCall: <AiFillPhone size={18} />,
  iconMail: <AiFillMail size={18} />,
  iconWeb: <TbWorldWww size={18} />,
  iconMap: <BsMap size={18} />,
};
export default function Contact() {
  return (
    <>
      {/* component */}
      <div className="flex justify-center items-center w-screen h-min-screen  flex-col">
        {/* COMPONENT CODE */}
        <div className="container my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-gray-900 text-white">
            <div className="flex">
              <h1 className="font-bold uppercase text-3xl">
                Send us a message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                defaultValue={""}
              />
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>
          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">
                Drop in our office
              </h1>
              <p className="text-slate-200 flex items-center gap-2">
                {contactInfo.iconMap} {contactInfo.location}
              </p>
              <div className="flex my-4 w-full ">
                <div className="flex flex-col"></div>
                <div className="flex flex-col">
                  <h2 className="text-3xl py-2">Email us or visit our Website</h2>
                  <p className="text-slate-200 flex items-center gap-2">
                    {contactInfo.iconMail}
                    {contactInfo.email}{" "}
                  </p>
                  <p className="text-slate-200 flex items-center gap-2">
                    {" "}
                    {contactInfo.iconWeb}
                    {contactInfo.website}
                  </p>
                </div>
              </div>
              <div className="flex my-4 w-2/3 ">
                <div className="flex flex-col">
                  <h2 className="text-2xl w-full">Call Us</h2>
                  <p className="text-slate-200 flex items-center gap-2 w-full">
                    {contactInfo.iconCall}
                    {contactInfo.phone}
                  </p>
                  <p className="text-slate-200 flex items-center gap-2 w-full">
                    {contactInfo.iconCall}
                    {contactInfo.phoneTwo}
                  </p>
                </div>
              </div>
            
            </div>
            {/* end of line */}
          </div>
        </div>
      </div>
    </>
  );
}
