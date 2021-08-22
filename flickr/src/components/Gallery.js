import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";

const Gallery = () => {
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=f34f74397cfd5ba3996a727c4490ed73&tags=${search}&per_page=&page=${page}&format=json&nojsoncallback=1`
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
  }, []);
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {pictures.map((pic) => {
          return <img src={pic} />;
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Gallery;
