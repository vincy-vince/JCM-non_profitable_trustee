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
      <div id="bible-coll" className=" bg-[url(public/background-JCM.png)]  h-[400px]  p-10  w-auto  bg-cover  bg-no-repeat  mt-24  mx-4 ">
        <h1 className=" text-2xl  font-extrabold">JCM Bible College</h1>
        <button className="w-max px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10 hover:bg-blue-900 transition-colors lg:hidden">
          <HashLink to={"/#home"}>Donate</HashLink>
        </button>
        <button className="w-max px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10 hover:bg-blue-900 transition-colors hidden md:hidden lg:block">
          <HashLink to={"/#lghome"}>Donate</HashLink>
        </button>
      </div>
      <div className="text-center mt-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima itaque
        voluptatibus in, aliquid vel laborum laudantium libero nam! Odit labore
        nemo sint porro totam modi eaque itaque repudiandae unde.
      </div>
      {/* collage */}

      <div className="flex flex-row w-[80%] mx-auto gap-4 justify-between mt-15">
        <img
          className="rounded-lg w-1/2 mx-auto"
          src="public/graduate.webp"
        ></img>
        <img
          className="rounded-lg w-1/2 mx-auto"
          src="public/graduate.webp"
        ></img>
      </div>

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

      <div className="flex flex-col gap-6">
        <p className="text-xl md:2xl lg:3xl text-center mt-15 font-extrabold ">
          Batch 2019 Graduation
        </p>
        <img className="w-[80%] mx-auto " src="public/graduate.webp" alt="" />

        <p className="text-center mx-10 lg:mx-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          obcaecati suscipit minima Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Similique obcaecati suscipit minima
        </p>
      </div>

      <div className="flex flex-col gap-6 mb-8">
        <p className="text-xl md:2xl lg:3xl text-center mt-15 font-extrabold">
          Batch 2023 Graduation
        </p>
        <img className="w-[80%] mx-auto " src="public/graduate.webp" alt="" />

        <p className="text-center mx-10 lg:mx-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          obcaecati suscipit minima Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Similique obcaecati suscipit minima
        </p>
      </div>

      {/* Mode of teaching */}

      <div className="flex flex-col gap-4 mx-10 md:flex-row lg:flex-row">
        <div className="flex flex-col bg-green-800 h-[200px] w-[80%] mx-auto mt-10 rounded-lg justify-around text-white md:w-1/2">
          <p className="text-center">Online Mode</p>
          <div className="flex flex-col gap-3 md:text-center lg:text-center">
            <div className="ml-5">08:00 AM - 10:00 AM Monday</div>
            <div className="ml-5">08:00 AM - 10:00 AM Wednesday</div>
            <div className="ml-5">08:00 AM - 10:00 AM Friday</div>
          </div>
        </div>

        <div className="flex flex-col bg-cyan-800 h-[200px] w-[80%] mx-auto mt-10 rounded-lg justify-around text-white md:w-1/2">
          <p className="text-center">Offline Mode</p>
          <div className="flex flex-col gap-3 md:text-center lg:text-center">
            <div className="ml-5">08:00 AM - 10:00 AM Monday</div>
            <div className="ml-5">08:00 AM - 10:00 AM Wednesday</div>
            <div className="ml-5">08:00 AM - 10:00 AM Friday</div>
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
