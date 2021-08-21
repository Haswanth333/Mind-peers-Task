import React from "react";
import "../App.css";

const Picture = ({ src }) => {
  return (
    <div class="card">
      <img src={src} alt="pics" className="card" />
    </div>
  );
};

export default Picture;
