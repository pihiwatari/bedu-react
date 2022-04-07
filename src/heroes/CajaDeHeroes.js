import React from "react";
import Heroes from "./Heroes";

function CajaDeHeroes() {
  return (
    <div>
      <Heroes
        nombre="Spiderman"
        identidad="Peter Parker"
        bio="Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter decide pedirle ayuda al Doctor Extraño para recuperar su vida. Pero algo sale mal y provoca una fractura en el multiverso."
        link="https://es.wikipedia.org/wiki/Spider-Man"
        imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Spiderman.JPG/245px-Spiderman.JPG"
      />
      <Heroes
        nombre="Spiderman"
        identidad="Peter Parker"
        bio="Lorem ipsum"
        link="link"
        imagen="image"
      />
      <Heroes
        nombre="Spiderman"
        identidad="Peter Parker"
        bio="Lorem ipsum"
        link="link"
        imagen="image"
      />
    </div>
  );
}

export default CajaDeHeroes;
