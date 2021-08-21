import React, { useEffect } from "react";
import Picture from "./Picture";
import { getRecentPictures } from "../API/api";

const Gallery = () => {
  useEffect(() => {
    getRecentPictures();
  }, []);
  return (
    <div>
      <Picture src="https://picsum.photos/id/237/400/400" />
    </div>
  );
};

export default Gallery;
