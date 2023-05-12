import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideos } from "./dataSlice";
import { useSelector } from "react-redux";

const useVideos = (
  API_URL_PART_1,
  API_URL_PART_2,
  API_URL_PART_3,
  API_URL_PART_4
) => {
  const API_URL =
    API_URL_PART_1 + API_URL_PART_2 + API_URL_PART_3 + API_URL_PART_4;
  console.log(API_URL_PART_3);
  const { count } = useSelector((store) => store.countSlice);
  const [runAPI, setRunAPI] = useState(count);

  useEffect(() => {
    setRunAPI(count);
  }, [count]);

  const [data, setData] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const handleAPIData = (data) => {
    dispatch(getVideos(data));
  };

  useEffect(() => {
    setData([]);
    getCard();
  }, [runAPI]);

  useEffect(() => {
    handleAPIData([data, isLoading]);
  }, [isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        getCard();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageToken]);

  async function getCard() {

    setIsLoading(true);
    const data = await fetch(`${API_URL}&pageToken=${pageToken}`);
    const dataJson = await data.json();
    setPageToken(dataJson.nextPageToken);
    setIsLoading(false);
    setData((prevItems) => [...prevItems, ...dataJson?.items]);
  }

  return [data, isLoading];
};

export default useVideos;


// error -> https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=16&chart=mostPopular&regionCode=INPolitics&key=AIzaSyDb8whlcnVXgcaL8rP21kQk8yjhiEKfvDo&pageToken=CBAQAA

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&type=video&q=namaste%20javascript%20notes&key=AIzaSyDb8whlcnVXgcaL8rP21kQk8yjhiEKfvDo&pageToken=CBAQAA