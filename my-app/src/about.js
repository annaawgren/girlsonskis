import React from "react";

import "./about.css";

export const AboutText = function (props) {
  return (
    <div className={"about-txt " + (props.visible ? "visible " : "")}>
      {/* <p className="pm ">
        Det monotona klickandet av stavarna mot asfalten. Fåglar som kvittrar.
        Solen som värmer. Det oändliga glidet. Inte en tanke på att det är
        jobbigt. Vilan i nerförsbacken, fartvinden svalkar...
      </p> */}
      <p className="pm ">
        Girls on Skis är ett intitiativ grundat 2020 för dig som ❤️ längd – och
        vill åka rullskidor när det inte finns snö. Vi åker för att det är
        härligt. Och sjukt bra träning. Vill du åka med oss?
        <a>Anmäl dig här!</a>
      </p>
      <p className="pm ">
        Alla nivåer är välkomna. All åkning sker på egen risk.
      </p>
    </div>
  );
};
