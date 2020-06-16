import React from "react";

import Rullisar from "./images/rullisar.jpg";

import "./imgs.css";

export const Imgs = () => {
  return (
    <div className="img-container">
      <div className="single-img-container">
        <img src={Rullisar}></img>
      </div>
      <div className="single-img-container">
        <img src={Rullisar}></img>
      </div>
      <div className="single-img-container">
        <img src={Rullisar}></img>
      </div>
    </div>
  );
};
