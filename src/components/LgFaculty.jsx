import React from "react";

const LgFaculty = () => {
  return (
    <div className="flex flex-row gap-6 mt-15 mx-10 xl:mx-60">
      <div
        key={1}
        className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max xl:w-[400px]"
      >
        <img
          className="w-full h-[40%] rounded-t-lg xl:h-[500px]"
          src="Mr.Tijo.jpeg"
          alt="profile"
        />
        <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
          <div className="text-xl font-extrabold mb-5 text-center mt-5">
            Tijo K John
          </div>
          <div className="text-lg font-extrabold mb-5 text-center">
            MSc( Electronics),MTh{" "}
          </div>
        </div>
      </div>

      <div
        key={2}
        className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max xl:w-[400px]"
      >
        <img
          className="w-full h-[40%] rounded-t-lg xl:h-[500px]"
          src="dummy-prof2.webp"
          alt="profile"
        />
        <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
          <div className="text-xl font-extrabold mb-5 text-center mt-5">
            Sis. Suma Thomas
          </div>
          <div className="text-lg font-extrabold mb-5 text-center">M.Div</div>
        </div>
      </div>

      <div
        key={3}
        className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max xl:w-[400px]"
      >
        <img
          className="w-full h-[40%] rounded-t-lg xl:h-[500px]"
          src="boy2.png"
          alt="profile"
        />
        <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
          <div className="text-xl font-extrabold mb-5 text-center mt-5">
            Pr. Robbin Devadas
          </div>
          <div className="text-lg font-extrabold mb-5 text-center">Bca</div>
        </div>
      </div>
    </div>
  );
};

export default LgFaculty;
