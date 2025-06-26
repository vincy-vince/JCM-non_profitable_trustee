import React, { useState } from "react";
import { trustee } from "../js/Trustee";

const LgTrustee = () => {
  // const [display, setDisplay] = useState(false);
  // const handleMouseEnter = () => {
  //   setDisplay(true);
  // };

  // const handleMouseLeave = () => {
  //   setDisplay(false);
  // };
  const TrusteeInfo = trustee.map((info) => {
    return (
      <div
        className=" relative flex flex-col justify-center items-center mx-auto w-[100%] md:h-[350px] xl:h-[350px]"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <img
          className=" w-full h-full rounded-lg"
          src={info.img}
          alt="profile"
        />
        {/* {display && ( */}
        <div
          id="hover"
          className="absolute left-2 right-2 bottom-2 bg-white rounded-lg p-2 h-fit "
        >
          <div className="text-lg font-extrabold mb-3 text-center mt-2">
            {info.name}
          </div>
          <div className="text-lg md:text-sm font-extrabold mb-3 text-center">
            {info.education}
          </div>
        </div>
        {/* )} */}
      </div>
    );
  });

  const trustydiv = TrusteeInfo.map((s, index) => {
    return <div key={index}> {s} </div>;
  });
  return (
    <div className="mx-auto w-[65%] md:w-[85%]">
      <div className="flex  gap-10 flex-row justify-center">{trustydiv} </div>
    </div>
  );
};

export default LgTrustee;

//border border-blue-950 border-t-0 border-x-2 border-b-2
