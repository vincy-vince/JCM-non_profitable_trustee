import React from "react";

const Location = () => {
  return (
    <a href="https://maps.app.goo.gl/K1UBacWEwEGKzRVP8">
      <div className="w-auto mx-10 bg-[url(public/loc2.jpg)] bg-cover bg-no-repeat h-96 mt-18 rounded-lg">
        <div className="text-right">
          <button className="font-bold text-md bg-blue-950 text-white p-2 border-none rounded-lg mt-10 mr-5">
            View Location
          </button>
        </div>
        <div className="font-extrabold text-xl mt-28 mx-4 lg:text-2xl">
          📍 Plot no 29,sugavachathiram, MDR 447, Kilacheri, Tamil Nadu - 631402
        </div>
      </div>
    </a>
  );
};

export default Location;
