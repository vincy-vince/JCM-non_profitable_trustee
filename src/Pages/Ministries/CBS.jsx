import React, { useState } from "react";
import MenuBar from "../../components/MenuBar";
import Quote from "../../components/Quote";
import Footer from "../../components/Footer";
import Location from "../../components/Location";
import { HashLink } from "react-router-hash-link";

const CBS = () => {
  return (
    <div>
      <MenuBar />

      <div
        id="cbs"
        className=" bg-[url(public/background-JCM.png)]  h-[400px]  p-10  w-auto  bg-cover  bg-no-repeat  mt-24  mx-4 md:h-[500px] lg:h-[600px]"
      >
        <h1 className=" text-2xl md:text-3xl lg:text-5xl font-extrabold">
          Children Bible Studies
        </h1>
        <button className="w-max px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10 hover:bg-blue-900 transition-colors lg:hidden">
          <HashLink to={"/#home"}>Donate</HashLink>
        </button>
        <button className="w-max px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10 hover:bg-blue-900 transition-colors hidden md:hidden lg:block">
          <HashLink to={"/#lghome"}>Donate</HashLink>
        </button>
      </div>

      <div className="mx-10 text-center mt-15">
        Dear beloved in Christ! When Jesus Christ came to the land of Judea, He
        instructed His disciples to bring the children to Him, so that He could
        touch them. Based on this, I began children’s ministry in 1994. Over
        time, God expanded this ministry, helping to establish Sunday schools
        for children in many places. Through this, many children have been led
        to the Lord.
        <br></br>
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
      <div className="mx-10 text-center mt-15">
        With the thought that we have the responsibility to guide today’s
        generation in the way they should go, as the scripture says, "Train up a
        child in the way he should go," we have been working in children’s
        ministry since 1994.
        <br></br>
      </div>
      <div className="mx-10 text-center mt-15">
        We provide well-structured curricula in our children’s Bible schools,
        teaching in simple ways that suit the children's language skills.
        Through songs and dances, we make sure they understand and learn with
        enthusiasm. Competitions and year-end exams are conducted, and prizes
        are given to encourage the children. Through this curriculum, we help
        nurture good character in our younger generation, guiding them to build
        a godly life.
        <br></br>
        We are committed to praying for and striving to protect the generation
        that is heading towards destruction. May the Lord Himself bless us in
        this mission! Amen.
      </div>
      <Quote />
      <div className="flex flex-col gap-6">
        <p className="text-xl md:2xl lg:3xl text-center mt-15 font-extrabold ">
          CBS students in kizma Nagar 2016
        </p>
        <img className="w-[80%] mx-auto " src="public/graduate.webp" alt="" />
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-xl md:2xl lg:3xl text-center mt-15 font-extrabold">
          CBS students in Thiruvallur 2016
        </p>
        <img className="w-[80%] mx-auto " src="public/graduate.webp" alt="" />
      </div>
      <Location />
      <Footer />
    </div>
  );
};

export default CBS;
