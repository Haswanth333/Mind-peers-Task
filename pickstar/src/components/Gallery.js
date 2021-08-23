import React, { useEffect, useState } from "react";
// import Modal from "react-modal";
// import Image from "./Image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getSearchedImages, getTrendingImages } from "../API/api";
// import Masonry from "react-masonry-component";

// const modalStyle = {
//   content: {
//     border: "none",
//     padding: "none",
//     overflow: "none",
//     // background: "none",
//   },
// };
const Gallery = ({ query }) => {
  const [imgList, setImgList] = useState([]);
  const [currentImg, setCurrentImg] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const data = getTrendingImages(page).then((data) => {
      let pictures = data.map((pic) => {
        var srcPath =
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
      setImgList(pictures);
      console.log(imgList);
    });
  }, [page]);

  useEffect(async () => {
    if (query.trim() === "") {
      return;
    }
    const data = await getSearchedImages(query).then((data) => {
      let pictures = data.map((pic) => {
        var srcPath =
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
      setImgList(pictures);
    });

    // console.log(data);
  }, [query]);

  // Modal.setAppElement("#app");
  return (
    <>
      <ResponsiveMasonry>
        <Masonry>
          {imgList.map((iurl) => {
            return <img src={iurl} key={iurl.id} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default Gallery;
