import React from "react";
import "./App.css";
import background from "./assets/background.svg";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <div>
      <img src={background} className="background" />

      <SignUp />
    </div>
  );
}

export default App;
