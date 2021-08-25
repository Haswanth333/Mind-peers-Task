import React, { useState } from "react";
import Gallery from "./components/Gallery";
import SearchBox from "./components/SearchBox";
import "./App.css";

// dividing the total app with 2 components Search and Gallery
const App = () => {
  const [input, setInput] = useState("", () => {
    const localData = localStorage.getItem("key");
    return localData ? JSON.parse(localData) : "";
  });
  return (
    <div className="App">
      <div className="head">
        <h1 className="title">SEARCH PHOTOS</h1>

        {/* Input changes received from searchbox  */}
        <SearchBox input={input} setInput={setInput} />
      </div>

      {/* passing the input changes as query to api with in the gallery */}

      <Gallery query={input} />
    </div>
  );
};

export default App;
