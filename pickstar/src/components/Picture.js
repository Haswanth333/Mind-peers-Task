import React from "react";
import "../App.css";

const Picture = ({ src }) => {
  return (
    <li className="card">
      <img src={src} alt="pics" className="pic" />
    </li>
  );
};

export default Picture;
