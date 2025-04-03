import React from "react";
import { Link } from "react-router-dom";

const Volunteer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="relative flex flex-col md:flex-row md:justify-around gap-4 w-auto mx-10 mt-16 bg-indigo-50 border-2 border-indigo-200 h-36 p-5 items-center rounded-lg mb-20 md:h-54 xl:mx-72">
      <div className="absolute w-[50px] bg-white h-[50px] rounded-full right-[-7%] top-5 md:right-[-2%] md:top-8 xl:right-[-3%] xl:top-[4%] "></div>
      <div className="text-md md:text-xl lg:text-2xl font-extrabold xl:text-3xl">
        Wanna Join as a volunteer ?<br></br>
        you are Always welcome to join
      </div>
      <Link onClick={scrollToTop} to="/contact">
        <button className="font-bold text-sm bg-blue-950 text-white p-2 border-none rounded-lg ml-30 px-5 md:text-lg lg:text-xl lg:p-3 xl:px-4">
          Join Now
        </button>
      </Link>
      <div className="absolute w-[50px] bg-white h-[50px] rounded-full left-[-5%] bottom-5 md:left-[-2%] md:bottom-6 xl:left-[-3%] xl:bottom-2"></div>
    </div>
  );
};

export default Volunteer;
