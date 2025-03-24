import React from "react";
import MenuBar from "../../components/MenuBar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Location from "../../components/Location";
import Volunteer from "../../components/Volunteer";
import UpcomingEvents from "../../components/UpcomingEvents";
import LgUpComEvent from "../../components/LgUpComEvent";
const WomensMinistry = () => {
  return (
    <div>
      <MenuBar />

      <div className=" bg-[url(public/background-JCM.png)]  h-[400px]  p-10  w-auto  bg-cover  bg-no-repeat  mt-24  mx-4 md:h-[500px] lg:h-[600px]">
        <h1 className=" text-2xl  font-extrabold">JCM Bible College</h1>
        <button className="w-max px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10 hover:bg-blue-900 transition-colors">
          <Link to="/donate"> Donate </Link>
        </button>
      </div>

      <div className="mx-10 text-center mt-15">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, cum?
        Molestiae, molestias in! Vel magni fugit expedita ea consequuntur
        debitis quidem eos omnis, quae, facilis libero aliquam vero ut placeat?
      </div>
      {/* collage */}

      <img
        className="rounded-lg w-[80%] mx-auto h-[300px] my-4"
        src="public/graduate.webp"
      ></img>

      <div className="flex flex-row w-[80%] mx-auto gap-4 mb-15">
        <img
          className="rounded-lg w-1/2 mx-auto"
          src="public/graduate.webp"
        ></img>
        <img
          className="rounded-lg w-1/2 mx-auto"
          src="public/graduate.webp"
        ></img>
      </div>

      {/* Text */}
      <div className="mt-5 text-center text-sm md:text-lg mx-8 lg:text-xl">
        As the next phase of its growth, JCM Theological College was started in
        2019. With excellent professors, this institution is operating in a
        great manner. In addition, special youth gatherings, special sister’s
        gatherings, Sunday schools, holiday Bible schools, village ministries,
        and medical camps are also being conducted.
      </div>

      <div className="mt-5 text-center text-sm md:text-lg mx-8 lg:text-xl">
        In May 2024, this institution was registered under the name “Religious
        and Charitable Trust.” This institution has been operating effectively
        for the past 31 years, and many have benefitted through it. God has
        raised many workers for this ministry.
      </div>

      {/* volunteer */}

      <Volunteer />
      <Location />

      {/* upcoming events */}
      <div className="block md:block lg:hidden">
        <UpcomingEvents />
      </div>
      <div className="hidden md:hidden lg:block">
        <LgUpComEvent />
      </div>

      <Footer />
    </div>
  );
};

export default WomensMinistry;
