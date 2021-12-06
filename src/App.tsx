import React from "react";
import "./App.css";
import background from "./assets/background.svg";
import UmlModelling from "./pages/uml-modelling";

function App() {
  return (
    <div className="app">
      <UmlModelling />

      <img src={background} alt="background" className="background" />
    </div>
  );
}

export default App;
