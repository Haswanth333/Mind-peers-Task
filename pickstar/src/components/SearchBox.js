import React, { Component } from "react";
import "../App.css";

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      onSearch: true,
    };
  }

  render() {
    return (
      <div>
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
    );
  }
}

export default SearchBox;
