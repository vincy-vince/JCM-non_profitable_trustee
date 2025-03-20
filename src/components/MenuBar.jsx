import React, { useState } from "react";
import { Link } from "react-router-dom";
const MenuBar = () => {
  const [toggle, setToggle] = useState(false);
  let [menu, setMenu] = useState(false);
  function showToggle() {
    const Ministries = document.getElementById("ministries");

    Ministries.style.display = "block";
    if (!toggle === false) {
      Ministries.style.display = "none";
    }
  }
  function openMenu() {
    const menuBar = document.getElementById("MenuBar-div");
    const Navbar = document.getElementById("nav");

    menuBar.style.display = "block";
    menubar.style.left = "0%";
    menubar.style.transition = "all 2s";
    Navbar.style.display = "flex";
    menu = false;
  }

  function closeMenu() {
    const menuBar = document.getElementById("MenuBar-div");
    if (!menu) {
      menuBar.style.display = "none";
    }
  }
  return (
    <div className="relative">
      <div className=" w-auto mx-2 ">
        <div className=" fixed top-0 right-0 left-0 flex flex-row w-auto justify-between p-4 items-center border-1 rounded-lg mt-2 mx-2 gap-4 bg-white">
          <div>
            <svg
              onClick={() => openMenu()}
              className=" w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              // width="50"
              // height="50"
              viewBox="0 0 50 50"
            >
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
            </svg>
          </div>
          <div>LOGO</div>

          <ul className=" flex-row  items-center justify-around hidden">
            <li className="xs: p-2 list-none border-1 rounded-md">
              <Link to="/">Home</Link>
            </li>
            <li className="xs: p-2 list-none border-1 rounded-md">
              <Link to="/contact">Contact</Link>
            </li>
            <div className="xs: flex flex-col">
              <li className="xs: p-2 list-none border-1 rounded-md">
                Our Ministries
              </li>
              <div className="hidden">
                <div>
                  <Link to="/biblecollege">Bible College</Link>
                </div>
                <div>
                  <Link to="/cbs">CBS</Link>
                </div>
                <div>
                  <Link to="/womensministry">Womens Ministry</Link>
                </div>
              </div>
            </div>
          </ul>

          {/* For Xs screen (370px) */}
          <button className="xs: p-1 bg-blue-950 text-white border-none rounded-lg text-lg hidden">
            Donate
          </button>
        </div>

        {/* for mobile design => XS size (370px)*/}

        <div
          id="MenuBar-div"
          className="hidden bg-white fixed top-0 w-full h-full transition-left duration-300 ease-linear left-[-1%] delay-0 z-1000"
        >
          <div className="flex justify-between mx-5 mt-10">
            <div>
              <svg
                onClick={() => closeMenu(!menu)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div>LOGO</div>
          </div>

          <ul
            id="nav"
            className="ml-4 w-full flex-col items-left text-left gap-3 justify-around bg-white p-10 border-none rounded-md  "
          >
            <li className=" p-2 list-none border-l-2 border-blue-900 rounded-md mb-2">
              <Link to="/">Home</Link>
            </li>
            <li className=" p-2 list-none border-l-2 border-blue-900 rounded-md mb-2">
              <Link to="/contact">Contact</Link>
            </li>
            <div className=" flex flex-col ">
              <div className="flex items-center">
                <li className=" p-2 list-none border-l-2 border-blue-900 rounded-md mb-2">
                  Our Ministries
                </li>
                <svg
                  onClick={() => showToggle(setToggle(!toggle))}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              <div id="ministries" className="hidden text-left mt-2">
                <div className="shadow-md mt-2 w-[120px] ml-4">
                  <Link to="/biblecollege">Bible College</Link>
                </div>
                <div className="shadow-md mt-2 w-[120px] ml-4">
                  <Link to="/cbs">CBS</Link>
                </div>
                <div className="shadow-md mt-2 w-[120px] ml-4">
                  <Link to="/womensministry">Womens Ministry</Link>
                </div>
              </div>

              <button className="w-max px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10">
                Donate
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
