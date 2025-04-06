import React from "react";
import { UpcomEvent } from "../js/UpcomingEvents";

const LgUpComEvent = () => {
  const upcomeve = UpcomEvent.map((event) => {
    return (
      <div className="bg-pink-800 h-72 p-3 text-white rounded-lg flex flex-col justify-between w-[70%] mx-auto lg:w-[100%] md:w-[50%] xl:w-[100%]">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white w-[100%] h-30 border-none rounded-lg"></div>
          <div className="text-lg font-bold mt-5"> {event.title}</div>
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
  return (
    <div>
      <div className="mt-20">
        <h1 className="text-2xl font-extrabold text-center mb-16">
          Upcoming events
        </h1>
        <div className="flex-row mx-20 gap-10 flex justify-around w-auto xl:mx-80">
          {upcomeve.map((eve, index) => {
            return <div key={index}>{eve}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default LgUpComEvent;
