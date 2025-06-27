import React from "react";
import Corousal from "./Corousal";
import { trustee } from "../js/Trustee";
const Trustee = () => {
  const TrusteeInfo = trustee.map((info) => {
    return (
      <div
        key={info.name}
        className=" relative flex flex-col justify-center items-center mx-auto w-[90%] "
      >
        <img
          className=" w-80% md:w-[60%] h-[300px] rounded-lg"
          src={info.img}
          alt="profile"
        />
        <div className="absolute left-2 right-2 bottom-2 bg-white rounded-lg p-2 h-fit w-[60%] md:w-[55%] mx-auto">
          <div className="text-sm font-extrabold mb-1 text-center mt-1">
            {info.name}
          </div>
          <div className="text-sm font-extrabold mb-2 text-center">
            {info.education}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="m-auto w-full mb-20">
      <div className="text-center font-extrabold mb-8 text-2xl lg:text-3xl xl:text-3xl">
        Our Trustee
      </div>
      <Corousal slides={TrusteeInfo} />
    </div>
  );
};

export default Trustee;
