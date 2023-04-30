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
  return !isOpen ? null : (
    <div className="w-48 h-full  flex flex-col justify-start itens-center gap-6 z-30 fixed left-0 bg-white dark:bg-black">
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
      <hr className="border-neutral-900 dark:border-white" />
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