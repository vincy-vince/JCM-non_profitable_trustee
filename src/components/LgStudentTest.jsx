import React from "react";
import Carousel2 from "./Carousel2";
const LgStudentTest = () => {
  let slides = [
    <div className="h-[60%] w-[70%] flex flex-col gap-10 align-center mx-auto bg-gray-200/40 py-4 border-none rounded-lg">
      <div className="flex flex-col gap-10">
        <div>
          <img
            className="w-[100px] h-[100px] mx-auto border-white border-2 rounded-full"
            src="public/bro-david.jpeg"
            alt="student"
          ></img>
        </div>
        <div className="text-center mx-5">
          <span className="text-6xl text-black/30">❝</span> Glory be to Lord! In
          2020, by God's grace, I studied at JCM Bible College, where the
          excellent classes greatly aided my spiritual growth and ministry. I am
          grateful to the teachers and wish for JCM's continued expansion.
          <div className="text-6xl text-black/30">❞</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center font-bold text-emerald-500">Bro. David</div>
        <div className="text-center">Dth</div>
      </div>
    </div>,
    <div className="h-[60%] w-[70%] flex flex-col gap-10 align-center mx-auto bg-gray-200/40 py-4 border-none rounded-lg">
      <div className="flex flex-col gap-10">
        <div>
          <img
            className="w-[100px] h-[100px] mx-auto border-white border-2 rounded-full"
            src="public/bro-albert.jpeg"
            alt="student"
          ></img>
        </div>
        <div className="text-center mx-5">
          <span className="text-6xl text-black/30">❝</span> Glory to Jesus! In
          2020, I completed a Diploma in Theology at JCM Bible College. The
          insightful classes, especially by Pastor Paul, deepened my biblical
          understanding and inspired me to study further. I am grateful to the
          teachers and administration.
          <div className="text-6xl h-[5%] text-black/30">❞</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center font-bold text-emerald-500">
          Bro. Albert
        </div>
        <div className="text-center">Dth</div>
      </div>
    </div>,
    <div className="h-[60%] w-[70%] flex flex-col gap-10 align-center mx-auto bg-gray-200/40 py-4 border-none rounded-lg">
      <div className="flex flex-col gap-10">
        <div>
          <img
            className="w-[100px] h-[100px] mx-auto border-white border-2 rounded-full"
            src="public/bro-irudhayaraj.jpeg"
            alt="student"
          ></img>
        </div>
        <div className="text-center mx-5">
          <span className="text-6xl text-black/30">❝</span> Glory to God! In
          2020, I completed my D.Th. at JCM Bible College, which enriched my
          spiritual growth, strengthened my faith, and equipped me for effective
          ministry. I am grateful for the valuable lessons I learned and the
          divine guidance I received. I sincerely wish for JCM's continued
          success.
          <div className="text-6xl text-black/30">❞</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center font-bold text-emerald-500">
          Bro. Irudhaya Raj
        </div>
        <div className="text-center">DTh</div>
      </div>
    </div>,
    <div className="h-[60%] w-[70%] flex flex-col gap-10 align-center mx-auto bg-gray-200/40 py-4 border-none rounded-lg">
      <div className="flex flex-col gap-10">
        <div>
          <img
            className="w-[100px] h-[100px] mx-auto border-white border-2 rounded-full"
            src="public/bro-johnson.jpeg"
            alt="student"
          ></img>
        </div>
        <div className="text-center mx-5">
          <span className="text-6xl text-black/30">❝</span> Glory to God! In
          2023, I joined the D.Th. program through Sis. Suma, where God deepened
          my faith and understanding of His Word. This led me to pursue B.Min.,
          through which He continues to transform my life, teaching me to live
          in Christ and walk in faith within my family and church.
          <div className="text-6xl text-black/30">❞</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center font-bold text-emerald-500">
        Bro M.Johnson Udhayakumar
        </div>
        <div className="text-center">DTh</div>
      </div>
    </div>,
  ];
  return (
    <div className="xl:mx-35">
      <p className="text-center text-xl md:text-2xl lg:text-2xl font-extrabold mt-20 mb-8">
        Student Testimonials
      </p>

      <Carousel2 slides={slides} />
      {/* <div className="flex flex-row gap-4 mx-4 lg:mx-10"></div> */}
    </div>
  );
};

export default LgStudentTest;
