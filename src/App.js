import React, { useState } from "react";
import LocationForm from "./components/LocationForm";
import ResultDisplay from "./components/ResultDisplay";
import "./App.css";

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="app">
      <h1>Distance Calculator</h1>
      <LocationForm setResult={setResult} />
      <ResultDisplay result={result} />
    </div>
  );
};

export default App;
