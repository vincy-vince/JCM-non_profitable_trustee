import React from "react";
// import Corousal from "./Corousal";

const Trustee = () => {
  let slides = [
    <div className="xs: flex xs: flex-col xs: justify-center xs: items-center xs: border xs: border-black xs: rounded-lg ">
      <img
        className="xs: w-1/2"
        src="public/dummy-profile.webp"
        alt="profile"
      />
      <div className="xs: bg-blue-100 xs: rounded-b-lg xs: p-2">
        <div className="xs: text-xl xs: font-extrabold xs: mb-5 xs: text-center xs: mt-5">
          Tijo K John
        </div>
        <div className="xs: text-xl xs: font-extrabold xs: mb-5 xs: text-center">
          MSc( Electronics),MTh{" "}
        </div>
        <div className="xs: text-lg xs: font-semibold xs: mb-5 xs: text-center">
          Praise the Lord! May God bless all the ministry work carried out by
          JCM through village ministries and the Bible College. I pray that JCM
          will be a light to many lives in darkness through its ministries,
          bringing all glory to God in the name of Jesus Christ. Amen!
        </div>
      </div>
    </div>,
    <div className="xs: flex xs: flex-col xs: justify-center xs: items-center xs: border xs: border-black xs: rounded-lg ">
      <img className="xs: w-1/2" src="public/dummy-prof2.webp" alt="profile" />
      <div className="xs: bg-blue-100 xs: rounded-b-lg xs: p-2">
        <div className="xs: text-xl xs: font-extrabold xs: mb-5 xs: text-center xs: mt-5">
          Tijo K John
        </div>
        <div className="xs: text-xl xs: font-extrabold xs: mb-5 xs: text-center">
          MSc( Electronics),MTh{" "}
        </div>
        <div className="xs: text-lg xs: font-semibold xs: mb-5 xs: text-center">
          Praise the Lord! May God bless all the ministry work carried out by
          JCM through village ministries and the Bible College. I pray that JCM
          will be a light to many lives in darkness through its ministries,
          bringing all glory to God in the name of Jesus Christ. Amen!
        </div>
      </div>
    </div>,
  ];
  return (
    <div>
      {/* <Corousal slides={slides} /> */}
      <h1 className="xs: text-2xl xs: font-extrabold  xs: text-center xs: mb-10">
        Our Trustees
      </h1>
      <div className="xs: flex xs: flex-col xs: gap-10 xs: mx-10 xs: sm:flex-col">
        <div className="xs: flex xs: flex-col xs: justify-center xs: items-center xs: border xs: border-black xs: rounded-lg ">
          <img
            className="xs: w-1/2"
            src="public/dummy-profile.webp"
            alt="profile"
          />
          <div className="xs: bg-blue-100 xs: rounded-b-lg xs: p-2">
            <div className="xs: text-xl xs: font-extrabold xs: mb-5 xs: text-center xs: mt-5">
              Tijo K John
            </div>
            <div className="xs: text-xl xs: font-extrabold xs: mb-5 xs: text-center">
              MSc( Electronics),MTh{" "}
            </div>
            <div className="xs: text-lg xs: font-semibold xs: mb-5 xs: text-center">
              Praise the Lord! May God bless all the ministry work carried out
              by JCM through village ministries and the Bible College. I pray
              that JCM will be a light to many lives in darkness through its
              ministries, bringing all glory to God in the name of Jesus Christ.
              Amen!
            </div>
          </div>
        </div>

        <div className="xs: flex xs: flex-col xs: justify-center xs: items-center xs: border xs: border-black xs: rounded-lg ">
          <img
            className="xs: w-1/2"
            src="public/dummy-profile.webp"
            alt="profile"
          />
          <div className="xs: bg-blue-100 xs: rounded-b-lg xs: p-2">
            <div className="xs: text-xl xs: font-extrabold xs: mb-5 xs: text-center xs: mt-5">
              Tijo K John
            </div>
            <div className="xs: text-xl xs: font-extrabold xs: mb-5 xs: text-center">
              MSc( Electronics),MTh{" "}
            </div>
            <div className="xs: text-lg xs: font-semibold xs: mb-5 xs: text-center">
              Praise the Lord! May God bless all the ministry work carried out
              by JCM through village ministries and the Bible College. I pray
              that JCM will be a light to many lives in darkness through its
              ministries, bringing all glory to God in the name of Jesus Christ.
              Amen!
            </div>
          </div>
        </div>

        <div className="xs: flex xs: flex-col xs: justify-center xs: items-center xs: border xs: border-black xs: rounded-lg ">
          <img
            className="xs: w-1/2"
            src="public/dummy-profile.webp"
            alt="profile"
          />
          <div className="xs: bg-blue-100 xs: rounded-b-lg xs: p-2">
            <div className="xs: text-xl xs: font-extrabold xs: mb-5 xs: text-center xs: mt-5">
              Tijo K John
            </div>
            <div className="xs: text-xl xs: font-extrabold xs: mb-5 xs: text-center">
              MSc( Electronics),MTh{" "}
            </div>
            <div className="xs: text-lg xs: font-semibold xs: mb-5 xs: text-center">
              Praise the Lord! May God bless all the ministry work carried out
              by JCM through village ministries and the Bible College. I pray
              that JCM will be a light to many lives in darkness through its
              ministries, bringing all glory to God in the name of Jesus Christ.
              Amen!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trustee;
