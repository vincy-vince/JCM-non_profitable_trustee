import React from "react";
import Corousal from "./Corousal";

const Trustee = () => {
  let slides = [
    <div
      key={1}
      className="flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] "
    >
      <img className="w-full h-[40%]" src="public/boy2.png" alt="profile" />
      <div className="bg-blue-100 rounded-b-lg p-2">
        <div className="text-xl font-extrabold mb-5 text-center mt-5">
          Tijo K John
        </div>
        <div className="text-lg font-extrabold mb-5 text-center">
          MSc( Electronics),MTh{" "}
        </div>
        <div className="text-sm font-semibold mb-5 text-center">
          Praise the Lord! May God bless all the ministry work carried out by
          JCM through village ministries and the Bible College. I pray that JCM
          will be a light to many lives in darkness through its ministries,
          bringing all glory to God in the name of Jesus Christ. Amen!
        </div>
      </div>
    </div>,
    <div
      key={2}
      className="flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%]"
    >
      <img
        className="w-full h-[40%]"
        src="public/dummy-prof2.webp"
        alt="profile"
      />
      <div className="bg-blue-100 rounded-b-lg p-2">
        <div className="text-xl font-extrabold mb-5 text-center mt-5">
          Tijo K John
        </div>
        <div className="text-lg font-extrabold mb-5 text-center">
          MSc( Electronics),MTh{" "}
        </div>
        <div className="text-sm font-semibold mb-5 text-center">
          Praise the Lord! May God bless all the ministry work carried out by
          JCM through village ministries and the Bible College. I pray that JCM
          will be a light to many lives in darkness through its ministries,
          bringing all glory to God in the name of Jesus Christ. Amen!
        </div>
      </div>
    </div>,
    <div
      key={3}
      className="flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%]"
    >
      <img className="w-full h-[40%]" src="public/boy2.png" alt="profile" />
      <div className="bg-blue-100 rounded-b-lg p-2">
        <div className="text-xl font-extrabold mb-5 text-center mt-5">
          Tijo K John
        </div>
        <div className="text-lg font-extrabold mb-5 text-center">
          MSc( Electronics),MTh{" "}
        </div>
        <div className="text-sm font-semibold mb-5 text-center">
          Praise the Lord! May God bless all the ministry work carried out by
          JCM through village ministries and the Bible College. I pray that JCM
          will be a light to many lives in darkness through its ministries,
          bringing all glory to God in the name of Jesus Christ. Amen!
        </div>
      </div>
    </div>,
  ];
  return (
    <div className="m-auto w-full">
      <Corousal slides={slides} />
    </div>
  );
};

export default Trustee;
