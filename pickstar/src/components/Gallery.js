// import React, { useEffect } from "react";
import React, { Component } from "react";
import Picture from "./Picture";
import { getRecentPictures } from "../API/api";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import Masonry from "react-masonry-component";

// const Gallery = () => {
// useEffect(() => {
//   getRecentPictures().then((data) => {
//     console.log(data);
//     let image = data.photos.photo.map((pic) => {
//       var srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_q.jpg`;
//     })
//   });
// }, []);
//   return (
//     <div>
//       <Picture src="https://picsum.photos/id/237/400/400" />
//     </div>
//   );
// };

// export default Gallery;

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    };
  }

  componentDidMount() {
    getRecentPictures().then(
      function (j) {
        // alert(JSON.stringify(j));
        let picArray = j.photos.photo.map((pic) => {
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
          return (
            <Picture
              alt="response.im"
              // className="pic"
              src={srcPath}
              key={pic.id}
            />
          );
        });
        this.setState({ pictures: picArray });
      }.bind(this)
    );
  }
  render() {
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>{this.state.pictures}</Masonry>
      </ResponsiveMasonry>
    );
  }
}

export default Gallery;
