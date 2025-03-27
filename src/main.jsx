import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// HOME WORK:

// everything should be exactly like the gn design

// trustee-hover
// location width decrease as per the design
// youtube onclick

// import React from "react";
// import { FacultyInfo } from "../js/facultiesInfo";
// const LgFaculty = () => {
//   const Faculty = FacultyInfo.map((info) => {
//     return info;
//   });
//   function faculty() {
//     let facul
//     for (let i = 0; i < Faculty.length - 1; i++) {
//        facul = Faculty[i];
//       console.log(facul);
//     }
//     return (
//       <div
//         key={facul.id}
//         className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max"
//       >
//         <img
//           className="w-full h-[40%] rounded-t-lg"
//           src={facul.img}
//           alt="profile"
//         />
//         <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
//           <div className="text-xl font-extrabold mb-5 text-center mt-5">
//             {facul.name}
//           </div>
//           <div className="text-lg font-extrabold mb-5 text-center">
//             {facul.educationalStatus}{" "}
//           </div>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="flex flex-row gap-6 mt-15 mx-10">
//       {faculty()}
//       {/* <div
//         key={faculty().id}
//         className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max"
//       >
//         <img
//           className="w-full h-[40%] rounded-t-lg"
//           src={faculty().img}
//           alt="profile"
//         />
//         <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
//           <div className="text-xl font-extrabold mb-5 text-center mt-5">
//             {faculty().name}
//           </div>
//           <div className="text-lg font-extrabold mb-5 text-center">
//             {faculty().educationalStatus}{" "}
//           </div>
//         </div>
//       </div> */}

//       {/* <div
//         key={2}
//         className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max"
//       >
//         <img
//           className="w-full h-[40%] rounded-t-lg"
//           src="public/dummy-prof2.webp"
//           alt="profile"
//         />
//         <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
//           <div className="text-xl font-extrabold mb-5 text-center mt-5">
//             Tijo K John
//           </div>
//           <div className="text-lg font-extrabold mb-5 text-center">
//             MSc( Electronics),MTh{" "}
//           </div>
//         </div>
//       </div>

//       <div
//         key={3}
//         className="relative flex flex-col justify-center items-center border border-black rounded-lg mx-auto w-[50%] h-max"
//       >
//         <img
//           className="w-full h-[40%] rounded-t-lg"
//           src="public/boy2.png"
//           alt="profile"
//         />
//         <div className="absolute bottom-2 left-2 right-2 bg-white rounded-lg">
//           <div className="text-xl font-extrabold mb-5 text-center mt-5">
//             Tijo K John
//           </div>
//           <div className="text-lg font-extrabold mb-5 text-center">
//             MSc( Electronics),MTh{" "}
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default LgFaculty;
