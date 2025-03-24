import React from "react";

const LgCourses = () => {
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-extrabold text-center mb-16">Courses</h1>
      <div className="flex-row mx-20 gap-10 flex  justify-around w-auto ">
        <div className="bg-emerald-600 w-[50%] h-fit mx-auto border-none rounded-lg text-left py-5">
          <div className="text-white flex flex-col gap-4 justify-left items-left mx-4">
            <div className="font-bold text-lg text-left">Empower her</div>
            <div>rs.2000/month</div>
            <div className="bg-white w-[100%] h-40 border-none rounded-lg mx-auto mb-3"></div>
            <div className="font-bold">Sponser a girl child</div>
            <ul className="flex flex-col gap-3 list-disc ml-5 p-2">
              <li>Medical care</li>
              <li>Educational support</li>
              <li>Health and Nutrition</li>
              <li>Personal mentorship</li>
              <li>Hygene and Sanitation</li>
              <li>Imparting ethics and values and more</li>
            </ul>
            <button className="text-emerald-600 font-bold bg-white border-none rounded-lg w-[30%] p-2 mx-auto">
              <Link to="/donate">Donate</Link>
            </button>
          </div>
        </div>

        <div className="bg-zinc-600 w-[50%] h-fit mx-auto border-none rounded-lg text-left py-5">
          <div className="text-white flex flex-col gap-4 justify-left items-left mx-4">
            <div className="font-bold text-lg text-left">Empower her</div>
            <div>rs.2000/month</div>
            <div className="bg-white w-[100%] h-40 border-none rounded-lg mx-auto mb-3"></div>
            <div className="font-bold">Sponser a girl child</div>
            <ul className="flex flex-col gap-3 list-disc ml-5 p-2 h-max">
              <li>Medical care</li>
              <li>Educational support</li>
              <li>Health and Nutrition</li>
              <li>Personal mentorship</li>
              <li>Hygene and Sanitation</li>
              <li>Imparting ethics and values and more</li>
            </ul>
            <button className="text-zinc-600 font-bold bg-white border-none rounded-lg w-[30%] p-2 mx-auto">
              <Link to="/donate">Donate</Link>
            </button>
          </div>
        </div>

        <div className="bg-red-800 w-[50%] h-fit mx-auto border-none rounded-lg text-left py-5">
          <div className="text-white flex flex-col gap-4 justify-left items-left mx-4">
            <div className="font-bold text-lg text-left">Empower her</div>
            <div>rs.2000/month</div>
            <div className="bg-white w-[100%] h-40 border-none rounded-lg mx-auto mb-3"></div>
            <div className="font-bold">Sponser a girl child</div>
            <ul className="flex flex-col gap-3 list-disc ml-5 p-2">
              <li>Medical care</li>
              <li>Educational support</li>
              <li>Health and Nutrition</li>
              <li>Personal mentorship</li>
              <li>Hygene and Sanitation</li>
              <li>Imparting ethics and values and more</li>
            </ul>
            <button className="text-red-800 font-bold bg-white border-none rounded-lg w-[30%] p-2 mx-auto">
              <Link to="/donate">Donate</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgCourses;
