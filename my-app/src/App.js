import React from "react";
import { useState } from "react";
import skier from "./images/skier.svg";
import logo from "./images/logo.svg";

import { AboutText } from "./about";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setVisible(!visible)} className="om-button">
        OM
      </button>
      <AboutText visible={visible} />
      <header className="App-header">
        <img src={skier} className="skier" alt="skier" />
        <img src={logo} className="logo" alt="logo" />
        <section>
          <p>YES! VI ÅKER RULLSKIDOR PÅ NYLAGD ASFALT I NATURSKÖNA ORHEM.</p>
          <div className="spacing" />
          <p>SÖNDAGAR KL 9.00.</p>
          <p>
            VI SAMLAS{" "}
            <span>
              <a href="https://goo.gl/maps/wveUkTtHc3opYTwV9" target="_blank">
                HÄR
              </a>
            </span>
            .
          </p>
        </section>
      </header>
    </div>
  );
}

export default App;
