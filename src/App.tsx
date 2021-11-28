import React from "react";
import "./App.css";
import { RootRouter } from './routes/RootRouter';
import background from "./assets/background.svg";

/** Should be received by api call
*/
localStorage.setItem('user',"Student")

function App() {
  return (
    <div>
      <img src={background} className="background" />
      <RootRouter />

    </div>
  );
}

export default App;
