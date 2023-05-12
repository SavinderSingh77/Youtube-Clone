import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { category } from "./Utilities/categorySlice";
import { setCount } from "./Utilities/countSlice";

const categories = [
  "Home",
  "Entertaiment",
  "Politics",
  "Technology",
  "Coding",
  "Cricket",
  "Social",
  "Latest News",
];

function SideBar() {
  const dispatch = useDispatch();
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
            key={index}
            className={` w-full px-4 rounded-md  flex items-center justify-start gap-6 cursor-pointer  hover:bg-neutral-300  dark:hover:bg-zinc-800  ${
              activeCategory === item
                ? "bg-neutral-300  dark:bg-zinc-800"
                : null
            } `}
            onClick={() => {
              setActiveCategory(item);
              let text = item;
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
            <FontAwesomeIcon icon={faHouse} className="text-xl py-3" />
            <Link to="/">
              <span className="">{item}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
