import { useEffect, useState } from "react";
import axios from "axios";

export default function useInfinteScroll(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=f34f74397cfd5ba3996a727c4490ed73&tags=&per_page=&format=json&nojsoncallback=1",
      params: { query: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log(res.data);
        let picture = res.data.photos.photo.map((pic) => {
          var srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
          return srcPath;
        });
        console.log(picture);
        setPictures(pictures);
        console.log(pictures);
        // setPictures((prevPictures) => {
        //   return [
        //     ...new Set([
        //       ...prevPictures,
        //       res.data.photos.photo.map((pic) => {
        //         var url = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
        //         return url;
        //       }),
        //     ]),
        //   ];
        // });
        setHasMore(res.data.photos.photo.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, pictures, hasMore };
}
