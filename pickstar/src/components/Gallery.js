import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getSearchedImages, getTrendingImages } from "../API/api";
import Picture from "./Picture";

// styling for modal
const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    marginTop: "5%",
    transform: "translate(-50%, -50%)",
  },
};
const Gallery = ({ query }) => {
  const [imgList, setImgList] = useState([]);
  const [imageModal, setImageModal] = useState(null);
  const [page, setPage] = useState(1);
  const [recent, setRecent] = useState([]);

  // calling recent photos wit use effect
  useEffect(() => {
    const data = getTrendingImages(page)
      // data has few more details other than diect url
      .then((data) => {
        // using map method to arrange the array values in url format
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
        // updating the list of images with the url array
        setImgList(pictures);
        console.log(imgList);
      });
    // page is passed as dependency array to change page value when we scroll to bottom of page
  }, [page]);

  // method for seting page value
  const scrolltoEnd = () => {
    setTimeout(setPage(page + 1), 5000);
  };

  // Window scroll event
  window.onscroll = function () {
    if (
      // when window inner height and scrolling top is equal to offset height then calling scroll method
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrolltoEnd();
    }
  };

  // search method to display searched images
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
      setRecent([query]);
      window.localStorage.setItem("recent", JSON.stringify(recent));
      console.log(query);
      // console.log(data);
      console.log(recent);
    });
  }, [query]);

  Modal.setAppElement("#root");
  return (
    <div>
      <Modal
        style={modalStyle}
        isOpen={!!imageModal}
        onRequestClose={() => setImageModal(null)}
      >
        <img className="imModal" src={imageModal} alt="modal preview" />
      </Modal>

      {imgList.length === 0 ? <h2>No images found</h2> : null}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry className="gallery">
          {/* using map method to set list of element with source fo images */}
          {imgList.map((iurl, index) => {
            return (
              // passing ulr and key to Picture component
              <Picture src={iurl} handleClick={setImageModal} key={index} />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
