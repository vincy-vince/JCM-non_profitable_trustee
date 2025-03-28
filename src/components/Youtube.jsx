import React from "react";

const Youtube = () => {
  let val1 = "https://www.youtube.com/embed/2xcFM9CBiOE?si=9eDWDNVZlBKCr_HF?rel=0";
  let val2 = "https://www.youtube.com/embed/Z8agqyGIaD8?si=IbiHOUg0o6HvPR5b?rel=0";
  const Video1 = document.getElementById("bigvid");
  function swapVideo(val) {
    Video1.innerHTML = val;
  }
  return (
    <div
      id="bigvid"
      className="flex flex-col gap-8 h-96 mb-18 mt-20 items-center w-full xl:w-[1000px] xl:mx-auto xl:h-[650px]"
    >
      <iframe
        className="w-max border-none rounded-lg mx-auto h-[515px] md:w-[480px] lg:w-[800px] lg:h-full mb-5 xl:w-[900px] xl:h-[500px]"
        // width="300"
        // height="515"
        src={val1}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen="false"
      ></iframe>
      <div className="flex flex-row gap-20 w-max items-center justify-center">
        <div
          onClick={(e) => {
            // swapVideo(e.currentTarget.innerHTML);
            // e.currentTarget.innerHTML = Video1.innerHTML;
            // Video1.innerText = val;
            swapVideo(val2)
          }}
          className="w-16 h-10 bg-slate-300 border-none rounded-sm md:w-36 md:h-20"
        >
          <iframe
            width="200"
            height="150"
            src={val2}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"

          ></iframe>
        </div>
       
      </div>
    </div>
  );
};

export default Youtube;
