import React from "react";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <>
      <div className="head">
        <h1 className="title">SEARCH PHOTOS</h1>
        <SearchBox />
      </div>
    </>
  );
};

export default Header;
