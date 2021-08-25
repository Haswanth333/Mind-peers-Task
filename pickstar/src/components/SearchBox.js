import React, { useState, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import "./../App.css";

// passing props to app to hange input
const SearchBox = ({ input, setInput }) => {
  const [query, setQuery] = useState({});
  const [recentS, setRecentS] = useState({});
  const recentSearch = { input, setInput };
  useEffect(() => {
    setQuery(input);
    console.log(query);
    localStorage.setItem("key", JSON.stringify(recentSearch));
    // setRecentS(recentSea);
  }, [input]);

  return (
    // Debounce to delay input
    <DebounceInput
      type="text"
      name="Photo Search"
      placeholder="Search photos "
      className="searchbox"
      // setinng minimum input length with 2
      minLength={2}
      // seting debounce time to 0.1sec
      debounceTimeout={100}
      value={input}
      // onchnage event to set input value
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default SearchBox;
