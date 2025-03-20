import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
const Corousal = ({ slides }) => {
  return (
    <div className="overflow-hidden relative">
      <div className="flex">
        {slides.map((s) => {
          return s;
        })}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center">
        <button>
          <FaArrowCircleRight></FaArrowCircleRight>
        </button>
        <button>
          <FaArrowCircleLeft></FaArrowCircleLeft>
        </button>
      </div>
    </div>
  );
};

export default Corousal;
