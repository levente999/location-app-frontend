import React, { useState } from "react";
import axios from "axios";

const LocationForm = ({ setResult }) => {
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fromAddress || !toAddress) {
      alert("Please enter both addresses.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/location/", {
        from_address: fromAddress,
        to_address: toAddress,
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching location data:", error);
      alert("Failed to fetch location data. Check the addresses and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="location-form">
      <h2>Enter Locations</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter starting location"
          value={fromAddress}
          onChange={(e) => setFromAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter destination"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Calculating..." : "Get Distance"}
        </button>
      </form>
    </div>
  );
};

export default LocationForm;
