import React from "react";
import "../App.css";

const Picture = ({ src }) => {
  return (
    <div class="card">
      <img src={src} alt="pics" className="pic" />
    </div>
  );
};

export default Picture;
