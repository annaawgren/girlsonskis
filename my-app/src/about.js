import React from "react";

import "./about.css";

export const AboutText = function (props) {
  return (
    <div className={"about-txt " + (props.visible ? "visible " : "")}>
      <div className="column">
        <p>
          Det monotona klickandet av stavarna mot asfalten. Fåglar som kvittrar.
          Solen värmer. Det går lätt. Tänker inte på att hela kroppen jobbar och
          att jag faktiskt flåsar på rätt rejält. Vilan i nerförsbacken,
          fartvinden som svalkar.
        </p>
        <p className="pm">
          Girls on Skis är ett intitiativ grundat 2020 för dig som ❤️ längd. Vi
          åker för att det är härligt! Och sjukt bra träning. Vill du åka med
          oss?
          <a>Let us know!</a>
        </p>
        <p className="pm">
          >Alla nivåer är välkomna. All åkning sker på egen risk.
        </p>
      </div>
    </div>
  );
};
