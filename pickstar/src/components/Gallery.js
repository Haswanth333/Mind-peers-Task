import React, { useEffect, useState } from "react";
// import React, { Component } from "react";
import Picture from "./Picture";
import { getinfiniteScroll, getRecentPictures } from "../API/api";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import Masonry from "react-masonry-component";

const Gallery = () => {
  const [imglist, setImglist] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    getRecentPictures(a, data).then((data) => {
      console.log(data);
      // let page = data.photos.page;
      let picture = data.photos.photo.map((pic) => {
        var srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
        return srcPath;
      });
      // console.log(picture);
      setImglist(picture);
      console.log(imglist);
    });
  }, []);
  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      let page = page++;
      getRecentPictures(page);
    }
  };

  // useEffect(() => {
  //   getRecentPictures()
  //     .then((data) => {})
  //     .then((res) => res.json)
  //     .then();
  // });
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry className="gallery">
        {imglist.map((img) => {
          return (
            <li className="card">
              <img src={img} alt="pics" key="img.id" className="pic" />
            </li>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Gallery;
// let image = data.photos.photo.map((pic) => {
//   var srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_q.jpg`;
//   return srcPath;
// });

// class Gallery extends Component {
//   constructor() {
//     super();
//     this.state = {
//       pictures: [],
//     };
//   }

//   componentDidMount() {
//     getRecentPictures().then(
//       function (j) {
//         // alert(JSON.stringify(j));
//         let picArray = j.photos.photo.map((pic) => {
//           var srcPath =
//             "https://farm" +
//             pic.farm +
//             ".staticflickr.com/" +
//             pic.server +
//             "/" +
//             pic.id +
//             "_" +
//             pic.secret +
//             ".jpg";
//           return (
//             <Picture
//               alt="response.im"
//               className="pic"
//               src={srcPath}
//               key={pic.id}
//             />
//           );
//         });
//         this.setState({ pictures: picArray });
//       }.bind(this)
//     );
//   }
//   render() {
//     return (
//       <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
//         <Masonry className="gallery">{this.state.pictures}</Masonry>
//       </ResponsiveMasonry>
//     );
//   }
// }

// export default Gallery;
