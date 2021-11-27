import React from "react";
import "./App.css";
import { RootRouter } from './routes/RootRouter';
import background from "./assets/background.svg";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <div>
      <img src={background} className="background" />

      <RootRouter />

    </div>
  );
}

export default App;
