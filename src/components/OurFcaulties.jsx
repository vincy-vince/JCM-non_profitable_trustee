import React from "react";
import Corousal from "./Corousal";
const OurFaculties = () => {
  let slides = [
    <div
      key={1}
      className="flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] "
    >
      <img
        className="w-full h-[40%] rounded-t-lg"
        src="public/boy2.png"
        alt="profile"
      />
      <div className=" rounded-b-lg">
        <div className="text-xl font-extrabold mb-5 text-center mt-5">
          Tijo K John
        </div>
        <div className="text-lg font-extrabold mb-5 text-center">
          MSc( Electronics),MTh{" "}
        </div>
      </div>
    </div>,
    <div
      key={2}
      className="flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%]"
    >
      <img
        className="w-full h-[40%] rounded-t-lg"
        src="public/dummy-prof2.webp"
        alt="profile"
      />
      <div className=" rounded-b-lg ">
        <div className="text-xl font-extrabold mb-5 text-center mt-5">
          Tijo K John
        </div>
        <div className="text-lg font-extrabold mb-5 text-center">
          MSc( Electronics),MTh{" "}
        </div>
      </div>
    </div>,
    <div
      key={3}
      className="flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%]"
    >
      <img
        className="w-full h-[40%] rounded-t-lg"
        src="public/boy2.png"
        alt="profile"
      />
      <div className=" rounded-b-lg ">
        <div className="text-xl font-extrabold mb-5 text-center mt-5">
          Tijo K John
        </div>
        <div className="text-lg font-extrabold mb-5 text-center">
          MSc( Electronics),MTh{" "}
        </div>
      </div>
    </div>,
  ];
  return (
    <div className="m-auto w-full mt-15">
      <Corousal slides={slides} />
    </div>
  );
};

export default OurFaculties;
