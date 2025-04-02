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
        <div className="text-sm font-extrabold mb-3 text-center mt-3">
          Tijo K John
        </div>
        <div className="text-sm font-extrabold mb-3 text-center">
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
        <div className="text-sm font-extrabold mb-3 text-center mt-3">
          Sis. Suma Thomas
        </div>
        <div className="text-sm font-extrabold mb-3 text-center">
          M.div
        </div>
      </div>
    </div>,
    <div
      key={3}
      className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max"
    >
      <img
        className="w-full h-[40%] rounded-t-lg"
        src="boy2.png"
        alt="profile"
      />
      <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
        <div className="text-sm font-extrabold mb-3 text-center mt-3">
          Pr. Robbin Dhevadas
        </div>
        <div className="text-sm font-extrabold mb-3 text-center">
          Bca
        </div>
      </div>
    </div>,
  ];
  return (
    <div className="m-auto w-full mt-15">
      <div className="text-center mb-10 text-lg font-bold md:text-xl lg:text-2xl">Our Faculties</div>
      <Corousal slides={slides} />
    </div>
  );
};

export default OurFaculties;
