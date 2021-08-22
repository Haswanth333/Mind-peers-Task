const baseURL = "https://api.flickr.com/services/rest/";
const API_KEY = "f34f74397cfd5ba3996a727c4490ed73";
// const API_KEY = process.env.API_KEY;
// console.log(API_KEY);
export const getRecentPictures = async (page, json) => {
  try {
    const res = await fetch(
      `${baseURL}?method=flickr.photos.getRecent&api_key=${API_KEY}&per_page=&page=${page}format=json&nojsoncallback=1`,
      {}
    );
    if (!res.ok) {
      console.log("failed", res.status);
      return;
    }
    const json = await res.json();
    console.log(json);
    // console.log(res.json());
    return json;
  } catch (error) {
    console.log("error");
  }
};

// export const getinfiniteScroll = async (page) => {
//   try {
//     const res = await fetch(
//       `${baseURL}?method=flickr.photos.getRecent&api_key=${API_KEY}&per_page=${page}&format=json&nojsoncallback=1`,
//       {}
//     );
//     if (!res.ok) {
//       console.log("failed", res.status);
//       return;
//     }
//     const json = await res.json();
//     console.log(json);
//     // console.log(res.json());
//     return json;
//   } catch (error) {
//     console.log("error");
//   }
// };

// export const getSearchedPictures = async (query) => {
//   const url = new URL(
//     `${baseURL}?method=flickr.photos.search&api_key=${API_KEY}`
//   );
//   url.search = new URLSearchParams({
//     tags: query,
//     per_page: 30,
//   });
//   try {
//     const res = await fetch(`${url}&format=json&nojsoncallback=1`, {});
//     if (!res.ok) {
//       console.log("failed", res.status);
//       return;
//     }
//     const json = await res.json();
//     console.log(json);
//     // console.log(res.json());
//     return json.results;
//   } catch (error) {
//     console.log("error");
//   }
// };
