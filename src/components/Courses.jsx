import React from "react";
import Corousal from "./Corousal";

const Courses = () => {
  let slides = [
    <div className="bg-red-500 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[70%] mx-auto lg:w-[30%] md:w-[50%]">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white w-40 h-28 border-none rounded-lg"></div>
        <div className="text-lg font-bold mt-5">Bth</div>
        <div>08:00 AM 05/08/25 Wednesday</div>
      </div>
      <div className=" text-right">
        <a className="underline decoration-2 " href="">
          Register now
        </a>
      </div>
    </div>,
    <div className="bg-pink-600 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[70%] mx-auto lg:w-[30%] md:w-[50%]">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white w-40 h-28 border-none rounded-lg"></div>
        <div className="text-lg font-bold mt-5">Mth</div>
        <div>08:00 AM 05/08/25 Wednesday</div>
      </div>
      <div className=" text-right">
        <a className="underline decoration-2 " href="">
          Register now
        </a>
      </div>
    </div>,
    <div className="bg-sky-500 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[70%] mx-auto lg:w-[30%] md:w-[50%]">
      <div className="flex xs: flex-col xs: items-center xs: justify-center">
        <div className="xs: bg-white xs: w-40 xs: h-28 xs: border-none xs: rounded-lg"></div>
        <div className="xs: text-lg xs: font-bold xs: mt-5"> Cth</div>
        <div>08:00 AM 05/08/25 Wednesday</div>
      </div>
      <div className=" xs: text-right">
        <a className="xs: underline xs: decoration-2 " href="">
          Register now
        </a>
      </div>
    </div>,
  ];
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-extrabold text-center mb-16">Courses</h1>

      <Corousal slides={slides} />

      <div className="flex-col mx-20 gap-10 flex  justify-around w-auto "></div>
    </div>
  );
};

export default Courses;
