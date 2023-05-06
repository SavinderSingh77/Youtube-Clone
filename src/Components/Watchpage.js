import { useParams } from "react-router-dom";
const WatchPage = () => {
  const { videoId } = useParams();

  return (
    <div className="w-[100%] h-[80vh] border bg-white dark:bg-slate-950 border-solid border-red-900">
      <iframe
        className="w-[70%] h-[100%] my-8  "
        frameBorder={0}
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
