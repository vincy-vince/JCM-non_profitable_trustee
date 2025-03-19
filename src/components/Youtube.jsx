import React from "react";

const Youtube = () => {
  return (
    <div className="xs: flex xs: flex-col xs: gap-8 xs: w-[auto] xs: h-96 xs: my-18 xs: items-center ">
      <iframe
        className="xs: border-none xs: rounded-lg xs: mx-auto"
        width="340"
        height="515"
        src="https://www.youtube.com/embed/2xcFM9CBiOE?si=9eDWDNVZlBKCr_HF"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="xs: flex xs: flex-row xs: gap-6 xs: w-auto xs: items-center xs: justify-center">
        <div className="xs: w-24 xs: h-16 xs: bg-slate-300 xs: border-none xs: rounded-sm"></div>
        <div className="xs: w-24 xs: h-16 xs: bg-slate-300 xs: border-none xs: rounded-sm"></div>
        <div className="xs: w-24 xs: h-16 xs: bg-slate-300 xs: border-none xs: rounded-sm"></div>
      </div>
    </div>
  );
};

export default Youtube;
