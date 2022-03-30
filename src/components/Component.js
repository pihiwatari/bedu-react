import React from "react";
import SecondComponent from "./SecondComponent";
// Function | Stateless component

function Component(props) {
  return (
    <div>
      <p>
        I am the first component. My parent is <strong>{props.parent}</strong>
      </p>
      <SecondComponent parent="First Component" />
    </div>
  );
}

export default Component;
