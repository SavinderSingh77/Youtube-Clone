export const API_URL_PART_1 = "https://youtube.googleapis.com/youtube/v3/";
export const API_KEY = "&key=" + process.env.REACT_APP_API;
export const API_DEFAULT_PART_2_URL =
  "videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=16&chart=mostPopular&regionCode=IN";
export const API_URL_SEARCH_PART_2 =
  "search?part=snippet&maxResults=16&type=video&q=";
export const API_SERACH_TEXT = "";

const API_URL =
  API_URL_PART_1 + API_DEFAULT_PART_2_URL + API_SERACH_TEXT + API_KEY;

export const SEARCH_API_URL =
  API_URL_PART_1 + API_URL_SEARCH_PART_2 + API_SERACH_TEXT + API_KEY;

export default API_URL;
