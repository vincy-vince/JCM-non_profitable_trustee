import React from "react";

const OurMinistries = () => {
  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-5 text-center">
        Our Ministries
      </h1>

      <div className="flex flex-col gap-10">
        <div className="bg-sky-300 w-auto h-54 border-none rounded-lg text-center mx-10 pt-5 md:h-64 lg:h-80">
          Bible Colledge
        </div>
        <div className="flex flex-col justify-around mb-10 xs :w-auto mx-10 gap-5 lg:flex-row ">
          <div className="bg-pink-300 w-auto h-54 border-none rounded-lg text-center pt-5 md:h-64 lg:mx-0 lg:w-1/2">
            Children Bible Study
          </div>
          <div className="bg-slate-300 w-auto h-54 border-none rounded-lg text-center pt-5 md:h-64 lg:mx-0 lg:w-1/2">
            Womens Fellowship
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMinistries;
