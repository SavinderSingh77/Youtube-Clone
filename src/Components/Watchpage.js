import { useParams } from "react-router-dom";
import NestedComments from "./NestedComments";
import SuggestedVideos from "./SuggestedVideos";
import { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { TbShare3, TbDots } from "react-icons/tb";
import { TfiDownload } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { API_KEY_CODE } from "./Utilities/constants";
import LiveChat from "./LiveChat";
import Error from "./Error";

const WatchPage = () => {
  const { channelInfo } = useSelector((store) => store.channel);
  const [stats, setStats] = useState([]);
  const { videoId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [readMore, setReadMore] = useState(false);
  const [subsCount, setSubsCount] = useState("");
  const [descp, setDescp] = useState("");
  const [showDescription, setShowDescription] = useState(500);
  const [isError, setIsError] = useState(false);
  console.log(videoId);
  const handleOnError = (param) => {
    setIsError(param);
  };
  async function channel(channelInfo) {
    try {
      console.log(channelInfo?.id?.videoId || channelInfo?.id, channelInfo);

      const fetchData = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY_CODE}&part=snippet,statistics&id=${
          channelInfo?.id?.videoId || channelInfo?.id
        }`
      );

      if (fetchData.ok) {
        const dataJson = await fetchData.json();
        setStats(dataJson.items);
        setDescp(dataJson.items[0]?.snippet?.localized?.description);
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      setIsError(true);
  ;
    }
  }

  useEffect(() => {
    channel(channelInfo);
  }, []);

  useEffect(() => {
    channel(channelInfo);
  }, [channelInfo]);

  useEffect(() => {
    function handleBeforeUnload() {
      window.scrollTo(0, 0);
    }

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  async function getSubscriberCount() {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${stats[0]?.snippet?.channelId}&key=${API_KEY_CODE}`
    );
    const jsonData = await data.json();
    setSubsCount(jsonData?.items?.[0]?.statistics?.subscriberCount);
  }

  useEffect(() => {
    getSubscriberCount();
  }, [stats]);

  function formatCount(count) {
    if (!count) {
      return;
    }
    if (count < 1000) {
      return count.toString();
    } else if (count >= 1000 && count < 1000000) {
      return (count / 1000).toFixed(1) + "K ";
    } else {
      return (count / 1000000).toFixed(1) + "M ";
    }
  }
  console.log(isError);

  return !isError ? (
    <div className="flex flex-col lg:flex-row w-[100vw] justify-center gap-20  pt-4 px-3">
      <div className=" flex flex-col w-[100%] lg:w-[70%] ">
        <div className="w-[100%] lg:w-[100%]">
          <iframe
            className={`w-full aspect-video  my-2 ${
              isLoading
                ? "bg-gray-200 dark:bg-gray-800 animate-pulse"
                : "bg-none"
            }`}
            frameBorder={0}
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            playsInline
            muted
            autoPlay
            onLoad={handleOnLoad}
            onError={handleOnError}
          ></iframe>
          <div className="flex justify-between flex-wrap md:flex-nowrap items-center md:gap-9 gap-3 my-8">
            <div className="flex justify-center gap-2 items-center">
              <BsPersonCircle className="md:text-4xl text-lg mb-1 cursor-pointer"></BsPersonCircle>
              <div className="flex flex-col">
                <h2 className="font-semibold md:text-base text-sm">
                  {stats?.[0]?.snippet?.channelTitle}
                </h2>
                <span className="text-xs text-stone-500">
                  {formatCount(subsCount)} subscribers
                </span>
              </div>
              <button className=" mx-6 px-4 py-2 border-stone-700 border rounded-3xl font-semibold bg-black text-white hover:bg-white hover:text-black transition-all duration-500 ease-in-out active:scale-95">
                Subscribe
              </button>
            </div>
            <div className="flex justify-center gap-2 pr-2 dark:text-black">
              <div className="flex justify-center items-center">
                <button className="bg-stone-100 font-semibold flex justify-center gap-2 items-center md:p-2 p-1 rounded-l-full border-r-2 border-stone-200 md:text-base text-xs hover:bg-stone-200">
                  <AiOutlineLike className="md:text-2xl"></AiOutlineLike>{" "}
                  {formatCount(stats?.[0]?.statistics?.likeCount)}
                </button>
                <button className="bg-stone-100 md:p-2 p-1 rounded-r-full hover:bg-stone-200">
                  <AiOutlineDislike className="md:text-2xl"></AiOutlineDislike>
                </button>
              </div>
              <button className="bg-stone-100 font-semibold flex gap-1 items-center md:px-4 md:py-2 px-2 py-1 rounded-full md:text-base text-xs hover:bg-stone-200">
                <TbShare3 className="md:text-xl"></TbShare3> Share
              </button>
              <button className="bg-stone-100 font-semibold flex gap-1 items-center md:px-4 md:py-2 px-2 py-1 rounded-full hover:bg-stone-200 md:text-base text-xs">
                <TfiDownload></TfiDownload> Download
              </button>
              <button className="bg-stone-100 md:px-3 px-2 py-1 rounded-full hover:bg-stone-200">
                <TbDots className="md:text-xl"></TbDots>
              </button>
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <span className=" text-xl">
              {stats?.[0]?.snippet?.localized?.title}
            </span>{" "}
            <span className="pb-8">
              {descp?.length > 500
                ? descp.slice(0, showDescription) + ". . . "
                : descp}
              {descp?.length > 500 ? (
                <button
                  className=" text-md font-bold text-stone-500"
                  onClick={() => {
                    setReadMore(!readMore);
                    if (readMore) {
                      setShowDescription(500);
                    } else {
                      setShowDescription(descp.length);
                    }
                  }}
                >
                  {!readMore ? "Read More" : "Read Less"}
                </button>
              ) : null}
            </span>{" "}
          </div>
        </div>
        {<NestedComments />}
      </div>
      <div className=" static lg:absolute  text-white dark:text-black w-[100%]  lg:w-[28%]  right-4 top-[0%] z-999  border-solid border-2 bg-black dark:bg-white rounded-md py-4 px-2">
        <LiveChat />
      </div>
      <SuggestedVideos  handleOnError = {handleOnError} />
    </div>
  ) : (
    <Error />
  );
};

export default WatchPage;
