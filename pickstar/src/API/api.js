const baseURL = "https://api.flickr.com/services/rest/";
const API_KEY = "f34f74397cfd5ba3996a727c4490ed73";
// const API_KEY = process.env.API_KEY;
// console.log(API_KEY);
export const getRecentPictures = async () => {
  try {
    const res = await fetch(
      `${baseURL}?method=flickr.photos.getRecent&api_key=${API_KEY}&per_page=&format=json&nojsoncallback=1`,
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
