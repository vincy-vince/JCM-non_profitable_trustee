import React from "react";
import Corousal from "./Corousal";
const OurFaculties = () => {
  let slides = [
    <div
      key={1}
      className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max"
    >
      <img
        className="w-full h-[40%] rounded-t-lg"
        src="Mr.Tijo.jpeg"
        alt="profile"
      />
      <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
        <div className="text-sm font-extrabold my-2 text-center ">
          Tijo K John
        </div>
        <div className="text-sm font-extrabold mb-2 text-center">
          MSc( Electronics),MTh{" "}
        </div>
      </div>
    </div>,
    <div
      key={2}
      className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max"
    >
      <img
        className="w-full h-[40%] rounded-t-lg"
        src="public/sis-Suma.jpeg"
        alt="profile"
      />
      <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
        <div className="text-sm font-extrabold my-2 text-center">
          Sis. Suma Thomas
        </div>
        <div className="text-sm font-extrabold mb-2 text-center">M.div</div>
      </div>
    </div>,
    <div
      key={3}
      className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max"
    >
      <img
        className="w-full h-[40%] rounded-t-lg"
        src="public/Pr.Robbin.jpeg"
        alt="profile"
      />
      <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
        <div className="text-sm font-extrabold my-2 text-center ">
          Pr. Robbin Dhevadas
        </div>
        <div className="text-sm font-extrabold mb-2 text-center">Bca</div>
      </div>
    </div>,
    <div
      key={4}
      className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max "
    >
      <img
        className="w-full h-[40%] rounded-t-lg"
        src="boy2.png"
        alt="profile"
      />
      <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
        <div className="text-xl font-extrabold my-2 text-center ">Pr. Reji</div>
        <div className="text-lg font-extrabold mb-2 text-center">(Bca)</div>
      </div>
    </div>,
    <div
      key={5}
      className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max "
    >
      <img
        className="w-full h-[40%] rounded-t-lg"
        src="public/Pr-Praveen.jpeg"
        alt="profile"
      />
      <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
        <div className="text-xl font-extrabold my-2 text-center ">
          Pr. Praveen
        </div>
        <div className="text-lg font-extrabold mb-2 text-center">(bca)</div>
      </div>
    </div>,
  ];
  return (
    <div className="m-auto w-full mt-15">
      <div className="text-center mb-10 text-2xl font-bold md:text-2xl lg:text-3xl">
        Our Faculties
      </div>
      <Corousal slides={slides} />
    </div>
  );
};

export default OurFaculties;
