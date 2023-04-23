import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
function SideBar() {
  const { isOpen } = useSelector((store) => store.toggleSideBar);
  console.log(isOpen);

  return !isOpen ? (
    <div className="w-1/8 h-full px-6 py-8 flex flex-col justify-start items-center  gap-10 border border-solid border-neutral-600 rounded-md ">

      <div className="  w-24 h-24 flex flex-col items-center justify-center cursor-pointer hover:bg-neutral-300 dark:hover:bg-zinc-800 px-3 py-3 rounded-md">
        <FontAwesomeIcon icon={faHouse} className="text-3xl py-3" />
        <span className="">Home</span>
      </div>

      <div className="w-24 h-24  flex flex-col items-center justify-center cursor-pointer  hover:bg-neutral-300 dark:hover:bg-zinc-800 px-3 py-3 rounded-md">
        <FontAwesomeIcon icon={faIcons} className="text-4xl py-3" />
        <span className="">Shorts</span>
      </div>

      <div className=" w-24 h-24 flex flex-col items-center justify-center cursor-pointer  hover:bg-neutral-300 dark:hover:bg-zinc-800 px-3 py-3 rounded-md">
        <i className="material-icons text-4xl py-2">subscriptions</i>
        <span className="">SubsScription</span>
      </div>
      <div className=" w-24 h-24 flex flex-col items-center justify-center cursor-pointer  hover:bg-neutral-300 dark:hover:bg-zinc-800 px-3 py-3 rounded-md">
        <i className="material-icons  text-4xl py-2">library_add_check</i>
        <span className="">Library</span>
      </div>
    </div>
  ) : (
    <div className="w-1/5 h-full px-8 py-8 flex flex-col justify-start itens-start gap-6 border border-1 border- border-neutral-600">
      <div className="flex flex-col gap-4">
        <div className=" w-full px-4 rounded-md  flex items-center justify-start gap-6 cursor-pointer  hover:bg-neutral-300  dark:hover:bg-zinc-800">
          <FontAwesomeIcon icon={faHouse} className="text-xl py-3" />
          <span className="">Home</span>
        </div>

        <div className=" w-full px-4 rounded-md  flex items-center justify-start gap-6 cursor-pointer hover:bg-neutral-300  dark:hover:bg-zinc-800">
          <FontAwesomeIcon icon={faIcons} className="text-2xl py-3" />
          <span className="">Shorts</span>
        </div>

        <div className=" w-full px-4 rounded-md  flex items-center justify-start gap-6 cursor-pointer hover:bg-neutral-300  dark:hover:bg-zinc-800">
          <i className="material-icons text-2xl py-2">subscriptions</i>
          <span className="">Subscription</span>
        </div>
      </div>
      <hr className="border-neutral-900 dark:border-white"/>
      <div className="flex flex-col gap-4">
        <div className="w-full px-4 rounded-md  flex items-center justify-start gap-6 cursor-pointer hover:bg-neutral-300  dark:hover:bg-zinc-800">
          <i className="material-icons  text-2xl py-2">library_add_check</i>
          <span className="">Library</span>
        </div>
        <div className="w-full px-4 rounded-md  flex items-center justify-start gap-6 cursor-pointer hover:bg-neutral-300  dark:hover:bg-zinc-800">
          <FontAwesomeIcon icon={faClockRotateLeft} className="text-2xl py-3" />
          <span className="">History</span>
        </div>

        <div className="w-full px-4 rounded-md  flex items-center justify-start gap-6 cursor-pointer hover:bg-neutral-300  dark:hover:bg-zinc-800">
          <FontAwesomeIcon icon={faClock} className="text-2xl py-3" />
          <span className="">Watch Time</span>
        </div>

        <div className="w-full px-4 rounded-md  flex items-center justify-start gap-6 cursor-pointer hover:bg-neutral-300  dark:hover:bg-zinc-800">
          <FontAwesomeIcon icon={faClapperboard} className="text-2xl py-3" />
          <span className="">Watch Time</span>
        </div>
        <div className="w-full px-4 rounded-md  flex items-center justify-start gap-6 cursor-pointer hover:bg-neutral-300  dark:hover:bg-zinc-800">
          <FontAwesomeIcon icon={faThumbsUp} className="text-2xl py-3" />
          <span className="">Liked Videos</span>
        </div>
      </div>
      <hr className="border-neutral-900 dark:border-white" />
      <div className="flex flex-col gap-4">
        <span className="">Subscriptions</span>
      </div>
    </div>
  );
}

export default SideBar;
