import React from "react";

const OurMinistries = () => {
  return (
    <div className="xl:mx-65">
      <h1 className="text-2xl font-extrabold mb-10 text-center xl:text-3xl">
        Our Ministries
      </h1>

      <div className="flex flex-col gap-10">
        <div className="bg-sky-300 w-auto h-54 border-none rounded-lg text-center mx-10 pt-5 md:h-64 lg:h-80 xl:h-[600px] xl:mx-23 xl:text-xl font-bold">
          Bible Colledge
        </div>
        <div className="flex flex-col justify-around mb-10 w-auto mx-10 gap-5 md:flex-row lg:flex-row xl:mx-23 xl:gap-5 xl:justify-center">
          <div className="bg-pink-300 w-auto h-54 border-none rounded-lg text-center pt-5 md:h-64 lg:mx-0 lg:w-1/2 md:mx-0 md:w-1/2 xl:h-[400px] xl:w-[520px] xl:text-xl font-bold">
            Children Bible Study
          </div>
          <div className="bg-slate-300 w-auto h-54 border-none rounded-lg text-center pt-5 md:h-64 lg:mx-0 lg:w-1/2 md:mx-0 md:w-1/2 xl:h-[400px] xl:w-[520px] xl:text-xl font-bold">
            Womens Fellowship
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMinistries;
