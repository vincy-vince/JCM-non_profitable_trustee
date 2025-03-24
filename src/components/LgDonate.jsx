import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
const LgDonate = () => {
  const [ShowModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="mt-20">
        <h1 className="text-2xl font-extrabold text-center mb-20">
          Donate now
        </h1>
        <div className="flex items-center flex-row gap-3 w-[90%] mx-auto">
          <div className="bg-emerald-600 w-[50%] h-fit mx-auto border-none rounded-lg text-left py-5">
            <div className="text-white flex flex-col gap-3 justify-left items-left mx-4">
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
              <button
                onClick={() => setShowModal(true)}
                className="text-emerald-600 font-bold bg-white border-none rounded-lg w-auto p-2"
              >
                Donate
              </button>
              {ShowModal && (
                <div className="fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0">
                  <div className="bg-white py-16 px-10 pb-5 rounded-md relative">
                    <div className="absolute right-2 top-2 cursor-pointer ">
                      {" "}
                      <IoClose
                        fill="black"
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
                          <Link to="/contact">
                            {" "}
                            Yes, I'm a donar from India
                          </Link>
                        </div>
                        <div className="border-2 text-blue-950 border-blue-950 bg-blue-50 rounded-sm p-3 text-center">
                          {" "}
                          <Link to="/contact">
                            No, I'm a foreigner donor outside India
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
              <button
                onClick={() => setShowModal(true)}
                className="text-zinc-600 font-bold bg-white border-none rounded-lg w-auto p-2"
              >
                Donate
              </button>
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
                          <Link to="/contact">
                            {" "}
                            Yes, I'm a donar from India
                          </Link>
                        </div>
                        <div className="border-2 text-blue-950 border-blue-950 bg-blue-50 rounded-sm p-3 text-center">
                          {" "}
                          <Link to="/contact">
                            No, I'm a foreigner donor outside India
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
              <button
                onClick={() => setShowModal(true)}
                className="text-red-800 font-bold bg-white border-none rounded-lg w-auto p-2"
              >
                Donate
              </button>
              {ShowModal && (
                <div className="fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0">
                  <div className="bg-white py-16 px-10 pb-5 rounded-md relative text-black">
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
                          <Link to="/contact">
                            {" "}
                            Yes, I'm a donar from India
                          </Link>
                        </div>
                        <div className="border-2 text-blue-950 border-blue-950 bg-blue-50 rounded-sm p-3 text-center">
                          {" "}
                          <Link to="/contact">
                            No, I'm a foreigner donor outside India
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgDonate;
