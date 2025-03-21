import React from "react";
import MenuBar from "../../components/MenuBar";
import Location from "../../components/Location";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
const BibleCollege = () => {
  return (
    <div>
      <MenuBar />
      <div className=" bg-[url(public/background-JCM.png)]  h-[400px]  p-10  w-auto  bg-cover  bg-no-repeat  mt-24  mx-4 ">
        <h1 className=" text-2xl  font-extrabold">JCM Bible College</h1>
        <button className="w-max px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10 hover:bg-blue-900 transition-colors">
          <Link to="/donate"> Donate </Link>
        </button>
      </div>
      <div className="text-center mt-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima itaque
        voluptatibus in, aliquid vel laborum laudantium libero nam! Odit labore
        nemo sint porro totam modi eaque itaque repudiandae unde.
      </div>
      {/* collage */}

      <div>
        <div>
          <img></img>
          <img></img>
        </div>
        <img></img>
        <div>
          <img></img>
          <img></img>
        </div>
      </div>

      <Location />
      <Footer />
    </div>
  );
};

export default BibleCollege;
