import React, { useState, useEffect } from "react";
import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <h1>Search Pictures</h1>
      <Gallery />
    </div>
  );
}

export default App;
