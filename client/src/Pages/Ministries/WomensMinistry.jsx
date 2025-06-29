import React, { useState } from "react";
import MenuBar from "../../components/MenuBar";
import Footer from "../../components/Footer";
import Location from "../../components/Location";
import Volunteer from "../../components/Volunteer";
import UpcomingEvents from "../../components/UpcomingEvents";
import LgUpComEvent from "../../components/LgUpComEvent";
import { HashLink } from "react-router-hash-link";
const WomensMinistry = () => {
  return (
    <div>
      <MenuBar />

      <div
        id="womens-min"
        className=" bg-[url(womenPic.png)]  h-[400px]  p-10  w-auto  bg-cover  bg-no-repeat  mt-24  mx-4 md:h-[500px] lg:h-[600px] xl:h-[630px]"
      >
        <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-extrabold">
          {" "}
          Women's Ministry
        </h1>
        {/* <button className="w-max px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10 hover:bg-blue-900 transition-colors lg:hidden">
          <HashLink to={"/#home"}>Donate</HashLink>
        </button>
        <button className="w-max font-bold px-3 py-2 bg-blue-900 text-white border-none rounded-lg text-lg mt-10 hover:bg-blue-800 transition-colors hidden md:hidden lg:block xl:py-3 xl:px-4 lg:text-lg xl:text-xl">
          <HashLink to={"/#lghome"}>Donate</HashLink>
        </button> */}
      </div>

      <div className="mx-10 text-center my-15 lg:txt-lg xl:text-xl xl:mx-45">
        <div className="text-lg md:text-xl lg:text-2xl font-bold mb-5">
          Sisters' Gathering:
        </div>
        <div>
          Special meetings for women are conducted every year. We have decided
          to provide training to help them start self-employment ventures,
          enabling them to improve their economic status.
        </div>
      </div>
      {/* collage */}

      <div className="xl:mx-40">
        <img
          className="rounded-lg w-[80%] mx-auto h-[300px] my-4 xl:h-[500px]"
          src="graduate.webp"
        ></img>

        <div className="flex flex-row w-[80%] mx-auto gap-4 mb-15">
          <img className="rounded-lg w-1/2 mx-auto" src="graduate.webp"></img>
          <img className="rounded-lg w-1/2 mx-auto" src="graduate.webp"></img>
        </div>
      </div>

      {/* Text */}
      <div className="mt-5 text-center text-sm md:text-lg mx-8 lg:text-lg xl:mx-45 xl:text-xl">
        <div className="font-bold text-lg md:text-xl lg:text-2xl mb-5 xl:text-3xl xl:mb-10">
          Village Ministry
        </div>

        <div className="xl:mx-40">
          <img
            className="rounded-lg w-[80%] mx-auto h-[300px] my-4 xl:h-[500px]"
            src="graduate.webp"
          ></img>

          <img
            className="rounded-lg w-[80%] mx-auto h-[300px] my-4 xl:h-[500px]"
            src="graduate.webp"
          ></img>
        </div>
      </div>

      {/* volunteer */}

      <Volunteer />
      <Location />

      {/* upcoming events */}
      <div className="block md:block lg:hidden">
        <UpcomingEvents />
      </div>
      <div className="hidden md:hidden lg:block">
        <LgUpComEvent />
      </div>

      <Footer />
    </div>
  );
};

export default WomensMinistry;
