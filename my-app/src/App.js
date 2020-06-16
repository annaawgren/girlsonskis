import React from "react";
import { useState } from "react";
import skier from "./images/skier.svg";
import logo from "./images/logo.svg";
import logoWhite from "./images/logo-c.svg";

import { AboutText } from "./about";
import { Imgs } from "./imgs";
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
      </header>
      <section className="main-section">
        <p>
          YES! VI ÅKER RULLSKIDOR PÅ <br />
          NYLAGD ASFALT I NATURSKÖNA ORHEM.
        </p>
        <div className="spacing" />
        <p>SÖNDAGAR KL 9.00.</p>
        <p>
          VI SAMLAS{" "}
          <span>
            <a href="https://goo.gl/maps/wveUkTtHc3opYTwV9" target="_blank">
              HÄR
            </a>
          </span>
        </p>
      </section>

      <Imgs />
      <div className="spacing" />

      <footer className="footer">
        <div>instagram</div>
        <div>hello@girlsonskis.se</div>
        <div className="spacing" />
        <img src={logoWhite} className="logo-c" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
