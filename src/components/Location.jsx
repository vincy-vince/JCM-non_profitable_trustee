import React from "react";

const Location = () => {
  return (
    <div className="w-auto mx-10 bg-[url(public/loc2.jpg)] bg-cover bg-no-repeat h-96 mt-10 rounded-lg">
      <div className="text-right">
        <button className="font-bold text-md bg-blue-950 text-white p-2 border-none rounded-lg mt-10 mr-5">
          View Location
        </button>
      </div>
      <div className="font-bold text-xl mt-28 mx-4">
        📍 Plot no 29,sugavacharhiram, MDR 447, Kilacheri, Tamil Nadu 631402
      </div>
    </div>
  );
};

export default Location;
