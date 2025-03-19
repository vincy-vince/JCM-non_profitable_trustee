import React, { useState } from "react";
import { Link } from "react-router-dom";
const MenuBar = () => {
  const [toggle, setToggle] = useState(false);
  function showToggle() {
    const Ministries = document.getElementById("ministries");
    if (toggle) {
      Ministries.style.display = "block";
    } else {
      Ministries.style.display = "none";
    }
  }
  return (
    <div className="xs: flex xs: flex-row xs: w-auto xs: justify-between xs: p-4 xs: items-center xs: border-1 xs: rounded-lg xs: mt-2 xs: mx-2 xs: gap-4">
      <div >=</div>
      <div>LOGO</div>

      <ul className="xs: flex xs: flex-row  xs: items-center xs: justify-around xs: hidden">
        <li className="xs: p-2 xs: list-none xs: border-1 xs: rounded-md">
          <Link to="/">Home</Link>
        </li>
        <li className="xs: p-2 xs: list-none xs: border-1 xs: rounded-md">
          <Link to="/contact">Contact</Link>
        </li>
        <div className="xs: flex xs: flex-col">
          <li
            onClick={() => showToggle(setToggle(!toggle))}
            className="xs: p-2 xs: list-none xs: border-1 xs: rounded-md"
          >
            Our Ministries
          </li>
          <div id="ministries" className="hidden">
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

      <button className="xs: p-1 xs: bg-blue-950 xs: text-white xs: border-none xs: rounded-lg xs: text-lg xs: hidden">
        Donate
      </button>
    </div>
  );
};

export default MenuBar;
