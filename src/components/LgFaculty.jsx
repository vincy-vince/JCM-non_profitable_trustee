import React from "react";
import { FacultyInfo } from "../js/facultiesInfo";
const LgFaculty = () => {
  const faculty = FacultyInfo.map((info) => {
    return (
      <div
        key={info.id}
        className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max xl:w-[400px] xl:h-[360px]"
      >
        <img
          className="w-full h-[40%] rounded-lg xl:h-[500px]"
          src={info.img}
          alt="profile"
        />
        <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
          <div className="text-xl font-extrabold my-2 text-center">
            {info.name}
          </div>
          <div className="text-lg font-extrabold mb-2 text-center">
            {info.educationalStatus}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="mt-15">
      <div className="text-lg font-bold text-center md:text-xl lg:text-2xl xl:text-3xl">
        Our Faculties
      </div>
      <div className="flex flex-row gap-6 mt-15 mx-10 xl:mx-40">
        {faculty.map((s) => {
          return s;
        })}
      </div>
    </div>
  );
};

export default LgFaculty;
