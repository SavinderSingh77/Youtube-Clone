import Shimmer from "./Shimmer";
import SuggestionCard from "./SuggestionCard";
import { useEffect, useState } from "react";

import {
  SUGGESTIONS_VIDEOS_URL_PART_1,
  SUGGESTIONS_VIDEOS_URL_PART_3,
  VIDEO_ID,
  API_KEY,
} from "./Utilities/constants";
import { useParams } from "react-router-dom";

const SuggestedVideos = () => {
  const { videoId } = useParams();
  const [data, setData] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
    const fetchData = await fetch(
      SUGGESTIONS_VIDEOS_URL_PART_1 +
        videoId +
        SUGGESTIONS_VIDEOS_URL_PART_3 +
        API_KEY +
        "&pageToken=" +
        pageToken
    );
    const dataJson = await fetchData.json();

   
    setPageToken(dataJson.nextPageToken);
    setData((prevItems) => [...prevItems, ...dataJson?.items]);
    setIsLoading(false);
    
  }
 

  return !data.length ? (
    <div className=" flex flex-wrap box pt-10  w-full lg:w-[300px]  justify-center items-start gap-8 ">
      {Array(12)
        .fill("")
        .map((shimmer, index) => (
          <Shimmer key={index} />
        ))}
    </div>
  ) : (
    <div className="  flex flex-wrap box  pt-10 w-full lg:w-[300px]  justify-center items-start gap-8 ">
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
