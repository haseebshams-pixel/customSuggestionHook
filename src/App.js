import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useSuggestions from "./useSuggestions";
import React, { useEffect } from "react";

const suggestions = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Grapes",
  "WaterMelon",
  "Melon",
  "Apricot",
  "Olive",
  "Peach",
  "Pineapple",
  "Strawberries",
];

function App() {
  const [
    userInput,
    activeSuggestionIndex,
    filteredSuggestions,
    showSuggestions,
    onChange,
    onSelect,
    onKeyPress,
    onClick,
    onMouseEnter,
    onBlur,
  ] = useSuggestions((value) => suggestions);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Suggestion Input</h1>
      <h4>Search Fruits</h4>
      <input
        onChange={onChange}
        value={userInput}
        onKeyDown={onKeyPress}
        onBlur={onBlur}
        onClick={() => onClick(userInput)}
        className="w-50"
        placeholder="Search..."
      />
      {showSuggestions && (
        <div className="d-flex flex-column items-container w-50">
          {filteredSuggestions.map((item, index) => {
            return (
              <span
                key={index}
                onClick={() => {
                  onSelect(index);
                }}
                onMouseEnter={() => {
                  onMouseEnter(index);
                }}
                className={`${
                  activeSuggestionIndex - 1 === index ? "active" : ""
                } single-item w-100 d-flex justify-content-center align-items-center `}
              >
                {item}
              </span>
            );
          })}
          {filteredSuggestions.length == 0 && (
            <span
              className={`single-item w-100 d-flex justify-content-center align-items-center `}
            >
              Not Found!
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
