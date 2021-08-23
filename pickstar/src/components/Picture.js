import React from "react";
import "../App.css";

const Picture = ({ src, index, handleClick }) => {
  return (
    // displaying fetched images in list
    <li className="card" key={index} onClick={() => handleClick(src)}>
      {/* passing url as src */}
      <img src={src} alt="pics" className="pic" />
    </li>
  );
};

export default Picture;
