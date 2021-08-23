import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import axios from "axios"

const PAGE_NUMBER = 1;
const Gallery = () => {
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [searchValue, setSearchValue] = useState("");
  const [method, setMethod] = useState("flickr.photos.getRecent");
  //   const [onSearch, setOnSearch] = true;

  useEffect(() => {
    fetch(
      `https://api.flickr.com/services/rest/?method=${method}&api_key=f34f74397cfd5ba3996a727c4490ed73&tags=${searchValue}&page=${page}&per_page=60&format=json&nojsoncallback=1`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        let urlArr = res.photos.photo.map((pic) => {
          let srcPath =
            "https://farm" +
            pic.farm +
            ".staticflickr.com/" +
            pic.server +
            "/" +
            pic.id +
            "_" +
            pic.secret +
            ".jpg";
          return srcPath;
        });
        console.log(urlArr);
        setPictures(urlArr);
        console.log(pictures);
      });
  }, [page, searchValue, method]);

  const scrolltoEnd = () => {
    setTimeout(setPage(page + 1), 5000);
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrolltoEnd();
    }
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
    setMethod("flickr.photos.search");
    console.log(method);
  };

  return (
    <>
      <div className="head">
        <h1 className="title">SEARCH PHOTOS</h1>
        {/* <SearchBox /> */}
        <input
          type="text"
          name="Search"
          className="searchbox"
          value={searchValue}
          placeholder="Search for Pics"
          onChange={handleSearch}
        />
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry className="gallery">
          {pictures.map((pic) => {
            return (
              <div className="card">
                <img src={pic} className="pic" />
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default Gallery;
