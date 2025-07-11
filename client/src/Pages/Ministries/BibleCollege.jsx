import React, { useState } from "react";
import MenuBar from "../../components/MenuBar";
import Location from "../../components/Location";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import OurFaculties from "../../components/OurFcaulties";
import Volunteer from "../../components/Volunteer";
import Courses from "../../components/Courses";
import LgCourses from "../../components/LgCourses";
import LgFaculty from "../../components/LgFaculty";
import StudentTestimonial from "../../components/StudentTestimonial";
import LgStudentTest from "../../components/LgStudentTest";
import { HashLink } from "react-router-hash-link";
const BibleCollege = () => {
  return (
    <div>
      <MenuBar />
      <div
        id="bible-coll"
        className=" bg-[url(bibleColl-pic.png)] h-[400px] p-10 w-auto bg-cover  bg-no-repeat  mt-24  mx-4 xl:h-[630px]"
      >
        <h1 className=" text-2xl text-white font-extrabold md:text-3xl lg:text-5xl ">
          JCM Bible College
        </h1>
        {/* <button className="w-max font-bold px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10 lg:text-xl xl:text-2xl xl:px-4 xl:py-3 hover:bg-blue-900 transition-colors lg:hidden">
          <HashLink to={"/#home"}>Donate</HashLink>
        </button>
        <button className="w-max font-bold px-3 py-2 bg-blue-950 shadow-md shadow-blue-900 text-white border-none rounded-lg text-lg mt-10 lg:text-xl xl:text-2xl xl:px-4 xl:py-3 hover:bg-blue-900 transition-colors hidden md:hidden lg:block">
          <HashLink to={"/#lghome"}>Donate</HashLink>
        </button> */}
      </div>
      <div className="text-justify mt-13 mx-5 md:mx-10 md:text-lg lg:text-xl xl:mx-50">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;The Lord redirected our
        focus, which was solely on the children's Bible school, and inspired us
        to start a Bible college. Following the Lord's prompting, we established
        JCM Bible College in January 2020.
        <br></br>
        <div className="mt-5">
          {" "}
          &nbsp; &nbsp; &nbsp; &nbsp; The college, which initially began with
          three teachers and 11 students, has now seen three batches
          successfully graduate. Many who studied in this college are now being
          powerfully used by the Lord. In collaboration with Build
          International, we continue to offer Bible courses. The curriculum is
          designed to be simple and easy to understand, and we are effectively
          implementing it. The classes are conducted in an engaging manner
          through discussions, making them very interesting.
        </div>
        <br></br>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The college currently
        operates with five professors, offering flexible schedules for those who
        wish to study while working. Both in-person and online classes are
        available. The courses are taught in Tamil, Malayalam, and English. We
        are working with the vision of raising an army for the Lord. We humbly
        seek your prayers for this mission. May the Lord Himself bless everyone.
        Amen.
      </div>
      {/* collage */}

      <div className="xl:mx-40">
        <div className="flex flex-row w-[80%] mx-auto gap-4 justify-between mt-15">
          <img className="rounded-lg w-1/2 mx-auto" src="graduate.webp"></img>
          <img className="rounded-lg w-1/2 mx-auto" src="graduate.webp"></img>
        </div>
      </div>
      <div>
        <img
          className="rounded-lg w-[80%] mx-auto h-[300px] my-4 xl:h-[500px]"
          src="college-collage1.jpeg"
        ></img>
      </div>
      <div className="xl:mx-40">
        <div className="flex flex-row w-[80%] mx-auto gap-4 mb-15">
          <img className="rounded-lg w-1/2 mx-auto" src="graduate.webp"></img>
          <img className="rounded-lg w-1/2 mx-auto" src="graduate.webp"></img>
        </div>
      </div>

      <div className="mt-5 text-justify text-md md:text-lg mx-8 lg:text-xl xl:mx-50">
        JCM Bible College emphasizes simple and clear learning exercises,
        encourages interactive classroom discussions, and fosters spiritual
        growth. The college focuses on understanding the mysteries of God's
        Word, recognizing the importance of the anointing, and cultivating
        strong leadership skills. With a commitment to raising excellent
        leaders, it adopts modern biblical teaching methods to effectively equip
        students for ministry.
      </div>

      <div className="mt-5 text-justify text-md md:text-lg mx-8 lg:text-xl xl:mx-50">
        JCM Bible College is dedicated to proclaiming the Gospel through village
        ministries and fulfilling God’s plan by planting churches. The college
        offers specialized training for individuals seeking to start their own
        businesses and conducts vacation Bible schools. It also organizes
        medical camps and promotes community awareness programs to cultivate
        good values and enhance the quality of life. Through its Bible school,
        JCM effectively teaches the Word of God with excellence.
      </div>
      <div className="block md:block lg:hidden">
        <OurFaculties />
      </div>
      <div className="hidden md:hidden lg:block">
        <LgFaculty />
      </div>

      {/* student testimonials */}

      <div className="block md:block lg:hidden">
        <StudentTestimonial />
      </div>
      <div className="hidden md:hidden lg:block">
        <LgStudentTest />
      </div>

      {/* graduation */}

      <div className="flex flex-col gap-6 mt-8 mb-8">
        <p className="text-xl md:text-2xl lg:text-3xl text-center mt-15 font-extrabold ">
          Batch 2023 Graduation
        </p>
        <img
          className="w-[80%] mx-auto xl:h-[550px] xl:w-[1100px]"
          src="2023-graduates.jpeg"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-6 mb-8">
        <p className="text-xl md:text-2xl lg:text-3xl text-center mt-15 font-extrabold ">
          Batch 2019 Graduation
        </p>
        <img
          className="w-[80%] mx-auto xl:h-[550px] xl:w-[1100px]"
          src="graduation-2019.jpg"
          alt=""
        />
      </div>
      {/* Mode of teaching */}

      <div className="flex flex-col gap-4 mx-10 md:flex-row lg:flex-row xl:w-[62%] xl:mx-auto">
        <div className="flex flex-col bg-green-800 h-[200px] w-[80%] mx-auto mt-10 rounded-lg justify-around text-white md:w-1/2 lg:justify-evenly lg:h-[300px]  xl:h-[250px] xl:mx-3">
          <p className="text-center text-lg font-bold md:text-xl lg:text-2xl">
            Online Mode
          </p>
          <div className="flex flex-col gap-3 md:text-center lg:text-center lg:text-lg xl:text-xl">
            <div className="ml-5">
              Every Friday 07:00 PM - 08:30 PM <br></br> &{" "}
            </div>
            <div className="ml-5">
              Every Tuesday and Thursday<br></br> 07:30 PM - 08:30 PM{" "}
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-cyan-800 h-[200px] w-[80%] mx-auto mt-10 rounded-lg justify-around text-white md:w-1/2 lg:justify-evenly lg:h-[300px]  xl:h-[250px] xl:mx-3">
          <p className="text-center text-lg font-bold md:text-xl lg:text-2xl">
            Offline Mode
          </p>
          <div className=" gap-3 md:text-center lg:text-center lg:text-lg xl:text-xl">
            <div className="ml-5">
              Every Monday, Wednesday and Thursday<br></br> morning 10:00 AM -
              12:00 PM <br></br> & <br></br>evening 06:00 PM - 08:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* volunteer */}

      <Volunteer />

      <Location />

      <div className="block md:block lg:hidden">
        <Courses />
      </div>
      <div className="hidden md:hidden lg:block">
        <LgCourses />
      </div>
      <Footer />
    </div>
  );
};

export default BibleCollege;
