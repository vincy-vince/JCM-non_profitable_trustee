import React from "react";
import Corousal from "./Corousal";
const StudentTestimonial = () => {
  let slides = [
    <div className="h-[40%] w-[90%] md:w-[60%] flex flex-col gap-10 align-center mx-auto bg-gray-200/40 py-4 border-none rounded-lg">
      <div className="flex flex-col gap-10">
        <div>
          <img
            className="w-[100px] h-[100px] mx-auto border-white border-2 rounded-full"
            src="StdedumyProf.jpg"
            alt="student"
          ></img>
        </div>
        <div className="text-center mx-5">
          <span className="text-6xl text-black/30">❝</span> Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Aliquid et blanditiis officia
          quo culpa, vitae molestias excepturi fugit facilis itaque quibusdam
          nisi! A eius nihil nobis soluta asperiores dolorem doloribus.
          <div className="text-6xl text-black/30">❞</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center font-bold text-emerald-500">
          Student Name
        </div>
        <div className="text-center">Degree</div>
      </div>
    </div>,
    <div className="h-[40%] w-[90%] md:w-[60%] flex flex-col gap-10 align-center mx-auto bg-gray-200/40 py-4 border-none rounded-lg">
      <div className="flex flex-col gap-10">
        <div>
          <img
            className="w-[100px] h-[100px] mx-auto border-white border-2 rounded-full"
            src="stGirlpf.jpeg"
            alt="student"
          ></img>
        </div>
        <div className="text-center mx-5">
          <span className="text-6xl text-black/30">❝</span> Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Aliquid et blanditiis officia
          quo culpa, vitae molestias excepturi fugit facilis itaque quibusdam
          nisi! A eius nihil nobis soluta asperiores dolorem doloribus.
          <div className="text-6xl h-[5%] text-black/30">❞</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center font-bold text-emerald-500">
          Student Name
        </div>
        <div className="text-center">Degree</div>
      </div>
    </div>,
    <div className="h-[40%] w-[90%] md:w-[60%] flex flex-col gap-10 align-center mx-auto bg-gray-200/40 py-4 border-none rounded-lg">
      <div className="flex flex-col gap-10">
        <div>
          <img
            className="w-[100px] h-[100px] mx-auto border-white border-2 rounded-full"
            src="StdedumyProf.jpg"
            alt="student"
          ></img>
        </div>
        <div className="text-center mx-5">
          <span className="text-6xl text-black/30">❝</span> Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Aliquid et blanditiis officia
          quo culpa, vitae molestias excepturi fugit facilis itaque quibusdam
          nisi! A eius nihil nobis soluta asperiores dolorem doloribus.
          <div className="text-6xl text-black/30">❞</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center font-bold text-emerald-500">
          Student Name
        </div>
        <div className="text-center">Degree</div>
      </div>
    </div>,
    <div className="h-[40%] w-[90%] md:w-[60%] flex flex-col gap-10 align-center mx-auto bg-gray-200/40 py-4 border-none rounded-lg">
      <div className="flex flex-col gap-10">
        <div>
          <img
            className="w-[100px] h-[100px] mx-auto border-white border-2 rounded-full"
            src="stGirlpf.jpeg"
            alt="student"
          ></img>
        </div>
        <div className="text-center mx-5">
          <span className="text-6xl text-black/30">❝</span> Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Aliquid et blanditiis officia
          quo culpa, vitae molestias excepturi fugit facilis itaque quibusdam
          nisi! A eius nihil nobis soluta asperiores dolorem doloribus.
          <div className="text-6xl h-[5%] text-black/30">❞</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center font-bold text-emerald-500">
          Student Name
        </div>
        <div className="text-center">Degree</div>
      </div>
    </div>,
    <div className="h-[40%] w-[90%] md:w-[60%] flex flex-col gap-10 align-center mx-auto bg-gray-200/40 py-4 border-none rounded-lg">
      <div className="flex flex-col gap-10">
        <div>
          <img
            className="w-[100px] h-[100px] mx-auto border-white border-2 rounded-full"
            src="StdedumyProf.jpg"
            alt="student"
          ></img>
        </div>
        <div className="text-center mx-5">
          <span className="text-6xl text-black/30">❝</span> Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Aliquid et blanditiis officia
          quo culpa, vitae molestias excepturi fugit facilis itaque quibusdam
          nisi! A eius nihil nobis soluta asperiores dolorem doloribus.
          <div className="text-6xl h-[5%] text-black/30">❞</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center font-bold text-emerald-500">
          Student Name
        </div>
        <div className="text-center">Degree</div>
      </div>
    </div>,
    <div className="h-[40%] w-[90%] md:w-[60%] flex flex-col gap-10 align-center mx-auto bg-gray-200/40 py-4 border-none rounded-lg">
      <div className="flex flex-col gap-10">
        <div>
          <img
            className="w-[100px] h-[100px] mx-auto border-white border-2 rounded-full"
            src="stGirlpf.jpeg"
            alt="student"
          ></img>
        </div>
        <div className="text-center mx-5">
          <span className="text-6xl text-black/30">❝</span> Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Aliquid et blanditiis officia
          quo culpa, vitae molestias excepturi fugit facilis itaque quibusdam
          nisi! A eius nihil nobis soluta asperiores dolorem doloribus.
          <div className="text-6xl h-[5%] text-black/30">❞</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center font-bold text-emerald-500">
          Student Name
        </div>
        <div className="text-center">Degree</div>
      </div>
    </div>,
  ];
  return (
    <div>
      <p className="text-center text-xl md:text-2xl lg:text-2xl font-extrabold mt-20 mb-8">
        Student Testimonials
      </p>

      <Corousal slides={slides} />
      <div className="flex flex-row gap-4 mx-4 lg:mx-10"></div>
    </div>
  );
};

export default StudentTestimonial;
