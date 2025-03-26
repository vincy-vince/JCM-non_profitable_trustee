import React from "react";

const Youtube = () => {
  const Video1 = document.getElementById("bigvid");
  function swapVideo(val) {
    Video1.innerHTML = val;
  }
  return (
    <div id="bigvid" className="flex flex-col gap-8 h-96 my-18 items-center ">
      <iframe
        className="w-max border-none rounded-lg mx-auto h-[515px] md:w-[480px] lg:w-[800px] lg:h-full mb-5"
        // width="300"
        // height="515"
        src="https://www.youtube.com/embed/2xcFM9CBiOE?si=9eDWDNVZlBKCr_HF"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="flex flex-row gap-3 w-max items-center justify-center">
        <div
          onClick={(e) => {
            swapVideo(e.currentTarget.innerHTML);
            e.currentTarget.innerHTML = Video1.innerHTML;
            Video1.innerText = val;
          }}
          className="w-16 h-10 bg-slate-300 border-none rounded-sm md:w-36 md:h-20"
        >
          video
        </div>
        <div className="w-16 h-10 bg-slate-300 border-none rounded-sm md:w-36 md:h-20">
          video
        </div>
        <div className="w-16 h-10 bg-slate-300 border-none rounded-sm md:w-36 md:h-20">
          video
        </div>
      </div>
    </div>
  );
};

export default Youtube;
