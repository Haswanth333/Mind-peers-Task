import React from "react";
import Gallery from "./components/Gallery";
import "./App.css";
import SearchBox from "./components/SearchBox";
import { ResponsiveMasonry } from "react-responsive-masonry";

const App = () => {
  return (
    <div>
      <div className="head">
        <h1 className="title">SEARCH PHOTOS</h1>
        {/* <SearchBox /> */}
        <input
          type="text"
          name="Search"
          className="searchbox"
          // value={picture}
          placeholder="Search for Pics"
          // onChange={(e) => {
          //   setPicture(e.target.value);
          // }}
        />
      </div>
      <ResponsiveMasonry></ResponsiveMasonry>
      <Gallery />
    </div>
  );
};

export default App;
