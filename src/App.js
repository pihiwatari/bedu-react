import React from "react";
// import Component from "./components/Component";
import FilaFoco from "./ejemplo/FilaFoco";
import FocoMercurial from "./ejemplo/FocoMercurial";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <h1>I am the Main App component.</h1> */}
      {/* <Component parent="Main App" /> */}
      <div className="techo">
        <FocoMercurial />
        <FilaFoco />
        <FocoMercurial />
      </div>
    </div>
  );
}

export default App;
