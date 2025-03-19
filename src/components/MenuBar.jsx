import React from "react";

const MenuBar = () => {
  return (
    <div className="flex flex-row justify-between p-4 items-center border-1 rounded-lg mt-2 mx-2">
      <div>LOGO</div>
      <ul className="w-1/3 flex flex-row justify-around items-center">
        <li className="p-2 list-none border-1 rounded-md">Home</li>
        <li className="p-2 list-none border-1 rounded-md">Contact</li>
        <li className="p-2 list-none border-1 rounded-md">Our Ministries</li>
      </ul>
      <button className="p-3 bg-blue-950 text-white border-none rounded-lg text-lg">
        Donate
      </button>
    </div>
  );
};

export default MenuBar;
