import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import DailyPrices from "./components/DailyPrices/DailyPrices";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <DailyPrices />
      <AboutUs />
    </div>
  );
}

export default App;