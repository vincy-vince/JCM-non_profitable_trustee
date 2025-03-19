import React from "react";
import { Route, Routes } from "react-router-dom";
import JCMpage from "./Pages/JCMpage";
import Donate from "./Pages/Donate";
const App = () => {
  return (
    <div>
    
        <Routes>
          <Route path="/" element={<JCMpage />}>
            <Route path="/donate" element={<Donate.jsx />} />
            {/* <Route path="blogs" element={<Blogs />} /> */}
            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
    
    </div>
  );
};

export default App;
