import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import YoutubeLogo from "./Assets/youtube-logo-2431.png";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { showSearch } from "./Utilities/searchSlice";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { toggle } from "./Utilities/toggleSideBar";
const Header = () => {
  const { isShowSearchIcon } = useSelector((store) => store.searchSlice);
  const toggleSideBar = () => {
    dispatch(toggle());
  };

  const dispatch = useDispatch();
  const showSearchHandler = (param) => {
    dispatch(showSearch(param));
  };
  const hideSearchHandler = (param) => {
    dispatch(showSearch(param));
  };

  console.log(isShowSearchIcon);
  return (
    <header className="px-8 py-4 w-full  flex justify-center flex-wrap items-center gap-9 lg:justify-between">
      <div className="flex justify-start items-center gap-10 ">
        <div
          className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-zinc-700"
          onClick={() => {
            toggleSideBar();
          }}
        >
          {" "}
          <FontAwesomeIcon
            icon={faBars}
            className="text-white cursor-pointer text-2xl "
          />{" "}
        </div>

        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <img src={YoutubeLogo} alt="logo" className="w-8" />
          <h3 className="text-white font-semibold text-2xl">YouTube</h3>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 flex-wrap">
        <div
          className={`flex justify-between items-center h-10  rounded-full outline-1 outline ${
            !isShowSearchIcon ? " outline-white" : " outline-cyan-600"
          } `}
        >
          {isShowSearchIcon && (
            <div className="w-14 h-full flex justify-center items-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white"
              />
            </div>
          )}

          <input
            type="text"
            className="px-2 py-2 bg-transparent text-white w-64  sm:w-96 focus:outline-none"
            onFocus={() => {
              showSearchHandler(true);
            }}
            onBlur={() => {
              hideSearchHandler(false);
            }}
          />

          <div className="w-20 h-full flex justify-center items-center border-l border-solid border-zinc-700 bg-zinc-900 rounded-r-full cursor-pointer ">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
          </div>
        </div>
        <div className="flex justify-center items-center cursor-pointer rounded-full bg-gray-600 w-10 h-10 hover:bg-gray-800">
          <FontAwesomeIcon
            icon={faMicrophone}
            className="text-white cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-center items-center p-3 border border-solid border-slate-800 rounded-full bg-gray-50   ">
        <FontAwesomeIcon
          icon={faUser}
          className="text-slate-800 cursor-pointer"
        />
      </div>
    </header>
  );
};
export default Header;
