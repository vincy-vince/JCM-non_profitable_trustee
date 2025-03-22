import React from "react";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";
import Location from "../components/Location";
import Youtube from "../components/Youtube";
import OurMinistries from "../components/OurMinistries";
import DonateSess from "../components/DonateSess";
import Quote from "../components/Quote";
import Trustee from "../components/Trustee";
import Volunteer from "../components/Volunteer";
import UpcomingEvents from "../components/UpcomingEvents";
import { Link } from "react-router-dom";
import LgDonate from "../components/LgDonate";
import LgTrustee from "../components/LgTrustee";
import LgUpComEvent from "../components/LgUpComEvent";
const JCMpage = () => {
  return (
    <div>
      <MenuBar />
      <div className=" bg-[url(public/background-JCM.png)]  h-[400px]  p-10  w-auto  bg-cover  bg-no-repeat  mt-24  mx-4 lg:h-[600px]">
        <h1 className=" text-2xl  font-extrabold">Judea Christ Ministries</h1>
        <button className=" bg-red-600  text-white  p-1  border-none  rounded-md  text-sm  mt-5  hidden">
          Register Now
        </button>
        <button className="w-max px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10 hover:bg-blue-900 transition-colors">
          <Link to="/donate"> Donate </Link>
        </button>
      </div>
      <p className=" text-center  text-md  font-semibold  p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni
        nulla harum nesciunt a nihil laborum eum ipsam quasi fugiat. Voluptatum,
        nam. Ratione, ullam quam animi dolorum modi est accusamus! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Unde magni nulla harum
        nesciunt a nihil laborum eum ipsam quasi fugiat. Voluptatum, nam.
        Ratione, ullam quam animi dolorum modi est accusamus! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Unde magni nulla harum nesciunt a
        nihil laborum eum ipsam quasi fugiat. Voluptatum, nam. Ratione, ullam
        quam animi dolorum modi est accusamus!
      </p>
      {/* About and Founder's Image */}
      <div className=" mt-4  flex  flex-col  justify-evenly  items-center  p-5  mb-10  gap-10 relative z-[-1]">
        <div className="flex flex-col gap-4 md:gap-10 relative ">
          <svg
            className="mr-14 md:mr-28 lg:mr-80"
            width="247"
            height="192"
            viewBox="0 0 247 192"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="243"
              height="188"
              rx="6"
              stroke="#010E54"
              strokeWidth="4"
            />
          </svg>

          <svg
            className="ml-47 h-[65px] w-[95px] md:ml-64 md:mt-5 lg:ml-90 lg:mt-5"
            width="87"
            height="70"
            viewBox="0 0 87 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="83"
              height="66"
              rx="6"
              stroke="#010E54"
              strokeWidth="4"
            />
          </svg>
        </div>
        <img
          className="absolute w-[66%] h-[29%] top-8 left-8 md:top-10 md:left-52 md:right-2 md:w-400px rounded-lg md:w-[40%] md:h-[45%]  mx-5 lg:left-57"
          src="public/sec-2.png"
          alt=""
        />
        <div className=" w-auto text-md text-justify mx-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
          perferendis quasi eius, distinctio totam vitae fugit suscipit
          accusantium. Illum esse voluptas rem excepturi enim ducimus voluptates
          voluptate voluptatum, quasi cumque eos, quo recusandae temporibus
          tenetur adipisci culpa doloremque ipsam aut odit distinctio. Maxime,
          nemo ea! Temporibus non ipsa provident nobis.
          <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
          quasi illum fuga delectus, dignissimos vitae rerum, assumenda in ipsa
          quibusdam iste asperiores ex fugiat suscipit eaque, provident nobis
          cumque quia eum dolore magnam laboriosam perferendis. Voluptas dolores
          voluptatum odio dolorum consectetur, rem voluptates iste saepe magni
          est corrupti alias qui at nulla, mollitia quisquam totam aliquid ab
          ipsam, quos dolorem?
        </div>
      </div>
      <div className=" text-lg  font-semibold  text-justify  flex  flex-col  gap-5  mx-10">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
          fugiat possimus fuga delectus ut tempora, minus nobis dolorem est
          cumque repudiandae, numquam iure veritatis provident officiis
          assumenda tempore quae eaque? Molestias nisi asperiores dicta magnam
          reiciendis eaque? Sed, minus suscipit? Consectetur officiis ut
          obcaecati nesciunt totam cupiditate dicta perspiciatis amet?
        </p>{" "}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
          fugiat possimus fuga delectus ut tempora, minus nobis dolorem est
          cumque repudiandae, numquam iure veritatis provident officiis
          assumenda tempore quae eaque? Molestias nisi asperiores dicta magnam
          reiciendis eaque? Sed, minus suscipit? Consectetur officiis ut
          obcaecati nesciunt totam cupiditate dicta perspiciatis amet?
        </p>
      </div>
      {/* youtube-session */}
      <Youtube />
      {/* Our Ministries */}
      <OurMinistries />
      {/* Donate now session */}
      <div className="block md:block lg:hidden">
        <DonateSess />
      </div>
      <div className="hidden md:hidden lg:block">
        <LgDonate />
      </div>
      {/* quote */}
      <Quote />
      {/* Trustee Info */}
      <div className="block md:block lg:hidden">
        <Trustee />
      </div>
      <div className="hidden md:hidden lg:block">
        <LgTrustee />
      </div>
      {/* volunteer */}
      <Volunteer />
      {/* location */}
      <Location />
      {/* upcoming events */}
      <div className="block md:block lg:hidden">
        <UpcomingEvents />
      </div>
      <div className="hidden md:hidden lg:block">
        <LgUpComEvent />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default JCMpage;
