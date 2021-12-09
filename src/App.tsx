import React from "react";
import "./App.css";
import { RootRouter } from './routes/RootRouter';
import background from "./assets/background.svg";

/** Should be received by api call
*/
function App() {
  return (
      <RootRouter />
  );
}

export default App;
