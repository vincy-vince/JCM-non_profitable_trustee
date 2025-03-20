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
      <div className="xs: bg-[url(public/background-JCM.png)] xs: h-[400px] xs: p-10 xs: w-auto xs: bg-cover xs: bg-no-repeat xs: mt-20 xs: mx-4 ">
        <h1 className="xs: text-2xl xs: font-extrabold">Judea Christ Ministries</h1>
        <button className="xs: bg-red-600 xs: text-white xs: p-1 xs: border-none xs: rounded-md xs: text-sm xs: mt-5 xs: hidden">
          Register Now
        </button>
        <button className="xs: p-1 xs: bg-blue-950 xs: text-white xs: border-none xs: rounded-lg xs: text-lg">
        Donate
      </button>
      </div>
      <p className="xs: text-center xs: text-md xs: font-semibold xs: p-5">
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
      <div className="xs: mt-4 xs: flex xs: flex-col xs: justify-evenly xs: items-center xs: p-5 xs: mb-10 xs: gap-10">
        <img className="xs: w-auto xs: h-lg xs: mx-5" src="public/sec-2.png" alt="" />
        <div className="xs: w-auto xs: text-md xs: text-justify">
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
      <div className="xs: text-lg xs: font-semibold xs: text-justify xs: flex xs: flex-col xs: gap-5 xs: mx-5">
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
