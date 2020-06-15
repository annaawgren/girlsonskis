import React from "react";

import "./about.css";

export const AboutText = function (props) {
  return (
    <div className={"about-txt " + (props.visible ? "visible " : "")}>
      Det monotona klickandet av stavarnas spetsar i asfalten. Fåglarnas
      kvitter. Solen som värmer ryggen och fartvinden som svalkar. Det går lätt.
      Tänker inte på att hela kroppen jobbar och att jag faktiskt flåsar på rätt
      rejält. Vilan i nerförsbacken.
      <p>
        Girls on Skis är ett intitiativ grundat 2020 för dig som ❤️ längd. Vi
        åker för att det är härligt! Och sjukt bra träning. Vill du åka med oss?
        <a>Let us know!</a>
      </p>
      <p>Alla nivåer är välkomna. All åkning sker på egen risk.</p>
    </div>
  );
};
