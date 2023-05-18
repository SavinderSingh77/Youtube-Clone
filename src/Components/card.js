import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { channelInfo } from "./Utilities/channelSlice";
import { toggle } from "./Utilities/toggleSideBar";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const handleIsOpen = () => {
    dispatch(toggle(true));
  };
  const handleChannelInfo = (data) => {
    dispatch(channelInfo(data));
  };

  const videoId = data?.id?.videoId || data?.id;
  function formatLikeCount(likeCount) {
    if (!likeCount) {
      return;
    }
    if (likeCount < 1000) {
      return likeCount.toString() + "views";
    } else if (likeCount >= 1000 && likeCount < 1000000) {
      return (likeCount / 1000).toFixed(1) + "K views";
    } else {
      return (likeCount / 1000000).toFixed(1) + "M views";
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minuteInMs = 60 * 1000;
    const hourInMs = 60 * minuteInMs;
    const dayInMs = 24 * hourInMs;
    const yearInMs = 365 * dayInMs;
    const monthInMs = 30 * dayInMs;

    if (diff < minuteInMs) {
      return "just now";
    } else if (diff < hourInMs) {
      const minutes = Math.floor(diff / minuteInMs);
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else if (diff < dayInMs) {
      const hours = Math.floor(diff / hourInMs);
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (diff < monthInMs) {
      const days = Math.floor(diff / dayInMs);
      return days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (diff < yearInMs) {
      const months = Math.floor(diff / monthInMs);
      return months === 1 ? "1 month ago" : `${months} months ago`;
    } else {
      const years = Math.floor(diff / yearInMs);
      return years === 1 ? "1 year ago" : `${years} years ago`;
    }
  }

  return (
    <Link
      to={`/watch/${videoId}`}
      onClick={() => {
        handleChannelInfo(data);
        handleIsOpen();
      }}
    >
      <div className="w-72 flex flex-col items-center cursor-pointer  hover:scale-105 transition-all duration-200 ease-in-out  ">
        <div className="w-72 ">
          <img
            src={data?.snippet.thumbnails.medium.url}
            alt="video"
            className="rounded-2xl animate-smooth "
          />
        </div>
        <div className="w-72  flex justify-start items-start gap-6">
          <div className="px-4 py-2 ">
            <p>
              {data.snippet?.localized?.title?.length < 80
                ? data.snippet?.localized?.title
                : data.snippet?.localized?.title?.slice(0, 80) + "..." ||
                  data.snippet?.title?.length < 80
                ? data.snippet?.title
                : data.snippet?.title?.slice(0, 80) + "..."}
            </p>
          </div>
        </div>

        <div className="w-full  text-stone-600 flex flex-col items-start px-6">
          <span>{data.snippet.channelTitle}</span>
          <div className="flex gap-6 ">
            <span>{formatLikeCount(data.statistics?.viewCount)} </span>
            <span>{formatDate(data.snippet?.publishedAt)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
