import React from "react";
import Corousal from "./Corousal";
import { Course } from "../js/CoursesInfo";
const Courses = () => {
  const course = Course.map((course) => {
    return (
      <div className="bg-red-500/85 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[80%] mx-auto lg:w-[30%] md:w-[40%]">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white w-53 h-28 border-none rounded-lg md:w-62 md:h-30"></div>
          <div className="text-lg font-bold mt-5">{course.course}</div>
          <div>{course.time}</div>
        </div>
        <div className=" text-right">
          <a className="underline decoration-2 " href="">
            {course.register}
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="mt-20">
      <h1 className="text-2xl font-extrabold text-center mb-16">Courses</h1>

      <Corousal slides={course} />
    </div>
  );
};

export default Courses;
