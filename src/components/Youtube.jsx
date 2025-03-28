import React, { useState } from "react";

const Youtube = () => {
  // const [videos, setVideos] = useState([
  //   {
  //     id: 1,
  //     title: "Video 1",
  //     src: "https://www.youtube.com/embed/2xcFM9CBiOE?si=9eDWDNVZlBKCr_HF?rel=0",
  //   },
  //   {
  //     id: 2,
  //     title: "Video 2",
  //     src: "https://www.youtube.com/embed/Z8agqyGIaD8?si=IbiHOUg0o6HvPR5b?rel=0",
  //   },
  //   {
  //     id: 3,
  //     title: "Video 3",
  //     src: "https://www.youtube.com/embed/Z8agqyGIaD8?si=IbiHOUg0o6HvPR5b?rel=0",
  //   },
  // ]);

  // const swapVideos = (index1, index2) => {
  //   const newVideos = [...videos];
  //   // Swap the videos in the array
  //   [newVideos[index1], newVideos[index2]] = [
  //     newVideos[index2],
  //     newVideos[index1],
  //   ];
  //   setVideos(newVideos);
  // };

  // return (
  //   // <div
  //   //   id="bigvid"
  //   //
  //   // >
  //   //   <iframe
  //   //     className="w-max border-none rounded-lg mx-auto h-[515px] md:w-[480px] lg:w-[800px] lg:h-full mb-5 xl:w-[900px] xl:h-[500px]"
  //   //     // width="300"
  //   //     // height="515"
  //   //     src={val1}
  //   //     title="YouTube video player"
  //   //     frameBorder="0"
  //   //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //   //     referrerPolicy="strict-origin-when-cross-origin"
  //   //     allowFullScreen="false"
  //   //   ></iframe>
  //   //   <div className="flex flex-row gap-20 w-max items-center justify-center">
  //   //     <div
  //   //       onClick={(e) => {
  //   //         // swapVideo(e.currentTarget.innerHTML);
  //   //         // e.currentTarget.innerHTML = Video1.innerHTML;
  //   //         // Video1.innerText = val;
  //   //         swapVideo(val2)
  //   //       }}
  //   //       className="w-16 h-10 bg-slate-300 border-none rounded-sm md:w-36 md:h-20"
  //   //     >
  //   //       <iframe
  //   //         width="200"
  //   //         height="150"
  //   //         src={val2}
  //   //         title="YouTube video player"
  //   //         frameborder="0"
  //   //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //   //         referrerpolicy="strict-origin-when-cross-origin"

  //   //       ></iframe>
  //   //     </div>

  //   //   </div>
  //   // </div>
  //   <div className="flex flex-col gap-8 h-96 mb-18 mt-20 items-center w-full xl:w-[1000px] xl:mx-auto xl:h-[650px]">
  //     {videos.map((video, index) => (
  //       <div
  //         key={video.id}
  //         className="video-div"
  //         onClick={() => {
  //           // For this example, we swap video 1 with the clicked one
  //           const otherIndex = index === 0 ? 1 : 0; // Swap between index 0 and 1
  //           swapVideos(index, otherIndex);
  //         }}
  //       >
  //         <h3>{video.title}</h3>

  //         <iframe
  //           width="100%"
  //           height="200"
  //           src={video.src}
  //           title={video.title}
  //           frameBorder="0"
  //           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  //           allowFullScreen
  //         ></iframe>
  //       </div>
  //     ))}
  //   </div>
  // );
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Play",
      src: "https://www.youtube.com/embed/2xcFM9CBiOE?si=9eDWDNVZlBKCr_HF?rel=0",
    }, // Large video
    {
      id: 2,
      title: "Play",
      src: "https://www.youtube.com/embed/Z8agqyGIaD8?si=IbiHOUg0o6HvPR5b?rel=0",
    },
    {
      id: 3,
      title: "Play",
      src: "https://www.youtube.com/embed/Z8agqyGIaD8?si=IbiHOUg0o6HvPR5b?rel=0",
    },
    {
      id: 4,
      title: "Play",
      src: "https://www.youtube.com/embed/75BOyCl6uEk?si=xzD1weT9jpo6OLRS",
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
      <div className="mb-6 mt-15">
        {/* <h3 className="text-xl md:text-2xl font-semibold mb-2">Curent video</h3> */}
        <iframe
          className="w-full h-[300px] md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto"
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
            className="cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
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
