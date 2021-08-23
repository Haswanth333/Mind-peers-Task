const baseURL = "https://api.flickr.com/services/rest/";
const API_KEY = "f34f74397cfd5ba3996a727c4490ed73";

// method fro getting recent photos
export const getTrendingImages = async (page) => {
  try {
    // get recent method and page(for infinitescroll)
    const res = await fetch(
      `${baseURL}/?method=flickr.photos.getRecent&api_key=${API_KEY}&per_page=30&page=${page}&format=json&nojsoncallback=1`
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
    `${baseURL}/?method=flickr.photos.search&api_key=${API_KEY}&per_page=30&tags=${query}&format=json&nojsoncallback=1`
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
