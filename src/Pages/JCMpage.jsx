import React from "react";
import MenuBar from "../components/MenuBar";
const JCMpage = () => {
  return (
    <div>
      <MenuBar />
      <div className="bg-[url(public/background-JCM.png)] h-full p-46 w-full bg-cover bg-no-repeat mt-4 mx-4 ">
        <h1 className="text-5xl text-bold">Judea Christ Ministries</h1>
        <button className="bg-red-600 text-white p-4 border-none rounded-md text-lg mt-5">
          Register Now
        </button>
      </div>
      <p className="align-center text-lg font-extrabold p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni
        nulla harum nesciunt a nihil laborum eum ipsam quasi fugiat. Voluptatum,
        nam. Ratione, ullam quam animi dolorum modi est accusamus! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Unde magni nulla harum
        nesciunt a nihil laborum eum ipsam quasi fugiat. Voluptatum, nam.
        Ratione, ullam quam animi dolorum modi est accusamus! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Unde magni nulla harum nesciunt a
        nihil laborum eum ipsam quasi fugiat. Voluptatum, nam. Ratione, ullam
        quam animi dolorum modi est accusamus!
      </p>
      <div className="mt-4 flex flex-row justify-evenly items-center p-5 mb-10">
        <img className="w-sm h-lg " src="public/sec-2.png" alt="" />
        <div className="w-sm text-lg text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
          perferendis quasi eius, distinctio totam vitae fugit suscipit
          accusantium. Illum esse voluptas rem excepturi enim ducimus voluptates
          voluptate voluptatum, quasi cumque eos, quo recusandae temporibus
          tenetur adipisci culpa doloremque ipsam aut odit distinctio. Maxime,
          nemo ea! Temporibus non ipsa provident nobis.
          <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
          quasi illum fuga delectus, dignissimos vitae rerum, assumenda in ipsa
          quibusdam iste asperiores ex fugiat suscipit eaque, provident nobis
          cumque quia eum dolore magnam laboriosam perferendis. Voluptas dolores
          voluptatum odio dolorum consectetur, rem voluptates iste saepe magni
          est corrupti alias qui at nulla, mollitia quisquam totam aliquid ab
          ipsam, quos dolorem?
        </div>
      </div>
      <div className="text-lg font-semibold text-center flex flex-col gap-5 mx-5">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
          fugiat possimus fuga delectus ut tempora, minus nobis dolorem est
          cumque repudiandae, numquam iure veritatis provident officiis
          assumenda tempore quae eaque? Molestias nisi asperiores dicta magnam
          reiciendis eaque? Sed, minus suscipit? Consectetur officiis ut
          obcaecati nesciunt totam cupiditate dicta perspiciatis amet?
        </p>{" "}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
          fugiat possimus fuga delectus ut tempora, minus nobis dolorem est
          cumque repudiandae, numquam iure veritatis provident officiis
          assumenda tempore quae eaque? Molestias nisi asperiores dicta magnam
          reiciendis eaque? Sed, minus suscipit? Consectetur officiis ut
          obcaecati nesciunt totam cupiditate dicta perspiciatis amet?
        </p>
      </div>
      {/* youtube-session */}
      <div className="flex flex-col gap-8 w-full h-96 my-18 items-center">
        <iframe
          className="border-none rounded-lg"
          width="660"
          height="515"
          src="https://www.youtube.com/embed/2xcFM9CBiOE?si=9eDWDNVZlBKCr_HF"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="flex flex-row gap-6 w-auto items-center justify-center">
          <div className="w-40 h-24 bg-slate-300 border-none rounded-sm"></div>
          <div className="w-40 h-24 bg-slate-300 border-none rounded-sm"></div>
          <div className="w-40 h-24 bg-slate-300 border-none rounded-sm"></div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl text-extrabold mb-5 text-center">
          Our Ministries
        </h1>
        <div className="flex flex-col gap-10">
          <div className="bg-sky-300 w-auto h-96 mx-20 border-none rounded-lg text-center">
            Bible Colledge
          </div>
          <div className="flex flex-row justify-around mb-10">
            <div className="bg-pink-300 w-1/2 h-54 mx-20 border-none rounded-lg text-center">
              Children Bible Study
            </div>
            <div className="bg-slate-300 w-1/2 h-54 mx-20 border-none rounded-lg text-center">
              Womens Fellowship
            </div>
          </div>
        </div>
      </div>
      {/* Donate now session */}
      <div>
        <h1 className="text-3xl text-extrabold mb-5 text-center">Donate now</h1>
        <div className="flex flex-row">
          <div className="bg-emerald-600 w-1/2 h-fit mx-20 border-none rounded-lg text-center py-5">
            <div className="text-white flex flex-col gap-3 justify-left items-center">
              <div className="font-bold text-lg">Empower her</div>
              <div>rs.2000/month</div>
              <div className="bg-white w-52 h-36 border-none rounded-lg"></div>
              <div className="font-bold">Sponser a girl child</div>
              <ul className="flex flex-col gap-3">
                <li>Medical care</li>
                <li>Educational support</li>
                <li>Health and Nutrition</li>
                <li>Personal mentorship</li>
                <li>Hygene and Sanitation</li>
                <li>Imparting ethics and values and more</li>
              </ul>
              <button className="text-black font-bold bg-white border-none rounded-lg w-auto p-2">
                Donate
              </button>
            </div>
          </div>
          <div className="bg-zinc-600 w-1/2 h-fit mx-20 border-none rounded-lg text-center py-5">
            <div className="text-white flex flex-col gap-3 justify-left items-center">
              <div className="font-bold text-lg">Empower her</div>
              <div>rs.2000/month</div>
              <div className="bg-white w-52 h-36 border-none rounded-lg"></div>
              <div className="font-bold">Sponser a girl child</div>
              <ul className="flex flex-col gap-3">
                <li>Medical care</li>
                <li>Educational support</li>
                <li>Health and Nutrition</li>
                <li>Personal mentorship</li>
                <li>Hygene and Sanitation</li>
                <li>Imparting ethics and values and more</li>
              </ul>
              <button className="font-bold bg-white border-none rounded-lg w-auto p-2">
                Donate
              </button>
            </div>
          </div>
          <div className="bg-red-800 w-1/2 h-fit mx-20 border-none rounded-lg text-center py-5">
            <div className="text-white flex flex-col gap-3 justify-left items-center">
              <div className="font-bold text-lg">Empower her</div>
              <div>rs.2000/month</div>
              <div className="bg-white w-52 h-36 border-none rounded-lg"></div>
              <div className="font-bold">Sponser a girl child</div>
              <ul className="flex flex-col gap-3">
                <li>Medical care</li>
                <li>Educational support</li>
                <li>Health and Nutrition</li>
                <li>Personal mentorship</li>
                <li>Hygene and Sanitation</li>
                <li>Imparting ethics and values and more</li>
              </ul>
              <button className="font-bold bg-white border-none rounded-lg w-auto p-2">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* quote */}
      <div className="w-auto mx-4 bg-gray-200 h-96 text-center pt-44 mt-10 text-extrabold text-3xl">
        " The first time I walked into the church,
        <br /> I felt peace and i knew, i was Home "
      </div>
    </div>
  );
};

export default JCMpage;
