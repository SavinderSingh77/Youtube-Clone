import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { category } from "./Utilities/categorySlice";
import { setCount } from "./Utilities/countSlice";
import { toggle } from "./Utilities/toggleSideBar";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faBaseballBatBall } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faIcons } from "@fortawesome/free-solid-svg-icons";

// const categories = [
//   "Home",
//   "Entertaiment",
//   "Politics",
//   "Technology",
//   "Coding",
//   "Cricket",
//   "Social",
//   "Latest News",
// ];

const categories = [
  { id: "1", category: "Home", icon: faHouse },

  { id: "2", category: "Entertaiment", icon: faIcons },

  { id: "3", category: "Politics", icon: faHandshake },

  { id: "4", category: "Technology", icon: faMicrochip },

  { id: "5", category: "Cricket", icon: faBaseballBatBall },

  { id: "6", category: "Social", icon: faUsers },

  { id: "7", category: "Latest News", icon: faNewspaper },
];

function SideBar() {
  const dispatch = useDispatch();
  const handleIsOpen = () => {
    dispatch(toggle(true));
  };
  const HandleSetCount = () => {
    dispatch(setCount());
  };
  const handleCategory = (text) => {
    dispatch(category(text));
  };
  const [activeCategory, setActiveCategory] = useState("Home");
  const { isOpen } = useSelector((store) => store.toggleSideBar);
  const [offsetLeft, setOffsetLeft] = useState("-50%");

  useEffect(() => {
    !isOpen ? setOffsetLeft("-50%") : setOffsetLeft("0px");
  }, [isOpen]);
  const sidebarStyle = {
    left: offsetLeft,
    transition: "left 0.5s ease-in-out", // Add transition property
  };

  return (
    <div
      className={`fixed w-48  h-full  flex flex-col justify-start itens-center gap-6 z-30  bg-white dark:bg-black `}
      style={sidebarStyle}
    >
      {categories.map((item, index) => {
        return (
          <div
            key={item.id}
            className={` w-full px-4 rounded-md  flex items-center justify-start gap-6 cursor-pointer  hover:bg-neutral-300  dark:hover:bg-zinc-800  ${
              activeCategory === item.category
                ? "bg-neutral-300  dark:bg-zinc-800"
                : null
            } `}
            onClick={() => {
              handleIsOpen();
              setActiveCategory(item.category);
              let text = item.category;
              if (text === "Home") {
                text = "";
                handleCategory(text);
                HandleSetCount();
              } else {
                handleCategory(text);
                HandleSetCount();
              }
            }}
          >
            <FontAwesomeIcon icon={item.icon} className="text-xl py-3" />

            <Link to="/">
              <span className="">{item.category}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
