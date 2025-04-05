import React from "react";
import { Link } from "react-router-dom";
import { Course } from "../js/CoursesInfo";
const LgCourses = () => {
  const course = Course.map((course) => {
    return (
      <div className="bg-red-500/85 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[70%] mx-auto lg:w-[30%] md:w-[50%] xl:w-[40%]">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white w-[100%] h-30 border-none rounded-lg"></div>
          <div className="text-lg font-bold mt-5 xl:text-xl">
            {course.course}
          </div>
          <div className="text-sm lg:text-lg">{course.time}</div>
        </div>
        <div className=" text-right">
          <a
            className="underline decoration-2 text-lg xl:text-xl font-bold"
            href="https://forms.gle/psrojQuFUDfQXg2u8"
          >
            {course.register}
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="mt-20 xl:mx-40">
      <h1 className="text-2xl font-extrabold text-center mb-16">Courses</h1>
      <div className="flex-row mx-20 gap-10 flex  justify-around w-auto ">
        {course.map((c) => {
          return c;
        })}
        {/* <div className="bg-red-500/85 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[70%] mx-auto lg:w-[30%] md:w-[50%] xl:w-[40%]">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white w-[100%] h-30 border-none rounded-lg"></div>
            <div className="text-lg font-bold mt-5 xl:text-xl">Cth</div>
            <div className="text-sm lg:text-lg">
              08:00 AM 05/08/25 Wednesday
            </div>
          </div>
          <div className=" text-right">
            <a
              className="underline decoration-2 text-lg xl:text-xl font-bold"
              href="https://forms.gle/psrojQuFUDfQXg2u8"
            >
              Register now
            </a>
          </div>
        </div>

        <div className="bg-red-500/85 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[70%] mx-auto lg:w-[30%] md:w-[50%] xl:w-[40%]">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white w-[100%] h-30 border-none rounded-lg"></div>
            <div className="text-lg font-bold mt-5 xl:text-xl">Bth</div>
            <div className="text-sm lg:text-lg">
              08:00 AM 05/08/25 Wednesday
            </div>
          </div>
          <div className=" text-right">
            <a
              className="underline decoration-2 text-lg xl:text-xl font-bold"
              href="https://forms.gle/psrojQuFUDfQXg2u8"
            >
              Register now
            </a>
          </div>
        </div>

        <div className="bg-red-500/85 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[70%] mx-auto lg:w-[30%] md:w-[50%] xl:w-[40%]">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white w-[100%] h-30 border-none rounded-lg"></div>
            <div className="text-lg font-bold mt-5 xl:text-xl">Dth</div>
            <div className="text-sm lg:text-lg">
              08:00 AM 05/08/25 Wednesday
            </div>
          </div>
          <div className=" text-right">
            <a
              className="underline decoration-2 text-lg xl:text-xl font-bold"
              href="https://forms.gle/psrojQuFUDfQXg2u8"
            >
              Register now
            </a>
          </div>
        </div>

        <div className="bg-red-500/85 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[70%] mx-auto lg:w-[30%] md:w-[50%] xl:w-[40%]">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white w-[100%] h-30 border-none rounded-lg"></div>
            <div className="text-lg font-bold mt-5 xl:text-xl">Mth</div>
            <div className="text-sm lg:text-lg">
              08:00 AM 05/08/25 Wednesday
            </div>
          </div>
          <div className=" text-right">
            <a
              className="underline decoration-2 text-lg xl:text-xl font-bold"
              href=""
            >
              Register now
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LgCourses;
