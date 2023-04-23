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
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { switchMode } from "./Utilities/toggleMode";

const Header = () => {
  const dispatch = useDispatch();
  const { isShowSearchIcon } = useSelector((store) => store.searchSlice);
  const { isDarkMode } = useSelector((store) => store.toggleMode);
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const toggleMode = () => {
    dispatch(switchMode());
  };
  const toggleSideBar = () => {
    dispatch(toggle());
  };

  const showSearchHandler = (param) => {
    dispatch(showSearch(param));
  };
  const hideSearchHandler = (param) => {
    dispatch(showSearch(param));
  };

  console.log(isShowSearchIcon);
  return (
    <header className="sticky top-0 dark:bg-black bg-white px-8 py-4 w-full  flex justify-start items-center gap-9 sm:justify-between  flex-wrap">
      <div className="flex justify-start items-center gap-4 sm:gap-10basis-full md:basis-auto ">
        <div
          className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-neutral-300 dark:hover:bg-zinc-700"
          onClick={() => {
            toggleSideBar();
          }}
        >
          {" "}
          <FontAwesomeIcon
            icon={faBars}
            className="cursor-pointer text-2xl "
          />{" "}
        </div>

        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <img src={YoutubeLogo} alt="logo" className="w-8" />
          <h3 className="font-semibold text-2xl">YouTube</h3>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5   w-full sm:w-auto">
        <div
          className={`flex justify-between items-center h-10  rounded-full outline-1 outline ${
            !isShowSearchIcon
              ? " outline-neutral-500 dark:outline-white"
              : " outline-cyan-600"
          } `}
        >
          {isShowSearchIcon && (
            <div className="w-14 h-full flex justify-center items-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-black dark:text-white"
              />
            </div>
          )}

          <input
            type="text"
            className="px-8 py-2 bg-transparent w-full basis-full xl:basis-auto  sm:w-96 focus:outline-none"
            placeholder="Search Videos"
            onFocus={() => {
              showSearchHandler(true);
            }}
            onBlur={() => {
              hideSearchHandler(false);
            }}
          />

          <div className="w-20 h-full flex justify-center items-center border-l border-solid border-zinc-700 bg-neutral-800  dark:bg-neutral-700 rounded-r-full cursor-pointer ">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
          </div>
        </div>
        <div className="flex justify-center items-center cursor-pointer rounded-full w-10 h-10 hover:bg-neutral-300 dark:hover:bg-gray-800">
          <FontAwesomeIcon
            icon={faMicrophone}
            className="cursor-pointer dark:text-white"
          />
        </div>
      </div>

      <div className="flex justify-end items-center gap-8 fixed right-4 top-5 md:static ">
        <div className="flex justify-center items-center w-12 h-12 border border-solid border-slate-800 rounded-full bg-gray-50   ">
          <FontAwesomeIcon
            icon={faUser}
            className="text-slate-800 cursor-pointer"
          />
        </div>
        <div className="">
          {!isDarkMode ? (
            <FontAwesomeIcon
              icon={faMoon}
              className="text-3xl cursor-pointer"
              onClick={() => {
                toggleMode();
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faSun}
              className="text-3xl cursor-pointer"
              onClick={() => {
                toggleMode();
              }}
            />
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
