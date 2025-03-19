import React from "react";

const Location = () => {
  return (
    <div className="xs: w-auto xs: mx-10 xs: bg-[url(public/loc2.jpg)] xs: bg-cover xs: bg-no-repeat xs: h-96 xs: mt-20 xs: rounded-lg">
      <div className="xs: text-right">
        <button className="xs: font-bold xs: text-md xs: bg-blue-950 xs: text-white xs: p-2 xs: border-none xs: rounded-lg xs: mt-10 xs: mr-5">
          View Location
        </button>
      </div>
      <div className="xs: font-bold xs: text-xl xs: mt-28 xs: mx-4">
        📍 Plot no 29,sugavacharhiram, MDR 447, Kilacheri, Tamil Nadu 631402
      </div>
    </div>
  );
};

export default Location;
