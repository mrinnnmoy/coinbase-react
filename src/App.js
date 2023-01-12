import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import DailyPrices from "./components/DailyPrices/DailyPrices";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Roadmap from "./components/Roadmap/Roadmap";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Services from "./components/Services/Services";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <DailyPrices />
      <AboutUs />
      <Services />
      <SignUp />
      <Roadmap />
      {/* 
      <Newsletter />
      <Footer /> */}
    </div>
  );
}

export default App;