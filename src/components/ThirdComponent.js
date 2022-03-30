import React from "react";
import FourthComponent from "./FourthComponent";

function ThirdComponent(props) {
  return (
    <div>
      <p>
        I am the third component. My parent is <strong>{props.parent}</strong>
      </p>
      <FourthComponent parent="Third Component" />
    </div>
  );
}

export default ThirdComponent;
