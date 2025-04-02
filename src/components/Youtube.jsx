import React, { useState } from "react";

const Youtube = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Play",
      src: "https://www.youtube.com/embed/stOzTHww1oE?si=5cKGA8Ny4ks-SbAU?rel=0",
    }, // Large video
    {
      id: 2,
      title: "Play",
      src: "https://www.youtube.com/embed/KhTgVrIvoBg?si=hEdy9so1Xrrvjkz1&autoplay=0?controls=0",
    },
    {
      id: 3,
      title: "Play",
      src: "https://www.youtube.com/embed/9OF7uBaib4w?si=eg0SwuN-pDLHil02&autoplay=0?controls=0",
    },
    {
      id: 4,
      title: "Play",
      src: "https://www.youtube.com/embed/2BDm-7-_cUs?si=HIzxMqLRDVBRuxqI&autoplay=0?controls=0",
    },
  ]);

  // Function to swap the large video with the clicked small video
  const swapVideos = (index) => {
    const newVideos = [...videos];
    // Swap the clicked video with the large video (index 0)
    [newVideos[0], newVideos[index]] = [newVideos[index], newVideos[0]];
    setVideos(newVideos);
  };

  return (
    <div className="text-center mx-10">
      {/* Large video */}
      <div className="mb-6 lg:mb-10 mt-15">
        {/* <h3 className="text-xl md:text-2xl font-semibold mb-2">Curent video</h3> */}
        <iframe
          className="w-full rounded-lg h-[300px] md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto "
          height="450"
          src={videos[0].src}
          title={videos[0].title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Small videos below */}
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center gap-4 md:mx-auto lg:mx-auto">
        {videos.slice(1).map((video, index) => (
          <div
            key={video.id}
            className="cursor-pointer w-full mx-auto sm:w-1/2 md:w-1/3 lg:w-1/4"
            onClick={() => swapVideos(index + 1)} // Pass the index (starting from 1)
          >
            <h3 className="text-md md:text-lg font-semibold border-x-1 border-t-1 border-red-600 bg-red-600 text-white rounded-t-lg">
              {video.title}
            </h3>
            <iframe
              className="w-full rounded-b-lg"
              height="150"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Youtube;
