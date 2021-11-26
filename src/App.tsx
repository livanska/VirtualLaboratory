import React from "react";
import "./App.css";
import FieldGroup from "./components/shared/FieldGroup";

function App() {
  return (
    <div className="App">
      <FieldGroup
        title="Module"
        fieldProps={{ multiline: true, rows: 5 }}
      />
    </div>
  );
}

export default App;
