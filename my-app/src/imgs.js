import React from "react";

import Rullisar from "./images/rullisar.jpg";
import Skog from "./images/skog.jpg";
import Skiss from "./images/skiss.jpg";

import "./imgs.css";

export const Imgs = () => {
  return (
    <div className="img-container">
      <div className="single-img-container">
        <div className="img-box">
          <img src={Rullisar}></img>
        </div>
      </div>
      <div className="single-img-container">
        <div className="img-box">
          <img src={Skog}></img>
        </div>
      </div>
      <div className="single-img-container">
        <div className="img-box">
          <img src={Skiss}></img>
        </div>
      </div>
      <div className="single-img-container">
        <div className="img-box">
          <img src={Rullisar}></img>
        </div>
      </div>
      <div className="single-img-container">
        <div className="img-box">
          <img src={Rullisar}></img>
        </div>
      </div>
      <div className="single-img-container">
        <div className="img-box">
          <img src={Rullisar}></img>
        </div>
      </div>
    </div>
  );
};
