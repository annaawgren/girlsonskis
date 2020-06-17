import React from "react";

import "./about.css";

export const AboutText = function (props) {
  return (
    <div className={"about-txt " + (props.visible ? "visible " : "")}>
      <p className="pm">
        Girls on Skis är för dig som &#60;3 längd – och vill åka rullskidor när
        det inte finns snö. Vi åker för att det är härligt. Och sjukt bra
        träning. Vill du åka med oss? <a>Anmäl dig här!</a>
      </p>
      <div className="spacing" />
      <p className="pm ">
        Alla nivåer är välkomna. All åkning sker på egen risk.
      </p>
    </div>
  );
};
