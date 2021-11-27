import React from "react";
import "./App.css";
import background from "./assets/background.svg";
import ModulesPage from "./pages/modules-page";

function App() {
  return (
    <div>
      <img src={background} className="background" />

      <ModulesPage />
    </div>
  );
}

export default App;
