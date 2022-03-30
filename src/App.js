import React from "react";
// import Component from "./components/Component";
import Foco from "./ejemplo/Foco";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>I am the Main App component.</h1>
      {/* <Component parent="Main App" /> */}
      <div className="techo">
        <Foco></Foco>
        <Foco></Foco>
      </div>
    </div>
  );
}

export default App;
