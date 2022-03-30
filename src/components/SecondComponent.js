import React from "react";
import ThirdComponent from "./ThirdComponent";

function SecondComponent(props) {
  return (
    <div>
      <p>
        I am the second component. My parent is <strong>{props.parent}</strong>
      </p>
      <ThirdComponent parent="Second Component" />
    </div>
  );
}

export default SecondComponent;
