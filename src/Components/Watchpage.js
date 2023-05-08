import { useParams } from "react-router-dom";
import NestedComments from "./NestedComments";
const WatchPage = () => {
  const { videoId } = useParams();

  return (
    <div className="w-[100%] border border-solid border-red-900 flex flex-col ">
      <iframe
        className="w-[70%] h-[500px] my-8  "
        frameBorder={0}
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      {<NestedComments />}
    </div>
  );
};

export default WatchPage;
