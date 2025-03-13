import React from "react";

const ResultDisplay = ({ result }) => {
  if (!result) return null;

  return (
    <div className="result-display">
      <h2>Results</h2>
      <p><strong>From:</strong> {result.from.address}</p>
      <p><strong>To:</strong> {result.to.address}</p>
      <p><strong>Distance:</strong> {result.distance_km} km</p>
    </div>
  );
};

export default ResultDisplay;
