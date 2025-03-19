import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="xs: mt-20">
      <h1 className="xs: text-2xl xs: font-extrabold xs: text-center xs: mb-16">
        Upcoming events
      </h1>

      <div className="xs: flex-col xs: mx-20 xs: gap-10 xs: flex  xs: justify-around xs: w-auto ">
        <div className="xs: bg-red-500 xs: h-72 xs: p-3 xs: text-white xs: rounded-lg xs: flex xs: flex-col xs: justify-between">
          <div className="xs: flex xs: flex-col xs: items-center xs: justify-center">
            <div className="xs: bg-white xs: w-40 xs: h-28 xs: border-none xs: rounded-lg"></div>
            <div className="xs: text-lg xs: font-bold xs: mt-5">
              Womens Meeting
            </div>
            <div>08:00 AM 05/08/25 Wednesday</div>
          </div>
          <div className=" xs: text-right">
            <a className="xs: underline xs: decoration-2 " href="">
              Register now
            </a>
          </div>
        </div>

        <div className="xs: bg-red-500 xs: h-72 xs: p-3 xs: text-white xs: rounded-lg xs: flex xs: flex-col xs: justify-between">
          <div className="xs: flex xs: flex-col xs: items-center xs: justify-center">
            <div className="xs: bg-white xs: w-40 xs: h-28 xs: border-none xs: rounded-lg"></div>
            <div className="xs: text-lg xs: font-bold xs: mt-5">
              Womens Meeting
            </div>
            <div>08:00 AM 05/08/25 Wednesday</div>
          </div>
          <div className=" xs: text-right">
            <a className="xs: underline xs: decoration-2 " href="">
              Register now
            </a>
          </div>
        </div>

        <div className="xs: bg-red-500 xs: h-72 xs: p-3 xs: text-white xs: rounded-lg xs: flex xs: flex-col xs: justify-between">
          <div className="xs: flex xs: flex-col xs: items-center xs: justify-center">
            <div className="xs: bg-white xs: w-40 xs: h-28 xs: border-none xs: rounded-lg"></div>
            <div className="xs: text-lg xs: font-bold xs: mt-5">
              Womens Meeting
            </div>
            <div>08:00 AM 05/08/25 Wednesday</div>
          </div>
          <div className=" xs: text-right">
            <a className="xs: underline xs: decoration-2 " href="">
              Register now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
