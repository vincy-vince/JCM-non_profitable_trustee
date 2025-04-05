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
        className=" bg-[url(CBSpic.png)]  h-[400px]  p-10  w-auto  bg-cover  bg-no-repeat  mt-24  mx-4 md:h-[500px] lg:h-[600px] xl:h-[630px]"
      >
        <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-extrabold">
          Children Bible School
        </h1>
        <button className="w-max px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10 hover:bg-blue-900 transition-colors lg:hidden">
          <HashLink to={"/#home"}>Donate</HashLink>
        </button>
        <button className="w-max px-3 py-2 bg-blue-900 text-white border-none rounded-lg text-lg mt-10 hover:bg-blue-800 transition-colors font-bold hidden  md:hidden lg:block xl:py-3 xl:px-4 lg:text-lg xl:text-xl">
          <HashLink to={"/#lghome"}>Donate</HashLink>
        </button>
      </div>

      <div className="mx-10 text-Justify mt-15 xl:mx-45 lg:text-lg xl:text-xl">
        Dear beloved in Christ! When Jesus Christ came to the land of Judea, He
        instructed His disciples to bring the children to Him, so that He could
        touch them. Based on this, I began children’s ministry in 1994. Over
        time, God expanded this ministry, helping to establish Sunday schools
        for children in many places. Through this, many children have been led
        to the Lord.
        <br></br>
      </div>
      {/* collage */}

      <div className="xl:mx-40">
        <div className="flex flex-row w-[80%] mx-auto gap-4 justify-between mt-15">
          <img className="rounded-lg w-1/2 mx-auto" src="graduate.webp"></img>
          <img className="rounded-lg w-1/2 mx-auto" src="graduate.webp"></img>
        </div>

        <img
          className="rounded-lg w-[80%] mx-auto h-[300px] my-4 xl:h-[500px]"
          src="graduate.webp"
        ></img>

        <div className="flex flex-row w-[80%] mx-auto gap-4 mb-15">
          <img className="rounded-lg w-1/2 mx-auto" src="graduate.webp"></img>
          <img className="rounded-lg w-1/2 mx-auto" src="graduate.webp"></img>
        </div>
      </div>
      <div className="mx-10 text-justify mt-15 lg:text-lg xl:text-xl xl:mx-45">
        As the Scripture says, "Train up a child in the way he should go", we
        are committed to guiding today's generation in God's way.
        <br></br>
      </div>
      <div className="mx-10 text-justify mt-15 lg:text-lg xl:text-xl xl:mx-45">
        We provide well-structured curricula in our children’s Bible schools,
        teaching in simple ways that suit the children's language skills.
        Through songs and dances, we make sure they understand and learn with
        enthusiasm. Competitions and year-end exams are conducted, and prizes
        are given to encourage the children. Through this curriculum, we help
        nurture good character in our younger generation, guiding them to build
        a Godly life.
        <br></br>
        We are committed to praying for and striving to protect the generation
        that is heading towards destruction.
      </div>
      <Quote />

      <div className="flex flex-col gap-6">
        <p className="text-xl md:text-2xl lg:text-3xl mt-5 text-center lg:mt-15 xl:mt-15 font-extrabold ">
          CBS students in kizma Nagar 2016
        </p>
        <img
          className="w-[80%] mx-auto xl:h-[550px] xl:w-[1100px]"
          src="graduate.webp"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-6 mb-8">
        <p className="text-xl md:text-2xl lg:text-3xl text-center mt-15 font-extrabold ">
          CBS students in Thiruvallur 2016
        </p>
        <img
          className="w-[80%] mx-auto xl:h-[550px] xl:w-[1100px]"
          src="graduate.webp"
          alt=""
        />
      </div>
      <div className="mx-10 text-justify mt-15 lg:text-lg xl:text-xl xl:mx-45">
        <div className="text-xl mb-10 md:text-2xl lg:text-3xl text-center mt-15 font-extrabold ">
          Youth Gatherings
        </div>
        <p>
          As the scripture says, "The young man cleanses his way," it is our
          duty to protect today’s youth community, which is heading towards
          destruction.
          <br></br> Keeping this in mind, we, with the help of blessed servants
          of God, conduct youth gatherings for them. Through these gatherings,
          many young people have come and experienced deliverance. They listen
          to the Word of God, and their hearts are turned towards Him, leading
          them to make wise decisions for their lives. We ask that they rise up
          as an army for God and pray for them. May the Lord Himself bless them!
          Amen.
        </p>
      </div>
      <div className="text-center my-10 text-xl">( collage picture )</div>
      <Location />
      <Footer />
    </div>
  );
};

export default CBS;
