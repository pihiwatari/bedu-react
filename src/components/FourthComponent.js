import React from "react";
// Function | Stateless component

function FourthComponent(props) {
  return (
    <div>
      <p>
        I am the fourth component. My parent is <strong>{props.parent}</strong>
      </p>
    </div>
  );
}

export default FourthComponent;
