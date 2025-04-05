import React from "react";
import { Link } from "react-router-dom";
const OurMinistries = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="xl:mx-65">
      <h1 className="text-2xl font-extrabold mb-10 text-center mt-10 lg:mt-15 xl:mt-15 xl:text-3xl ">
        Our Ministries
      </h1>

      <div className=" flex flex-col gap-10">
        <div className="relative">
          <Link onClick={scrollToTop} to="/biblecollege#bible-coll">
            <img
              className=" w-[90%] mx-auto h-80 rounded-lg md:h-64 lg:h-80 lg:w-[80%] lg:mx-auto xl:w-[80%] xl:h-[400px] xl:mx-auto "
              src="public/bibleColl-pic.png"
            />
            <div className="absolute top-10 left-35 text-white text-center text-lg lg:text-xl xl:text-2xl font-bold ">
              Bible College
            </div>
          </Link>
        </div>

        <div className="flex flex-col justify-around mb-10 w-auto mx-10 gap-10 md:flex-row lg:flex-row xl:mx-23 xl:gap-5 lg:justify-center xl:justify-center">
          <div className="relative">
            <Link onClick={scrollToTop} to="/cbs#cbs">
              <img
                src="public/CBSpic.png"
                className=" w-[100%] h-54 md:h-64 md:w-[330px] lg:mx-0 lg:w-[350px] md:mx-0 md:justify-center xl:h-[300px] xl:w-[520px] "
              />
              <div className="absolute bottom-10 left-25 text-white text-center text-lg lg:text-xl xl:text-2xl font-bold ">
                {" "}
                Children Bible Study
              </div>
            </Link>
          </div>
          <div className="relative">
            <Link onClick={scrollToTop} to="/womensministry#womens-min">
              <img
                src="public/womenPic.png"
                className="w-[100%] h-54 md:h-64 md:w-[330px] lg:mx-0 lg:w-[350px] md:mx-0 md:justify-center xl:h-[300px] xl:w-[520px]"
              />
              <div className="absolute bottom-10 left-25 text-white text-center text-lg lg:text-xl xl:text-2xl font-bold ">
                Womens Fellowship
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMinistries;
