import React from "react";
import { courses } from "@/staffsData/courses";
import Image from "next/image";
export default function CourseInfo({ params }) {
  const { id } = params;
  //why its shows undefined
  const course = courses.find((course) => course.id === id);
  console.log(id);
  console.log(course);

  return (
    <div className="container">
      <div className="w-full max-h-[300px] overflow-hidden object-cover">
        <Image
          src={course.img}
          className="object-fill aspect-video"
          alt={course.name}
          width={1200}
          height={400}
        />
      </div>
      <h1 className="text-4xl uppercase underline text-center py-4 font-medium">{course.name}</h1>
      <p className="leading-tight tracking-tight max-w-3xl mx-auto text-center">{course.desc}</p>
    </div>
  );
}
