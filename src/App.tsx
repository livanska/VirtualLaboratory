import React from "react";
import "./App.css";
import SignIn from "./components/sign-in";
import background from "./assets/background.svg";

function App() {
  return (
    <div>
      <img src={background} className="background" />

      <SignIn />
    </div>
  );
}

export default App;
