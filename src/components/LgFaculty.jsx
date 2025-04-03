import React from "react";

const LgFaculty = () => {
  return (
    <div className="mt-15">
      <div className="text-lg font-bold text-center md:text-xl lg:text-2xl xl:text-3xl">
        Our Faculties
      </div>
      <div className="flex flex-row gap-6 mt-15 mx-10 xl:mx-40">
        <div
          key={1}
          className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max xl:w-[400px] xl:h-[360px]"
        >
          <img
            className="w-full h-[40%] rounded-t-lg xl:h-[500px]"
            src="Mr.Tijo.jpeg"
            alt="profile"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
            <div className="text-xl font-extrabold my-2 text-center">
              Tijo K John
            </div>
            <div className="text-lg font-extrabold mb-2 text-center">
              MSc, MTh
            </div>
          </div>
        </div>

        <div
          key={2}
          className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max xl:w-[400px] xl:h-[360px]"
        >
          <img
            className="w-full h-[40%] rounded-t-lg xl:h-[500px]"
            src="public/sis-Suma.jpeg"
            alt="profile"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
            <div className="text-xl font-extrabold my-2 text-center ">
              Sis. Suma Thomas
            </div>
            <div className="text-lg font-extrabold mb-2 text-center">M.Div</div>
          </div>
        </div>

        <div
          key={3}
          className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max xl:w-[400px] xl:h-[360px]"
        >
          <img
            className="w-full h-[40%] rounded-t-lg xl:h-[500px]"
            src="public/Pr.Robbin.jpeg"
            alt="profile"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
            <div className="text-xl font-extrabold my-2 text-center ">
              Pr. Robbin Devadas
            </div>
            <div className="text-lg font-extrabold mb-2 text-center">Bca</div>
          </div>
        </div>

        <div
          key={4}
          className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max xl:w-[400px] xl:h-[360px]"
        >
          <img
            className="w-full h-[40%] rounded-t-lg xl:h-[500px]"
            src="boy2.png"
            alt="profile"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
            <div className="text-xl font-extrabold my-2 text-center ">
              Pr. Reji
            </div>
            <div className="text-lg font-extrabold mb-2 text-center">(Bca)</div>
          </div>
        </div>

        <div
          key={5}
          className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max xl:w-[400px] xl:h-[360px]"
        >
          <img
            className="w-full h-[40%] rounded-t-lg xl:h-[500px]"
            src="public/Pr-Praveen.jpeg"
            alt="profile"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
            <div className="text-xl font-extrabold my-2 text-center ">
              Pr. Praveen
            </div>
            <div className="text-lg font-extrabold mb-2 text-center">(bca)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgFaculty;
