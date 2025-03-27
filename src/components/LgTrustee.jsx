import React, { useState } from "react";

const LgTrustee = () => {
  const [display, setDisplay] = useState(false);
  const handleMouseEnter = () => {
    setDisplay(true);
  };

  const handleMouseLeave = () => {
    setDisplay(false);
  };

  const trusty = [
    <div
      className=" relative flex flex-col justify-center items-center mx-auto w-[100%] "
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <img
        className=" w-full h-[550px] rounded-lg"
        src="public/boy2.png"
        alt="profile"
      />
      {/* {display && ( */}
      <div
        id="hover"
        className="absolute left-2 right-2 bottom-2 bg-white rounded-lg p-2 h-fit "
      >
        <div className="text-lg font-extrabold mb-3 text-center mt-2">
          Sis. Suma Thomas
        </div>
        <div className="text-lg font-extrabold mb-3 text-center">
          MSc( Electronics),MTh{" "}
        </div>
      </div>
      {/* )} */}
    </div>,
    <div className=" relative flex flex-col justify-center items-center mx-auto w-[100%] ">
      <img
        className=" w-full h-[550px] rounded-lg"
        src="public/Mr.Tijo.jpeg"
        alt="profile"
      />
      <div
        id="hover"
        className="absolute left-2 right-2 bottom-2 bg-white rounded-lg p-2 h-fit "
      >
        <div className="text-lg font-extrabold mb-3 text-center mt-2">
          Mr. Tijo K John
        </div>
        <div className="text-lg font-extrabold mb-3 text-center">
          MSc( Electronics),MTh{" "}
        </div>
      </div>
    </div>,
    <div className=" relative flex flex-col justify-center items-center mx-auto w-[100%] ">
      <img
        className=" w-full h-[550px] rounded-lg"
        src="public/boy2.png"
        alt="profile"
      />
      <div
        id="hover"
        className="absolute left-2 right-2 bottom-2 bg-white rounded-lg p-2 h-fit "
      >
        <div className="text-lg font-extrabold mb-3 text-center mt-2">
          Mr. Arun Kumar
        </div>
        <div className="text-lg font-extrabold mb-3 text-center">Trustee</div>
      </div>
    </div>,
  ];

  const trustydiv = trusty.map((s, index) => {
    return <div key={index}> {s} </div>;
  });
  return (
    <div>
      <div className="flex  gap-10  mx-10 flex-row">
        {trustydiv}{" "}
        {display && (
          <div
            id="hover"
            className="absolute left-2 right-2 bottom-2 bg-white rounded-lg p-2 h-fit "
          >
            <div className="text-lg font-extrabold mb-3 text-center mt-2">
              Tijo K John
            </div>
            <div className="text-lg font-extrabold mb-3 text-center">
              MSc( Electronics),MTh{" "}
            </div>
            <div className="text-sm font-semibold text-center">
              Praise the Lord! May God bless all the ministry work carried out
              by JCM through village ministries and the Bible College. I pray
              that JCM will be a light to many lives in darkness through its
              ministries, bringing all glory to God in the name of Jesus Christ.
              Amen!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LgTrustee;

//border border-blue-950 border-t-0 border-x-2 border-b-2
