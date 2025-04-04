import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
const LgDonate = () => {
  const [ShowModal, setShowModal] = useState(false);

  const handleMouseLeave = () => {
    setShowModal(true);
  };
  const scrollRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const scrollAmount = 25;

  const startScrolling = (direction) => {
    if (scrollIntervalRef.current) return;
    scrollIntervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += direction * scrollAmount;
      }
    }, 20);
  };

  const stopScrolling = () => {
    clearInterval(scrollIntervalRef.current);
    scrollIntervalRef.current = null;
  };
  let slides = [
    <div className="bg-emerald-600 w-[60%] h-fit mx-4 border-none rounded-lg text-left py-5 lg:w-[100%] xl:w-[100%] hover:shadow-xl hover:shadow-emerald-600 hover:-translate-y-4 transition-all duration-300">
      <div className="text-white flex flex-col gap-3 justify-left items-left mx-4">
        <div className="font-bold text-lg">Empower her</div>
        <div>rs.2000/month</div>
        <div className="bg-white h-30 border-none rounded-lg"></div>
        <div className="font-bold">Sponser a girl child</div>
        <ul className="flex flex-col gap-3 list-disc ml-5 p-2">
          <li>Medical care</li>
          <li>Educational support</li>
          <li>Health and Nutrition</li>
          <li>Personal mentorship</li>
          <li>Hygene and Sanitation</li>
          <li>Imparting ethics and values and more</li>
        </ul>
        <button
          onClick={handleMouseLeave}
          className="text-emerald-600 font-bold bg-white border-none rounded-lg w-max p-2 mx-auto"
        >
          Donate
        </button>
      </div>
    </div>,
    <div className="bg-zinc-600 w-[60%] h-fit mx-4 border-none rounded-lg text-left py-5 lg:w-[100%] xl:w-[100%] hover:shadow-xl hover:shadow-zinc-600 hover:-translate-y-4 transition-all duration-300">
      <div className="text-white flex flex-col gap-3 justify-left items-left mx-4">
        <div className="font-bold text-lg">Empower her</div>
        <div>rs.2000/month</div>
        <div className="bg-white h-30 border-none rounded-lg"></div>
        <div className="font-bold">Sponser a girl child</div>
        <ul className="flex flex-col gap-3 list-disc ml-5 p-2">
          <li>Medical care</li>
          <li>Educational support</li>
          <li>Health and Nutrition</li>
          <li>Personal mentorship</li>
          <li>Hygene and Sanitation</li>
          <li>Imparting ethics and values and more</li>
        </ul>
        <button
          onClick={handleMouseLeave}
          className="text-zinc-600 font-bold bg-white border-none rounded-lg w-max p-2 mx-auto"
        >
          Donate
        </button>
      </div>
    </div>,
    <div className="bg-red-800 w-[60%] h-fit mx-4 border-none rounded-lg text-left py-5  lg:w-[100%] xl:w-[100%] hover:shadow-xl hover:shadow-red-800 hover:-translate-y-4 transition-all duration-300">
      <div className="text-white flex flex-col gap-3 justify-left items-left mx-4">
        <div className="font-bold text-lg">Empower her</div>
        <div>rs.2000/month</div>
        <div className="bg-white h-30 border-none rounded-lg"></div>
        <div className="font-bold">Sponser a girl child</div>
        <ul className="flex flex-col gap-3 list-disc ml-5 p-2">
          <li>Medical care</li>
          <li>Educational support</li>
          <li>Health and Nutrition</li>
          <li>Personal mentorship</li>
          <li>Hygene and Sanitation</li>
          <li>Imparting ethics and values and more</li>
        </ul>
        <button
          onClick={handleMouseLeave}
          className="text-red-800 font-bold bg-white border-none rounded-lg w-max p-2 mx-auto"
        >
          Donate
        </button>
      </div>
    </div>,
    <div className="bg-zinc-600 w-[60%] h-fit mx-4 border-none rounded-lg text-left py-5 lg:w-[100%] xl:w-[100%] hover:shadow-xl hover:shadow-zinc-600 hover:-translate-y-4 transition-all duration-300">
      <div className="text-white flex flex-col gap-3 justify-left items-left mx-4">
        <div className="font-bold text-lg">Empower her</div>
        <div>rs.2000/month</div>
        <div className="bg-white h-30 border-none rounded-lg"></div>
        <div className="font-bold">Sponser a girl child</div>
        <ul className="flex flex-col gap-3 list-disc ml-5 p-2">
          <li>Medical care</li>
          <li>Educational support</li>
          <li>Health and Nutrition</li>
          <li>Personal mentorship</li>
          <li>Hygene and Sanitation</li>
          <li>Imparting ethics and values and more</li>
        </ul>
        <button
          onClick={handleMouseLeave}
          className="text-zinc-600 font-bold bg-white border-none rounded-lg w-max p-2 mx-auto"
        >
          Donate
        </button>
      </div>
    </div>,
    <div className="bg-emerald-600 w-[60%] h-fit mx-4 border-none rounded-lg text-left py-5 lg:w-[100%] xl:w-[100%] hover:shadow-xl hover:shadow-emerald-600 hover:-translate-y-4 transition-all duration-300">
      <div className="text-white flex flex-col gap-3 justify-left items-left mx-4">
        <div className="font-bold text-lg">Empower her</div>
        <div>rs.2000/month</div>
        <div className="bg-white h-30 border-none rounded-lg"></div>
        <div className="font-bold">Sponser a girl child</div>
        <ul className="flex flex-col gap-3 list-disc ml-5 p-2">
          <li>Medical care</li>
          <li>Educational support</li>
          <li>Health and Nutrition</li>
          <li>Personal mentorship</li>
          <li>Hygene and Sanitation</li>
          <li>Imparting ethics and values and more</li>
        </ul>
        <button
          onClick={handleMouseLeave}
          className="text-emerald-600 font-bold bg-white border-none rounded-lg w-max p-2 mx-auto"
        >
          Donate
        </button>
      </div>
    </div>,
  ];
  return (
    <div className="relative">
      <h1 className=" mt-20 text-2xl font-extrabold text-center mb-20 xl:text-3xl">
        Donate now
      </h1>
      <div
        className="absolute left-0 top-[55%] h-10 w-10 z-5 scroll-smooth text-center bg-gray-400 mx-auto hover:bg-gray-500 hover:text-white xl:text-2xl font-extrabold rounded-full"
        onMouseEnter={() => startScrolling(-1)}
        onMouseLeave={stopScrolling}
      >
        ←
      </div>
      <div
        ref={scrollRef}
        id="scrollContainer"
        className=" mx-10 overflow-auto scroll-smooth scrollbar-hide transparent-scrollbar lg:py-10 xl:py-10"
      >
        {/* Left Hover Zone */}

        <div className="flex space-x-4  items-center flex-row gap-3 w-[100%]  lg:w-max lg:mx-auto xl:w-max xl:mx-auto mx-auto">
          {slides.map((s, index) => {
            return <div key={index}> {s} </div>;
          })}
          {ShowModal && (
            <div className="fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0">
              <div className="bg-white py-16 px-10 pb-5 rounded-md relative">
                <div className="absolute right-2 top-2 cursor-pointer">
                  {" "}
                  <IoClose
                    onClick={() => {
                      setShowModal(false);
                    }}
                    size={30}
                  ></IoClose>
                </div>
                <div className=" flex flex-col gap-3">
                  <div className="text-center mt-5">
                    {" "}
                    Are you a donar donating from India?
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="border-2 border-blue-950 bg-blue-950 rounded-sm p-3 text-white text-center">
                      {" "}
                      <Link to="/contact#your_contact">
                        {" "}
                        Yes, I'm a donar from India
                      </Link>
                    </div>
                    <div className="border-2 text-blue-950 border-blue-950 bg-blue-50 rounded-sm p-3 text-center">
                      {" "}
                      <Link to="/contact#your_contact">
                        No, I'm a foreigner donor outside India
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Hover Zone */}
      </div>
      <div
        className="absolute right-0 top-[55%] h-10 w-10 z-5 scroll-smooth text-center bg-gray-400 mx-auto hover:bg-gray-500 hover:text-white xl:text-2xl font-extrabold rounded-full"
        onMouseEnter={() => startScrolling(1)}
        onMouseLeave={stopScrolling}
      >
        →
      </div>
    </div>
  );
};

export default LgDonate;
// animate-scroll pause-on-hover
