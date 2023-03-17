import React from "react";

import "../css/AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <div className="about-container">
        <div className="text-container">
          <p>
            En este proyecto fue construido con el objetivo de mejorar mis
            skills como programador. Las fotografías expuestas en esta
            aplicación son todas de la autoría de Jeffrey S. Rengifo Marin, no
            soy fotógrafo, simplemente me gusta capturar momentos. Invito al
            lector a visitar{" "}
            <a
              href="https://jeffrm.ga"
              target="_blank"
              rel="noopener noreferrer"
            >
              mi portafolio
            </a>{" "}
            como programador.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
