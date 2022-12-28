import { useEffect, useCallback, useRef, useState } from "react";

export default function useSuggestions(suggestionsData) {
  const [userInput, setUserInput] = useState("");
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [suggestions, setSuggestions] = useState(suggestionsData);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const onChange = (e) => {
    let inp = e.target.value;
    const filterArr = suggestions?.filter(
      (i) => i.toLowerCase().indexOf(inp.toLowerCase()) > -1
    );
    console.log("Filter Array", filterArr);
    setFilteredSuggestions(filterArr);
    setShowSuggestions(true);
    setUserInput(inp);
    setActiveSuggestionIndex(0);
  };
  const onSelect = (ind) => {
    let inp = filteredSuggestions[ind];
    setUserInput(inp);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setActiveSuggestionIndex(0);
  };
  const onClick = (val) => {
    const filterArr = suggestions?.filter(
      (i) => i.toLowerCase().indexOf(val.toLowerCase()) > -1
    );
    console.log("Filter Array", filterArr);
    setFilteredSuggestions(filterArr);
    setShowSuggestions(true);
    setActiveSuggestionIndex(0);
  };
  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      //enter
      let inp = filteredSuggestions[activeSuggestionIndex - 1];
      setUserInput(inp);
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      setActiveSuggestionIndex(0);
    } else if (e.keyCode === 38) {
      //up
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (e.keyCode === 40) {
      //down
      if (activeSuggestionIndex === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };
  return [
    userInput,
    activeSuggestionIndex,
    filteredSuggestions,
    showSuggestions,
    onChange,
    onSelect,
    onKeyPress,
    onClick,
  ];
}
