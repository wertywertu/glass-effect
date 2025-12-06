import React from "react";
import "./App.scss";
import Img1 from "./assets/Vector.svg";
import Img2 from "./assets/Logo.svg";

function App() {
  return (
    <div className="app">
      <div className="background-text">
        <p>
          TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST 
          TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST  
        </p>
      </div>

      <div className="logo-block">
        <img src={Img1} alt="img" className="logo-svg" />
        <img src={Img2} alt="img" className="logo-svg" />
      </div>
    </div>
  );
}

export default App;
