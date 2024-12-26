import React, { useState } from "react";

const NumberSuggestion = () => {
  const [number, setNumber] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    setNumber(input);

    if (input !== "") {
      const num = parseInt(input, 10);
      if (!isNaN(num)) {
        if (num < 0) {
          setErrorMessage("Enter a positive value");
          setSuggestions([]);
        } else {
          setErrorMessage(""); 
          const suggestionList = [];

          if (num % 2 === 0) {
            for (let i = 1; i <= 3; i++) {
              suggestionList.push(num + 2 * i);
            }
          } else {
            for (let i = 1; i <= 3; i++) {
              suggestionList.push(num + 2 * i);
            }
          }

          setSuggestions(suggestionList);
        }
      } else {
        setErrorMessage(""); 
        setSuggestions([]);
      }
    } else {
      setErrorMessage(""); 
      setSuggestions([]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Enter a Number:</h2>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        placeholder="Enter a positive number"
        style={{ padding: "10px", fontSize: "16px", width: "200px" }}
      />
      {errorMessage && (
        <div style={{ color: "red", marginTop: "10px" }}>
          {errorMessage}
        </div>
      )}
      {suggestions.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Suggestions:</h3>
          <div>
            {suggestions.map((suggestion, index) => (
              <span key={index} style={{ marginRight: "10px", fontSize: "16px" }}>
                {suggestion}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NumberSuggestion;
