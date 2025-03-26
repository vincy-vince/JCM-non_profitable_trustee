import React from "react";

const Location = () => {
  return (
    <a href="https://maps.app.goo.gl/K1UBacWEwEGKzRVP8">
      <div className="w-auto mx-10 bg-[url(public/loc2.jpg)] bg-cover bg-no-repeat h-fit pb-3 md:h-54 mt-18 lg:h-60 rounded-lg md:pt-2 xl:h-64 xl:mx-28">
        <div className="text-right">
          <button className="font-bold text-md bg-blue-950 text-white p-2 border-none rounded-lg mt-6 mr-4 hidden md:block md:ml-[76%] lg:block xl:px-6 xl:py-4">
            View Location
          </button>
        </div>
        <div className="text-5xl pt-4 w-[20px] md:w-[40px] md:h-[30px] ml-3">
          <svg
            fill="#D21F3C"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 395.71 395.71"
            xmlSpace="preserve"
            stroke="#FF0000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        <div className="font-extrabold md:text-justify lg:text-left text-lg pt-3 md:mt-5 md:text-2xl mx-4 lg:text-3xl lg:pb-3 lg:ml-4 xl:ml-8">
          Plot no 29,sugavachathiram, MDR 447, Kilacheri,<br></br> Tamil Nadu -
          631402
        </div>
        <button className="font-bold text-md bg-blue-950 text-white p-2 border-none rounded-lg mt-10 ml-[55%] md:hidden lg:hidden xl:hidden">
          View Location
        </button>
      </div>
    </a>
  );
};

export default Location;
