import React from "react";
import { Link } from "react-router-dom";
const LgCourses = () => {
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-extrabold text-center mb-16">Courses</h1>
      <div className="flex-row mx-20 gap-10 flex  justify-around w-auto ">
        <div className="bg-red-500/85 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[70%] mx-auto lg:w-[30%] md:w-[50%] xl:w-[23%]">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white w-[100%] h-30 border-none rounded-lg"></div>
            <div className="text-lg font-bold mt-5">Bth</div>
            <div>08:00 AM 05/08/25 Wednesday</div>
          </div>
          <div className=" text-right">
            <a className="underline decoration-2 " href="">
              Register now
            </a>
          </div>
        </div>

        <div className="bg-red-500/85 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[70%] mx-auto lg:w-[30%] md:w-[50%] xl:w-[23%]">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white w-[100%] h-30 border-none rounded-lg"></div>
            <div className="text-lg font-bold mt-5">Mth</div>
            <div>08:00 AM 05/08/25 Wednesday</div>
          </div>
          <div className=" text-right">
            <a className="underline decoration-2 " href="">
              Register now
            </a>
          </div>
        </div>

        <div className="bg-red-500/85 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[70%] mx-auto lg:w-[30%] md:w-[50%] xl:w-[23%]">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white w-[100%] h-30 border-none rounded-lg"></div>
            <div className="text-lg font-bold mt-5">Cth</div>
            <div>08:00 AM 05/08/25 Wednesday</div>
          </div>
          <div className=" text-right">
            <a className="underline decoration-2 " href="">
              Register now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgCourses;
