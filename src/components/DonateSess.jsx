import React, { useState } from "react";
import Corousal from "./Corousal";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DonateInfo } from "../js/Donate";
const DonateSess = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [ShowModal, setShowModal] = useState(false);

  const handleMouseLeave = () => {
    setShowModal(true);
  };

  const donate = DonateInfo.map((Dinfo) => {
    return (
      <div
        className={`bg-${Dinfo.bg_color} w-[90%] h-fit mx-auto border-none rounded-lg text-left py-5 md:w-[60%]`}
      >
        <div className="text-white flex flex-col gap-3 justify-left items-left mx-4">
          <div className="font-bold text-lg text-left">{Dinfo.title}</div>
          <div>{Dinfo.rupees}</div>
          <div className="bg-white w-[100%] h-40 border-none rounded-lg mx-auto mb-3"></div>
          <div className="font-bold">{Dinfo.subtitle}</div>
          <ul className="flex flex-col gap-3 list-disc ml-5 p-2 text-sm">
            {Dinfo.points.map((point, i) => {
              return <li key={i}>{point}</li>;
            })}
          </ul>
          <button
            onClick={handleMouseLeave}
            className={`font-bold bg-white border-none rounded-lg w-[30%] p-2 mx-auto ${Dinfo.class}`}
          >
            Donate
          </button>
        </div>
      </div>
    );
  });

  return (
    <div id="#home" className="mt-20">
      <h1 className="text-2xl font-extrabold text-center mb-20">Donate now</h1>
      <div className="flex items-center flex-col gap-3">
        <div className="m-auto w-full">
          <Corousal slides={donate}></Corousal>
        </div>
        {ShowModal && (
          <div className="fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0">
            <div className="bg-white py-16 px-10 pb-5 rounded-md relative">
              <div className="absolute right-2 top-2 cursor-pointer">
                {" "}
                <IoClose
                  onClick={() => {
                    setShowModal(false);
                  }}
                  size={30}
                ></IoClose>
              </div>
              <div className=" flex flex-col gap-3">
                <div className="text-center mt-5">
                  {" "}
                  Are you a donar donating from India?
                </div>
                <div className="flex flex-col gap-4">
                  <div className="border-2 border-blue-950 bg-blue-950 rounded-sm p-3 text-white text-center">
                    {" "}
                    <Link onClick={scrollToTop} to="/contact#your_contact">
                      {" "}
                      Yes, I'm a donar from India
                    </Link>
                  </div>
                  <div className="border-2 text-blue-950 border-blue-950 bg-blue-50 rounded-sm p-3 text-center">
                    {" "}
                    <Link onClick={scrollToTop} to="/contact#your_contact">
                      No, I'm a foreigner donor outside India
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonateSess;
