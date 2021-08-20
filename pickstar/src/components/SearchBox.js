import React, { useState } from "react";
// import "../App.css";

const SearchBox = () => {
  const [picture, setPicture] = useState("");

  return (
    <div>
      <input
        type="text"
        name="Search"
        className="searchbox"
        value={picture}
        placeholder="Search for Pics"
        onChange={(e) => {
          setPicture(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
