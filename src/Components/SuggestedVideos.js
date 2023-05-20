import Shimmer from "./Shimmer";
import SuggestionCard from "./SuggestionCard";
import { useEffect, useState } from "react";
import Error from "./Error";

import {
  SUGGESTIONS_VIDEOS_URL_PART_1,
  SUGGESTIONS_VIDEOS_URL_PART_3,
  VIDEO_ID,
  API_KEY,
} from "./Utilities/constants";
import { useParams } from "react-router-dom";

const SuggestedVideos = ({ handleOnError }) => {
  const { videoId } = useParams();
  const [data, setData] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  console.log(handleOnError());
  useEffect(() => {
    suggestions();
  }, []);

  useEffect(() => {
    setData([]);
    suggestions();
    function handleBeforeUnload() {
      window.scrollTo(0, 0);
    }
    handleBeforeUnload();
  }, [videoId]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        suggestions();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageToken]);
  async function suggestions() {
    setIsLoading(true);
    try {
      const fetchData = await fetch(
        SUGGESTIONS_VIDEOS_URL_PART_1 +
          videoId +
          SUGGESTIONS_VIDEOS_URL_PART_3 +
          API_KEY +
          "&pageToken=" +
          pageToken
      );

      if (fetchData.ok) {
        const dataJson = await fetchData.json();

        setPageToken(dataJson.nextPageToken);
        setData((prevItems) => [...prevItems, ...dataJson?.items]);
        setIsLoading(false);
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      handleOnError(true);
    }
  }

  return !data.length ? (
    <div className=" flex flex-wrap box pt-16  w-full lg:w-[300px]  justify-center items-start gap-8 ">
      {Array(12)
        .fill("")
        .map((shimmer, index) => (
          <Shimmer key={index} />
        ))}
    </div>
  ) : (
    <div className="  flex flex-wrap box  pt-16 w-full lg:w-[300px]  justify-center items-start gap-8 ">
      {data?.map((card, index) => (
        <SuggestionCard key={card.id + index} data={card} />
      ))}
      {isLoading && (
        <>
          <div className="flex flex-wrap box pt-10  w-full lg:w-[300px]  justify-center items-start gap-8 ">
            {Array(8)
              .fill("")
              .map((shimmer, index) => (
                <Shimmer key={index} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SuggestedVideos;
