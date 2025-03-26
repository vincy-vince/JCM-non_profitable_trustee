import React from "react";

const Volunteer = () => {
  return (
    <div className="relative flex flex-col md:flex-row md:justify-around gap-4 w-auto mx-10 mt-16 bg-indigo-50 border-2 border-indigo-200 h-36 p-5 items-center rounded-lg mb-20 md:h-54 ">
      <div className="text-md md:text-xl lg:text-2xl font-extrabold xl:text-3xl">
        Wanna Join as a volunteer ?<br></br>
        you are Always welcome to join
      </div>
      <button className="font-bold text-sm bg-blue-950 text-white p-2 border-none rounded-lg ml-30 px-5 md:text-lg lg:text-xl lg:p-3">
        Join Now
      </button>
      <div className="absolute w-[50px] bg-white h-[50px] rounded-full left-[-5%] bottom-5 md:left-[-2%] md:bottom-6 border-2 border-indigo-200"></div>
      <div className="absolute w-[50px] bg-white h-[50px] rounded-full right-[-7%] top-5 md:right-[-2%] md:top-8 border-2 border-indigo-200 "></div>
    </div>
  );
};

export default Volunteer;
