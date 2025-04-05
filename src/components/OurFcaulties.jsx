import React from "react";
import Corousal from "./Corousal";
import { FacultyInfo } from "../js/facultiesInfo";
const OurFaculties = () => {
  const faculty = FacultyInfo.map((info) => {
    return (
      <div
        key={info.id}
        className="relative flex flex-col justify-center items-center rounded-lg mx-auto w-[50%] h-max md:w-[250px] md:h-[460px] md:mb-5"
      >
        <img
          className="w-full h-[40%] md:h-[300px] rounded-lg"
          src={info.img}
          alt="profile"
        />
        <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
          <div className="text-sm font-extrabold my-2 text-center ">
            {info.name}
          </div>
          <div className="text-sm font-extrabold mb-2 text-center">
            {info.educationalStatus}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="m-auto w-full mt-15">
      <div className="text-center mb-10 text-2xl font-bold md:mb-3 md:text-2xl lg:text-3xl">
        Our Faculties
      </div>
      <Corousal slides={faculty} />
    </div>
  );
};

export default OurFaculties;
