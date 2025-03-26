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
import LgDonate from "../components/LgDonate";
import LgTrustee from "../components/LgTrustee";
import LgUpComEvent from "../components/LgUpComEvent";
import { HashLink } from "react-router-hash-link";
const JCMpage = () => {
  return (
    <div>
      <MenuBar />
      <div className=" bg-[url(public/background-JCM.png)]  h-[400px]  p-10  w-auto  bg-cover  bg-no-repeat  mt-24  mx-4 lg:h-[600px]">
        <h1 className=" text-2xl lg:text-6xl lg:font-semibold font-extrabold">
          Judea Christ Ministries
        </h1>
        <button className=" bg-red-600  text-white  p-1  border-none  rounded-md  text-sm  mt-5  hidden">
          Register Now
        </button>
        <button className="w-max px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10 hover:bg-blue-900 transition-colors lg:hidden">
          <HashLink to={"#home"}>Donate</HashLink>
        </button>
        <button className="w-max px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10 hover:bg-blue-900 transition-colors hidden md:hidden lg:block">
          <HashLink to={"#lghome"}>Donate</HashLink>
        </button>
      </div>

      {/* About and Founder's Image */}
      <div className=" mt-7  flex  flex-col  justify-evenly  items-center  p-5  mb-10  gap-10 md:flex-row lg:flex-row  relative z-[-1]">
        <div className="flex flex-col gap-4 md:gap-5 relative ">
          {/* <svg
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
          </svg> */}
        </div>
        <img
          className=" w-1/2 h-[50%] top-8 rounded-lg md:w-[40%] md:h-[50%] lg:w-[30%] mx-5"
          src="public/stGirlpf.jpeg"
          alt=""
        />
        <div className=" w-1/2 text-md text-justify md:mx-5 lg:mx-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
          perferendis quasi eius, distinctio totam vitae fugit suscipit
          accusantium.
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
          JCM Bible College is committed to proclaiming the Gospel, making
          disciples of Christ, and guiding the younger generation in the right
          path. The college strives to help the poor and underprivileged by
          implementing programs aimed at their economic upliftment and
          conducting special training sessions for them. It is dedicated to
          raising up devoted ministers, leading young people towards God,
          addressing the needs of the community, and teaching the Word of God
          effectively.
        </p>{" "}
        <p>
          JCM Bible College is dedicated to proclaiming the Gospel through
          village ministries and fulfilling God’s plan by planting churches. The
          college offers specialized training for individuals seeking to start
          their own businesses and conducts vacation Bible schools. It also
          organizes medical camps and promotes community awareness programs to
          cultivate good values and enhance the quality of life. Through its
          Bible school, JCM effectively teaches the Word of God with excellence.
        </p>
      </div>
      {/* youtube-session */}
      <Youtube />
      {/* Our Ministries */}
      <OurMinistries />
      {/* Donate now session */}
      <div id="home" className="block md:block lg:hidden">
        <DonateSess />
      </div>
      <div id="lghome" className="hidden md:hidden lg:block xl:block">
        <LgDonate />
      </div>
      {/* quote */}
      <Quote />
      {/* Trustee Info */}
      <div className="block md:hidden lg:hidden">
        <Trustee />
      </div>
      {/* <div>
        <TrusteeMd className="hidden md:block lg:hidden"/>
      </div> */}
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
