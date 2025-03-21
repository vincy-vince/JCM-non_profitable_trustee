import React from "react";
import { Route, Routes } from "react-router-dom";
import JCMpage from "./Pages/JCMpage";
import Donate from "./Pages/Donate";
import Contact from "./Pages/Contact";
import BibleCollege from "./Pages/Ministries/BibleCollege";
import CBS from "./Pages/Ministries/CBS";
import WomensMinistry from "./Pages/Ministries/WomensMinistry";
import Resources from "./Pages/Resources";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<JCMpage />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/biblecollege" element={<BibleCollege />} />
      <Route path="/cbs" element={<CBS />} />
      <Route path="/womensministry" element={<WomensMinistry />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  );
};

export default App;
