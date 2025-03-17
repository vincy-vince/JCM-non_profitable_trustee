import React from "react";
import "./MenuBar.css";
const MenuBar = () => {
  return (
    <div className="MenuBar">
      <div>LOGO</div>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Our Ministries</li>
      </ul>
      <button>Donate</button>
    </div>
  );
};

export default MenuBar;
