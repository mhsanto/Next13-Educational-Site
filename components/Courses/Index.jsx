"use client";
import { useState, useMemo } from "react";
import Swiper from "@/components/Hero/Swiper";
import SwiperOne from "../Swipers/SwiperOne";

const courseText = {
  title: "Services we provide",
  slogan:
    " Our vision is to create a world where every individual has the opportunity to reach their full potential and live a life of fulfillment and happiness.",
  desc: "BIST advertised four a long time B.Sc. in (Hons.) degree, Subjects are- Attire Make & Innovation (AMT), Design Plan & Innovation (FDT) and Single man of Trade Organization (BBA) to meet the developing require for progressed instruction. And Confirmation in designing subjects are Nine. This course centers on Promotion, Deals Advancement, Showcasing Communication, Open Connection, Individual Offering, Business, Deals Administration etc. which are perspectives of corporate segment as require of globalization period. This division are effectively locked in in Lesson room instructing, Mentoring, Industry visit, Work preparing, Counseling, Indoor venture (Subject arranged) and numerous more for whole advancement of understudies. These courses are completely work situated and proficient course. From the point of see of the show time, these subjects are exceptionally vital to move forward the quality of instruction, the mechanical exchange, the production lines, the improvement of all sorts of work environments, the advancement of the standard of social orders, the improvement of nations and countries.",
};
export default function Courses() {
  const [show, setShow] = useState(false);
  const memoizedCourseText = useMemo(() => {
    return courseText;
  }, []);
  const { title, slogan, desc } = memoizedCourseText;

  return (
    <div className="flex items-center  py-6">
      <div className="pl-16 pr-12">
        <div className="flex flex-col gap-2 mb-4 ">
          <h3 className="text-3xl font-semibold uppercase ">{title}</h3>
          <p className="text-base font-medium max-w-lg tracking-tighter text-[gray] pb-5">
            {slogan}
          </p>
         
        </div>

        <div className="max-w-lg text-start text-sm text-gray-800 font-medium ">
          {show ? (
            <p className="">
              {desc}
              <span
                onClick={() => setShow(!show)}
                className="font-medium hover:underline cursor-pointer"
              >
                {"  "} show less
              </span>
            </p>
          ) : (
            <p>
              {desc.slice(0, 700)}
              <span
                onClick={() => setShow(!show)}
                className="font-medium hover:underline cursor-pointer"
              >
                {"  "} show more...
              </span>
            </p>
          )}
        </div>
      </div>
    <SwiperOne />
    </div>
  );
}
