import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const MenuBar = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(true);
  let [menu, setMenu] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        const Navbar = document.getElementById("nav");
        setOpen(true);
        Navbar.style.display = "none";
      }
    };
    document.addEventListener("mouseover", handler);
  });

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

    Navbar.style.display = "flex";
    menu = false;
  }

  function openMenubig() {
    const Navbar = document.getElementById("nav");
    if (!open == false) {
      Navbar.style.display = "flex";
    }
  }

  function closeMenubig() {
    const Navbar = document.getElementById("nav");

    Navbar.style.display = "none";
  }

  function closeMenu() {
    const menuBar = document.getElementById("MenuBar-div");
    if (!menu) {
      menuBar.style.display = "none";
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div
        onClick={() => closeMenubig(setOpen(!open))}
        ref={menuRef}
        className=" w-auto mx-2 "
      >
        <div className=" fixed top-0 right-0 left-0 flex flex-row w-auto justify-between p-4 items-center gap-4 bg-white z-[10]">
          <div className=" block md:hidden lg:hidden">
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
          <div>
            <a href="/">
              <img className="w-[70px] h-[70px]" src="jcmLOGO-square.png" />
            </a>
          </div>

          <ul className="hidden flex-row items-center justify-around md:flex lg:flex md:gap-20 lg:gap-60 xl:gap-75">
            <div className="flex justify-center md:gap-5 lg:gap-10 xl:gap-12">
              <li className=" p-2 list-none border-none text-white shadow-md bg-red-700/70 font-bold shadow-red-700/50 rounded-md xl:text-xl">
                <Link onClick={scrollToTop} to="/#home">
                  Home
                </Link>
              </li>
              <li className=" p-2 list-none border-none text-white shadow-md bg-red-700/70 font-bold shadow-red-700/50 rounded-md xl:text-xl">
                <Link onClick={scrollToTop} to="/contact#contact">
                  Contact us
                </Link>
              </li>
              <div className=" flex flex-col">
                <li
                  id="our-Mini"
                  onMouseEnter={() => openMenubig(setOpen(!open))}
                  className=" p-2 list-none border-none text-white shadow-md bg-red-700/70 font-bold shadow-red-700/50 rounded-md xl:text-xl"
                >
                  Our Ministries
                </li>
                <div
                  id="nav"
                  className="hidden flex-col absolute top-19 text-md bg-white rounded-b-md border-b-2 "
                >
                  <Link onClick={scrollToTop} to="/biblecollege#bible-coll">
                    <div className="p-2 hover:bg-blue-900 hover:text-white transition-all lg:text-lg xl:text-xl">
                      Bible College
                    </div>
                  </Link>
                  <Link onClick={scrollToTop} to="/cbs#cbs">
                    {" "}
                    <div className="p-2 hover:bg-blue-900 hover:text-white transition-all lg:text-lg xl:text-xl">
                      (CBS) children <br />
                      Bible Study
                    </div>
                  </Link>

                  <Link onClick={scrollToTop} to="/womensministry#womens-min">
                    <div className="p-2 hover:bg-blue-900 hover:text-white transition-all lg:text-lg xl:text-xl rounded-b-md">
                      Womens Ministry
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* <HashLink to={"/#lghome"}>
              <button className="w-max px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg font-bold hover:bg-blue-900 transition-colors hidden shadow-md shadow-blue-950 md:hidden lg:block lg:text-lg xl:text-xl">
                Donate
              </button>
            </HashLink>
            <button className="w-max px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg font-bold hover:bg-blue-900 transition-colors hidden shadow-md shadow-blue-950 md:inline-block lg:hidden">
              <HashLink to={"/#home"}>Donate</HashLink>
            </button> */}
          </ul>
        </div>

        {/* for mobile design => XS size (370px)*/}

        {/* For Xs screen (370px) */}

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
            <div>
              <a href="/">
                <img className="w-[60px] h-[60px]" src="jcmLOGO-square.png" />
              </a>
            </div>
          </div>

          <ul
            id="nav"
            className="ml-4 w-full flex-col items-left text-left gap-3 justify-around bg-white p-10 border-none rounded-md  "
          >
            <li className=" p-2 list-none border-l-2 border-blue-900 rounded-md mb-2">
              <Link to="/">Home</Link>
            </li>
            <li className=" p-2 list-none border-l-2 border-blue-900 rounded-md mb-2 md:hidden">
              <Link to="/contact">Contact</Link>
            </li>
            <div className=" flex flex-col ">
              <div className="flex items-center">
                <li className=" p-2 list-none border-l-2 border-blue-900 rounded-md mb-2">
                  Our Ministries
                </li>
                {!toggle ? (
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
                ) : (
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
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                )}
              </div>

              <div id="ministries" className="hidden text-left mt-2">
                <div className="shadow-md mt-1 w-[45%] hover:bg-blue-900 rounded-sm p-2 hover:text-white transition-all">
                  <Link to="/biblecollege">Bible College</Link>
                </div>
                <div className="shadow-md mt-1 w-[45%] hover:bg-blue-900 rounded-sm p-2 hover:text-white transition-all">
                  <Link to="/cbs">(CBS) Children Bible Study</Link>
                </div>
                <div className="shadow-md mt-1 w-[45%] hover:bg-blue-900 rounded-sm p-2 hover:text-white transition-all">
                  <Link to="/womensministry">Womens Ministry</Link>
                </div>
              </div>

              {/* <button className="w-max px-3 py-2 bg-blue-950 text-white border-none rounded-lg text-lg mt-10 hover:bg-blue-900 transition-colors">
                <HashLink to={"/#home"}>Donate</HashLink>
              </button> */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
