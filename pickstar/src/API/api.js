const baseURL = "https://api.flickr.com/services/rest/";
const { REACT_APP_API_KEY } = process.env;

// method fro getting recent photos
export const getTrendingImages = async (page) => {
  try {
    // get recent method and page(for infinitescroll)
    const res = await fetch(
      `${baseURL}/?method=flickr.photos.getRecent&api_key=${REACT_APP_API_KEY}&per_page=100&page=${page}&format=json&nojsoncallback=1`
    );
    if (!res.ok) {
      console.error("failed", res.status);
      return;
    }
    const json = await res.json();
    console.log(json);
    // response Json
    console.log(json.photos.photo);
    return json.photos.photo;
  } catch (error) {
    console.error("error in making request", error);
  }
};

// method for search
export const getSearchedImages = async (query) => {
  // accessing query from input and passing to fetch to tags
  const url = new URL(
    `${baseURL}/?method=flickr.photos.search&api_key=${REACT_APP_API_KEY}&per_page=50&tags=${query}&format=json&nojsoncallback=1`
  );

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("failed", res.status);
      return;
    }
    const json = await res.json();
    // console.log(json);
    return json.photos.photo;
  } catch (error) {
    console.error("error in making request", error);
  }
};
