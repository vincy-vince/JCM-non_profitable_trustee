import React from "react";
import Corousal from "./Corousal";
import { UpcomEvent } from "../js/UpcomingEvents";
const UpcomingEvents = () => {
  const upcomeve = UpcomEvent.map((event) => {
    return (
      <div className="bg-pink-800 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[90%] mx-auto lg:w-[30%] md:w-[40%]">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white w-[100%] h-30 border-none rounded-lg"></div>
          <div className="text-lg font-bold mt-5">{event.title}</div>
          <div>{event.date_time}</div>
        </div>
        <div className=" text-right">
          <a className="underline decoration-2 " href="">
            Register now
          </a>
        </div>
      </div>
    );
  });

  //   <div className="bg-pink-800 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[90%] mx-auto lg:w-[30%] md:w-[40%]">
  //     <div className="flex flex-col items-center justify-center">
  //       <div className="bg-white w-[100%] h-30 border-none rounded-lg"></div>
  //       <div className="text-lg font-bold mt-5">Womens Meeting</div>
  //       <div>08:00 AM 05/08/25 Wednesday</div>
  //     </div>
  //     <div className=" text-right">
  //       <a className="underline decoration-2 " href="">
  //         Register now
  //       </a>
  //     </div>
  //   </div>,
  //   <div className="bg-pink-800 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[90%] mx-auto lg:w-[30%] md:w-[40%]">
  //     <div className="flex flex-col items-center justify-center">
  //       <div className="bg-white w-[100%] h-30 border-none rounded-lg"></div>
  //       <div className="text-lg font-bold mt-5">VBS</div>
  //       <div>08:00 AM 05/08/25 Wednesday</div>
  //     </div>
  //     <div className=" text-right">
  //       <a className="underline decoration-2 " href="">
  //         Register now
  //       </a>
  //     </div>
  //   </div>,
  //   <div className="bg-pink-800 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[90%] mx-auto lg:w-[30%] md:w-[40%]">
  //     <div className="flex xs: flex-col xs: items-center xs: justify-center">
  //       <div className="xs: bg-white xs: w-[100%] h-30 xs: border-none xs: rounded-lg"></div>
  //       <div className="xs: text-lg xs: font-bold xs: mt-5">Medical Camp</div>
  //       <div>08:00 AM 05/08/25 Wednesday</div>
  //     </div>
  //     <div className=" xs: text-right">
  //       <a className="xs: underline xs: decoration-2 " href="">
  //         Register now
  //       </a>
  //     </div>
  //   </div>,
  // ];
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-extrabold text-center mb-16">
        Upcoming events
      </h1>

      <Corousal slides={upcomeve} />

      <div className="flex-col mx-20 gap-10 flex  justify-around w-auto "></div>
    </div>
  );
};

export default UpcomingEvents;
