import React from "react";
import Foco from "./ejemplo/Foco";
import FocoMercurial from "./ejemplo/FocoMercurial";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="techo">
        <FocoMercurial />
        <div className="fila-focos">
          <Foco />
          <Foco />
        </div>
        <FocoMercurial />
        <FocoMercurial />
      </div>
    </div>
  );
}

export default App;
