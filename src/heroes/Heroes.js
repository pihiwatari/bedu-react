import React from "react";

function Heroes({ nombre, identidad, bio, link, imagen }) {
  return (
    <div>
      <img src={imagen} alt="Super Image" />
      <h1> {nombre} </h1>
      <h3> {identidad} </h3>
      <p> {bio} </p>
      <a href={link}> Wiki </a>
    </div>
  );
}

export default Heroes;
