import React from "react";
import { Route, Routes } from "react-router-dom";
import JCMpage from "./Pages/JCMpage";
import Contact from "./Pages/Contact";
import BibleCollege from "./Pages/Ministries/BibleCollege";
import CBS from "./Pages/Ministries/CBS";
import WomensMinistry from "./Pages/Ministries/WomensMinistry";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import { useEffect } from "react";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<JCMpage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/biblecollege" element={<BibleCollege />} />
      <Route path="/cbs" element={<CBS />} />
      <Route path="/womensministry" element={<WomensMinistry />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/refundpolicy" element={<RefundPolicy />} />
    </Routes>
  );
};

export default App;
