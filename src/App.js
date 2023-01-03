import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Landingpage from "./components/Landing-page/Landingpage";
import IntroSection from "./components/Intro-section/IntroSection";
import TourContainer from "./components/Tour/TourContainer";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <React.Fragment>
     <Navbar/>
     <Landingpage/>
     <IntroSection/>
     <TourContainer/>
     <Footer/>
    </React.Fragment>

  );
}

export default App;
