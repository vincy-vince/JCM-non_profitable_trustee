import React from "react";
import Corousal from "./Corousal";

const Trustee = () => {
  let slides = [
    <div
      key={1}
      className=" relative flex flex-col justify-center items-center mx-auto w-[90%] "
    >
      <img
        className=" w-90% md:w-[60%] h-[500px] rounded-lg"
        src="public/sis-Suma.jpeg"
        alt="profile"
      />
      <div className="absolute left-2 right-2 bottom-2 bg-white rounded-lg p-2 h-fit w-[80%] md:w-[55%] mx-auto">
        <div className="text-sm font-extrabold mb-1 text-center mt-1">
          Suma Thomas
        </div>
        <div className="text-sm font-extrabold mb-2 text-center">
          MSc( Electronics),MTh{" "}
        </div>
      </div>
    </div>,
    <div
      key={2}
      className=" relative flex flex-col justify-center items-center mx-auto w-[90%] "
    >
      <img
        className=" w-90% md:w-[60%] h-[500px] rounded-lg"
        src="Mr.Tijo.jpeg"
        alt="profile"
      />
      <div className="absolute left-2 right-2 bottom-2 bg-white rounded-lg p-2 h-fit w-[80%] md:w-[55%] mx-auto">
        <div className="text-sm font-extrabold mb-1 text-center mt-1">
          Tijo K John
        </div>
        <div className="text-sm font-extrabold mb-2 text-center">
          MSc( Electronics),MTh{" "}
        </div>
      </div>
    </div>,
    <div
      key={3}
      className=" relative flex flex-col justify-center items-center mx-auto w-[90%] "
    >
      <img
        className=" w-90% md:w-[60%] h-[500px] rounded-lg"
        src="public/Bro-Arun.jpeg"
        alt="profile"
      />
      <div className="absolute left-2 right-2 bottom-2 bg-white rounded-lg p-2 h-fit w-[80%] md:w-[55%] mx-auto">
        <div className="text-sm font-extrabold mb-1 text-center mt-1">
          Arun Kumar
        </div>
        <div className="text-sm font-extrabold mb-2 text-center">
          MSc( Electronics),MTh{" "}
        </div>
      </div>
    </div>,
  ];
  return (
    <div className="m-auto w-full">
      <Corousal slides={slides} />
    </div>
  );
};

export default Trustee;
