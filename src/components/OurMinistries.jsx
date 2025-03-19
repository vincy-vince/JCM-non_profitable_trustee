import React from "react";

const OurMinistries = () => {
  return (
    <div>
      <h1 className="xs: text-2xl xs: font-extrabold xs: mb-5 xs: text-center">
        Our Ministries
      </h1>

      <div className="xs: flex xs: flex-col xs: gap-10">
        <div className="xs: bg-sky-300 xs: w-auto xs: h-54  xs: border-none xs: rounded-lg xs: text-center xs: mx-10">
          Bible Colledge
        </div>
        <div className="xs: flex xs: flex-col xs: justify-around xs: mb-10 xs :w-auto xs: mx-10 xs: gap-5">
          <div className="xs: bg-pink-300 xs: w-auto xs: h-54   xs: border-none xs: rounded-lg xs: text-center">
            Children Bible Study
          </div>
          <div className="xs: bg-slate-300 xs: w-auto xs: h-54   xs: border-none xs: rounded-lg xs: text-center">
            Womens Fellowship
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMinistries;
