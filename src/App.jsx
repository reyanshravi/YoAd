import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel";
import Hero from "./Components/Hero";
import HeroCardLeft from "./Components/HeroCardLeft";
import HeroCardRight from "./Components/HeroCardRight";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Hero />
      <HeroCardLeft />
      <HeroCardRight />
      <Footer />
    </>
  );
}

export default App;
