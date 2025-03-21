import React from "react";

const LgFaculty = () => {
  return (
    <div className="flex flex-row gap-6 mt-15 mx-10">
      <div
        key={1}
        className="flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max"
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
      </div>

      <div
        key={2}
        className="flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max"
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
      </div>

      <div
        key={3}
        className="flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max"
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
      </div>
    </div>
  );
};

export default LgFaculty;
