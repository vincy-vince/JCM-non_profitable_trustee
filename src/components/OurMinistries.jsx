import React from "react";
import { Link } from "react-router-dom";
const OurMinistries = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="xl:mx-65">
      <h1 className="text-2xl font-extrabold mb-10 text-center mt-15 xl:text-3xl ">
        Our Ministries
      </h1>

      <div className="flex flex-col gap-10">
        <Link onClick={scrollToTop} to="/biblecollege#bible-coll">
          <div className="bg-sky-300 w-auto h-54 border-none rounded-lg text-center mx-10 pt-5 md:h-64 lg:h-80 lg:w-[70%] lg:mx-auto xl:w-[900px] xl:w-auto xl:h-[400px] xl:mx-23 xl:text-xl font-bold">
            Bible College
          </div>
        </Link>

        <div className="flex flex-col justify-around mb-10 w-auto mx-10 gap-5 md:flex-row lg:flex-row xl:mx-23 xl:gap-5 lg:justify-center xl:justify-center">
          <Link onClick={scrollToTop} to="/cbs#cbs">
            <div className="bg-pink-300 w-auto h-54 border-none rounded-lg text-center pt-5 md:h-64 md:w-[330px] lg:mx-0 lg:w-[350px] md:mx-0 md:justify-center xl:h-[300px] xl:w-[520px] xl:text-xl font-bold">
              Children Bible Study
            </div>
          </Link>
          <Link onClick={scrollToTop} to="/womensministry#womens-min">
            <div className="bg-slate-300 w-auto h-54 border-none rounded-lg text-center pt-5 md:h-64 md:w-[330px] lg:mx-0 lg:w-[350px] md:mx-0 md:justify-center xl:h-[300px] xl:w-[520px] xl:text-xl font-bold">
              Womens Fellowship
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurMinistries;
