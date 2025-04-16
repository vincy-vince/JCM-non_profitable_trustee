import React, { useState } from "react";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";
import Location from "../components/Location";
import { HashLink } from "react-router-hash-link";
import gForm from "../../GoogleForm";
const Contact = () => {
  return (
    <div>
      <MenuBar />
      <div
        id="contact"
        className=" bg-[url(public/background-JCM.png)]  h-[400px]  p-10  w-auto  bg-cover  bg-no-repeat  mt-20  mx-auto flex flex-col justify-between md:h-[500px] lg:h-[600px] xl:h-[630px]"
      >
        <div className="flex flex-col gap-3">
          <h1 className=" text-2xl w-[60%] mx-auto font-extrabold text-center lg:text-3xl xl:text-5xl">
            Contact Us
          </h1>

          <button className=" p-1 bg-blue-950 text-white border-none rounded-lg text-lg w-[30%] mx-auto md:hidden lg:hidden">
            <HashLink to={"/#home"}>Donate</HashLink>
          </button>
        </div>
        <div className="bg-white p-2 inline-block rounded-lg w-full md:w-[60%] lg:w-[60%] mx-auto mt-58 shadow-lg md:mt-[380px] lg:mt-[480px] xl:mt-[500px]">
          <input
            className="text-blue-900 w-[60%] active:border-none md:w-[73%] lg:w-[80%] " 
            placeholder="Enter your email"
          ></input>
          <button className="bg-red-800 text-white px-4 ml-4 rounded-md py-2 font-bold md:ml-0 xl:ml-13 shadow-md shadow-red-800">
            Join now
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-around gap- w-[auto] h-[450px] mx-10 mt-15 md:mt-20 lg:text-lg xl:text-xl xl:mx-40">
        <div className="text-md">
          If you have any questions, need more information, or are looking to
          get involved with Judea Christ Ministry, we’d love to hear from you!
          Whether you’re interested in our programs, exploring partnership
          opportunities, or simply want to share a suggestion — we're here to
          help.
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-md ">Feel free to reach out if you:</div>
          <ul className="list-disc ml-5 flex flex-col gap-3">
            <li>
              Want to learn more about our mission, initiatives, and how you can
              support them
            </li>
            <li>
              Need guidance or assistance with the Bible College admission
              process
            </li>
            <li>
              Are interested in volunteering or collaborating on one of our
              projects
            </li>
            <li>
              Require help with a donation or have questions about your
              contribution
            </li>
            <li>
              Would like more details about our upcoming events, campaigns, or
              sponsorship opportunities
            </li>
            <li>
              Have any other questions, suggestions, or feedback you'd like to
              share
            </li>
          </ul>
        </div>
        <div className="text-md">
          Simply fill out the form below, and a member of our team will get back
          to you as soon as possible. Thank you for your interest in Judea
          Christ Ministry — your support helps us grow and continue making a
          meaningful difference!
        </div>
      </div>
      <div className="relative mt-88 md:mt-16 border-indigo-200 border-2 bg-indigo-100 h-[max] mx-10 lg:pb-13 xl:pb-13 md:mx-10 lg:mx-10 xl:mx-40 rounded-lg px-5 pb-5">
        <div className="text-center">
          <button className="font-bold text-xl bg-white p-1 rounded-b-2xl border-indigo-200 shadow-md shadow-indigo-200 border-b-2 px-2">
            Contact Us
          </button>
        </div>
        <div className=" flex flex-col w-auto justify-around items-center mt-10 gap-5 pb-10 md:flex-row lg:flex-row md:mx-4 lg:mx-4">
          <div className="absolute w-[50px]  bg-white h-[50px] rounded-full right-[-7%] top-7 md:right-[-3%] md:top-4 xl:right-[-1%]"></div>
          <div className="flex flex-row items-center gap-3 font-bold bg-white p-1 pt-2 rounded-xl w-2/2 h-[60px] shadow-lg shadow-indigo-300/50 border-l-2 border-b-2 border-transparent hover:border-l-2 hover:border-b-2 hover:border-blue-700 transition-all">
            <div>
              <svg
                className="text-sm w-[20px]"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3217 15.3313L16.1691 13.0224L16.1548 13.0159C15.8873 12.9015 15.5955 12.8555 15.3058 12.8823C15.0161 12.909 14.7377 13.0076 14.4956 13.169C14.4671 13.1878 14.4397 13.2083 14.4136 13.2302L11.7514 15.4998C10.0648 14.6806 8.3236 12.9524 7.50438 11.2877L9.77719 8.58509C9.79906 8.55775 9.81985 8.5304 9.83953 8.50087C9.9975 8.25948 10.0933 7.98279 10.1185 7.69541C10.1437 7.40802 10.0975 7.11887 9.98391 6.85368V6.84056L7.66844 1.67915C7.51831 1.33272 7.26017 1.04414 6.93255 0.856477C6.60493 0.668815 6.2254 0.592142 5.85063 0.637904C4.36856 0.832927 3.00817 1.56078 2.02352 2.68551C1.03888 3.81024 0.497323 5.25494 0.500002 6.74978C0.500002 15.4342 7.56563 22.4998 16.25 22.4998C17.7448 22.5025 19.1895 21.9609 20.3143 20.9763C21.439 19.9916 22.1669 18.6312 22.3619 17.1492C22.4077 16.7745 22.3312 16.3951 22.1438 16.0675C21.9563 15.7399 21.6679 15.4816 21.3217 15.3313ZM16.25 20.7498C12.5382 20.7457 8.97961 19.2694 6.35498 16.6448C3.73035 14.0202 2.25406 10.4616 2.25 6.74978C2.24589 5.68172 2.63068 4.64868 3.33253 3.84358C4.03437 3.03849 5.00527 2.51638 6.06391 2.37478C6.06348 2.37914 6.06348 2.38354 6.06391 2.3879L8.36078 7.52853L6.1 10.2345C6.07706 10.2609 6.05621 10.289 6.03766 10.3187C5.87306 10.5713 5.77651 10.8621 5.75735 11.1629C5.73818 11.4638 5.79706 11.7645 5.92828 12.0359C6.91922 14.0626 8.96125 16.0893 11.0098 17.0792C11.2832 17.2091 11.5857 17.266 11.8876 17.2441C12.1896 17.2223 12.4807 17.1225 12.7325 16.9545C12.7606 16.9355 12.7876 16.9151 12.8134 16.8932L15.4723 14.6248L20.613 16.9271C20.613 16.9271 20.6217 16.9271 20.625 16.9271C20.4851 17.9873 19.9638 18.9601 19.1586 19.6637C18.3533 20.3673 17.3193 20.7534 16.25 20.7498Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="text-sm">+91 8148833190</div>
          </div>
          <div className="flex flex-row items-center gap-3 font-bold bg-white p-1 pt-2 rounded-xl w-2/2 h-[60px] shadow-lg shadow-indigo-300/50 border-l-2 border-b-2 border-transparent hover:border-l-2 hover:border-b-2 hover:border-blue-700 transition-all">
            <div>
              <svg
                className="text-sm w-[20px] "
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.625 4.375H4.375C3.91087 4.375 3.46575 4.55937 3.13756 4.88756C2.80937 5.21575 2.625 5.66087 2.625 6.125V21.875C2.625 22.3391 2.80937 22.7842 3.13756 23.1124C3.46575 23.4406 3.91087 23.625 4.375 23.625H23.625C24.0891 23.625 24.5342 23.4406 24.8624 23.1124C25.1906 22.7842 25.375 22.3391 25.375 21.875V6.125C25.375 5.66087 25.1906 5.21575 24.8624 4.88756C24.5342 4.55937 24.0891 4.375 23.625 4.375ZM23.625 6.125V9.625H4.375V6.125H23.625ZM23.625 21.875H4.375V11.375H23.625V21.875Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="text-sm "> judeachristministry@gmail.com</div>
          </div>
          <div className="flex flex-row items-center gap-3 font-bold bg-white p-1 pt-2 rounded-xl w-2/2  h-[max] shadow-lg shadow-indigo-300/50 border-l-2 border-b-2 border-transparent hover:border-l-2 hover:border-b-2 hover:border-blue-700 transition-all ">
            <svg
              className="text-sm w-[80px] lg:w-[50px] xl:w-[25px] xl:my-3"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 7C13.1347 7 12.2888 7.25659 11.5694 7.73732C10.8499 8.21805 10.2892 8.90133 9.95803 9.70076C9.62689 10.5002 9.54025 11.3799 9.70906 12.2285C9.87787 13.0772 10.2946 13.8567 10.9064 14.4686C11.5183 15.0804 12.2978 15.4971 13.1465 15.6659C13.9951 15.8347 14.8748 15.7481 15.6742 15.417C16.4737 15.0858 17.1569 14.5251 17.6377 13.8056C18.1184 13.0862 18.375 12.2403 18.375 11.375C18.375 10.2147 17.9141 9.10188 17.0936 8.28141C16.2731 7.46094 15.1603 7 14 7ZM14 14C13.4808 14 12.9733 13.846 12.5416 13.5576C12.1099 13.2692 11.7735 12.8592 11.5748 12.3795C11.3761 11.8999 11.3242 11.3721 11.4254 10.8629C11.5267 10.3537 11.7767 9.88596 12.1438 9.51885C12.511 9.15173 12.9787 8.90173 13.4879 8.80044C13.9971 8.69915 14.5249 8.75114 15.0045 8.94982C15.4842 9.1485 15.8942 9.48495 16.1826 9.91663C16.471 10.3483 16.625 10.8558 16.625 11.375C16.625 12.0712 16.3484 12.7389 15.8562 13.2312C15.3639 13.7234 14.6962 14 14 14ZM14 1.75C11.4482 1.75289 9.0017 2.76788 7.19729 4.57229C5.39288 6.37671 4.37789 8.82318 4.375 11.375C4.375 14.8094 5.96203 18.4494 8.96875 21.9023C10.3198 23.4627 11.8403 24.8677 13.5023 26.0914C13.6495 26.1945 13.8247 26.2498 14.0044 26.2498C14.184 26.2498 14.3593 26.1945 14.5064 26.0914C16.1654 24.8672 17.683 23.4622 19.0312 21.9023C22.0336 18.4494 23.625 14.8094 23.625 11.375C23.6221 8.82318 22.6071 6.37671 20.8027 4.57229C18.9983 2.76788 16.5518 1.75289 14 1.75ZM14 24.2813C12.192 22.8594 6.125 17.6367 6.125 11.375C6.125 9.28642 6.95468 7.28338 8.43153 5.80653C9.90838 4.32969 11.9114 3.5 14 3.5C16.0886 3.5 18.0916 4.32969 19.5685 5.80653C21.0453 7.28338 21.875 9.28642 21.875 11.375C21.875 17.6345 15.808 22.8594 14 24.2813Z"
                fill="black"
              />
            </svg>
            <div className="text-justify text-sm">
              No. 505/B1A, 1st Floor, Mappedu Village, Thiruvallur,
              Tamilnadu-631 402
            </div>
          </div>
          <div className="absolute w-[50px]  bg-white h-[50px] rounded-full left-[-5%] bottom-3 md:left-[-3%] md:bottom-6 xl:left-[-1%]"></div>
        </div>
      </div>

      <div id="your_contact">
        <div className="text-center mt-15 mb-6 font-bold text-md md:text-lg lg:text-xl xl:text-2xl">
          Your Contact
        </div>

        <iframe
          className="w-[320px] h-[1600px] mx-auto md:w-[640px] md:mx-auto lg:h-[1400px]"
          src={gForm[0]}
          width="640"
          height="1400"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>

      <Location />
      <Footer />
    </div>
  );
};

export default Contact;
