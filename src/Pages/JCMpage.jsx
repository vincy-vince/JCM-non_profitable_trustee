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
const JCMpage = () => {
  return (
    <div>
      <MenuBar />
      <div className=" bg-[url(public/background-JCM.png)]  h-[400px]  p-10  w-auto  bg-cover  bg-no-repeat  mt-20  mx-4 ">
        <h1 className=" text-2xl  font-extrabold">Judea Christ Ministries</h1>
        <button className=" bg-red-600  text-white  p-1  border-none  rounded-md  text-sm  mt-5  hidden">
          Register Now
        </button>
        <button className=" p-1  bg-blue-950  text-white  border-none  rounded-lg  text-lg">
          Donate
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
      <div className=" mt-4  flex  flex-col  justify-evenly  items-center  p-5  mb-10  gap-10">
        <img
          className="w-auto md: w-[20%] h-lg mx-5 "
          src="public/sec-2.png"
          alt=""
        />
        <div className=" w-auto  text-md  text-justify">
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
      <div className=" text-lg  font-semibold  text-justify  flex  flex-col  gap-5  mx-5">
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
      <DonateSess />
      {/* quote */}
      <Quote />
      {/* Trustee Info */}
      <Trustee />
      {/* volunteer */}
      |<Volunteer />
      {/* location */}
      <Location />
      {/* upcoming events */}
      <UpcomingEvents />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default JCMpage;
