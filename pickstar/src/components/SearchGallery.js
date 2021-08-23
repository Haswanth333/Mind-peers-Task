import React, { useEffect, useState } from "react";
// import React, { Component } from "react";
import Picture from "./Picture";
import {
  getinfiniteScroll,
  getSearch,
  getRecentPictures,
  getSearchedPictures,
} from "../API/api";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const SearchGallery = (query) => {
  const [imglist, setImglist] = useState([]);
  useEffect(async () => {
    const data = await getSearch(query).then((data) => {
      console.log(data);
      let picture = data.photos.photo.map((pic) => {
        var srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
        return srcPath;
      });
      // console.log(picture);
      setImglist(picture);
    });
    console.log(imglist);
  }, [query]);
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry className="gallery">
          {imglist.map((img) => {
            return (
              <li className="card">
                <img src={img} alt="pics" key={img} className="pic" />
              </li>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default SearchGallery;
