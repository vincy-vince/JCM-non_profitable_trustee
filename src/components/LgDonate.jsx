import React from "react";
import { Link } from "react-router-dom";
const LgDonate = () => {
  return (
    <div>
      <div className="mt-20">
        <h1 className="text-2xl font-extrabold text-center mb-20">
          Donate now
        </h1>
        <div className="flex items-center flex-row gap-3 w-[90%] mx-auto">
          <div className="bg-emerald-600 w-[50%] h-fit mx-auto border-none rounded-lg text-left py-5">
            <div className="text-white flex flex-col gap-3 justify-left items-center">
              <div className="font-bold text-lg">Empower her</div>
              <div>rs.2000/month</div>
              <div className="bg-white w-48 h-26 border-none rounded-lg"></div>
              <div className="font-bold">Sponser a girl child</div>
              <ul className="flex flex-col gap-3 list-disc ml-5 p-2">
                <li>Medical care</li>
                <li>Educational support</li>
                <li>Health and Nutrition</li>
                <li>Personal mentorship</li>
                <li>Hygene and Sanitation</li>
                <li>Imparting ethics and values and more</li>
              </ul>
              <button className="text-black font-bold bg-white border-none rounded-lg w-auto p-2">
                <Link to="/donate">Donate</Link>
              </button>
            </div>
          </div>
          <div className="bg-zinc-600 w-[50%] h-fit mx-auto border-none rounded-lg text-left py-5">
            <div className="text-white flex flex-col gap-3 justify-left items-center">
              <div className="font-bold text-lg">Empower her</div>
              <div>rs.2000/month</div>
              <div className="bg-white w-48 h-26 border-none rounded-lg"></div>
              <div className="font-bold">Sponser a girl child</div>
              <ul className="flex flex-col gap-3 list-disc ml-5 p-2">
                <li>Medical care</li>
                <li>Educational support</li>
                <li>Health and Nutrition</li>
                <li>Personal mentorship</li>
                <li>Hygene and Sanitation</li>
                <li>Imparting ethics and values and more</li>
              </ul>
              <button className="text-black font-bold bg-white border-none rounded-lg w-auto p-2">
                <Link to="/donate">Donate</Link>
              </button>
            </div>
          </div>
          <div className="bg-red-800 w-[50%] h-fit mx-auto border-none rounded-lg text-left py-5">
            <div className="text-white flex flex-col gap-3 justify-left items-center">
              <div className="font-bold text-lg">Empower her</div>
              <div>rs.2000/month</div>
              <div className="bg-white w-48 h-26 border-none rounded-lg"></div>
              <div className="font-bold">Sponser a girl child</div>
              <ul className="flex flex-col gap-3 list-disc ml-5 p-2">
                <li>Medical care</li>
                <li>Educational support</li>
                <li>Health and Nutrition</li>
                <li>Personal mentorship</li>
                <li>Hygene and Sanitation</li>
                <li>Imparting ethics and values and more</li>
              </ul>
              <button className="text-black font-bold bg-white border-none rounded-lg w-auto p-2">
                <Link to="/donate">Donate</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgDonate;
