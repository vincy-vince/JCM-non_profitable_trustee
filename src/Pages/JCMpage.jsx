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
    <div id="home">
      <MenuBar />
      <div className=" bg-[url(jcm-BG.png)]  h-[400px]  p-10  w-auto  bg-cover  bg-no-repeat  mt-24  mx-4 lg:h-[600px] xl:h-[630px]">
        <h1 className=" text-2xl text-white lg:text-6xl lg:font-semibold font-extrabold">
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
      <div className=" mt-7 h-max flex flex-col justify-evenly items-center p-5 mb-10 gap-10 md:flex-row lg:flex-row  relative z-[-1] xl:mx-30 xl:my-20">
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
          src="stGirlpf.jpeg"
          alt=""
        />
        <div className=" w-2/3 h-max md:w-1/2 text-md text-justify md:mx-5 lg:mx-10 xl:mx-30 xl:text-xl">
          <span className="font-bold">Judea Christ Ministries</span> warmly
          welcomes and greets you.
          <br></br>
          <p className="my-5">
            This organization is actively committed to bringing Christ to people
            through good deeds, based on the teachings of our Lord Jesus Christ.
            It remains steadfast in understanding and proclaiming the essence of
            the Scriptures without deviation, participating in the building of
            God’s kingdom.
          </p>
          <br /> This ministry, founded in January 2010, was established by Bro.
          K M Thomas Babu and his wife Suma Thomas, through the vision and
          revelation God granted them. The organization has been operating
          effectively through the prayers and cooperation of many. Fulfilling
          Christ’s great commission is its primary mission. Pray for the
          fulfillment of this vision. May the Lord Himself bless us all!
        </div>
      </div>
      <div className=" text-lg text-justify flex flex-col gap-5 mx-10 xl:mx-70 xl:text-xl xl:text-center">
        <p className="mb-10 text-justify">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Proclaiming the Gospel, making
          disciples of Christ, and guiding the younger generation on the right
          path. Helping the poor and needy by implementing programs to uplift
          the economically disadvantaged and conducting special training
          sessions for them. Raising up ministers, leading the youth towards the
          Lord, and addressing the needs of the community. Finally, teaching the
          Scriptures to strengthen spiritual growth.
        </p>
        <p className="mb-10 text-justify">
          &nbsp; &nbsp; &nbsp; &nbsp;As God said to go and proclaim His Word, we
          are committed to spreading the Gospel through village ministries and
          establishing churches to fulfill His plan. We provide special training
          for those aspiring to start self-employment, conduct vacation Bible
          schools, and organize medical camps. We also promote good values and
          strive to improve the quality of life through community awareness
          programs. Finally, we effectively teach the Scriptures through the
          Bible school.
        </p>
        <p className="mb-10 text-justify">
          &nbsp; &nbsp; &nbsp; &nbsp; On May 30, 2024, this institution was
          registered under the name “Public Christian Religious cum Charitable
          Trust.” It has been operating effectively for the past 31 years,
          benefiting many. God has raised numerous workers through this
          ministry.
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
      <div className="hidden md:block lg:block">
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
