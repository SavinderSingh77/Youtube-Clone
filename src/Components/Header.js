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
import { useEffect, useState } from "react";
import useSearch from "./useSearch";
import { Link, useNavigate } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSpeechToText } from "./useSpeechToText";
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";

import {
  API_URL_PART_1,
  API_DEFAULT_PART_2_URL,
  API_SERACH_TEXT,
  API_URL_SEARCH_PART_2,
  API_KEY,
} from "./Utilities/constants";
import useVideos from "./Utilities/useVideos";
import { setCount } from "./Utilities/countSlice";

const Header = () => {
  const category = useSelector((store) => store.category.category);

  const [showMic, setShowMic] = useState(false);
  const [resetTranscript, listenContinuously, listenStop, transcript] =
    useSpeechToText();

  useEffect(() => {
    setSearchText(transcript);
  }, [transcript]);

  const [apiPart2, setApiPart2] = useState(API_DEFAULT_PART_2_URL);
  const [apiPart3, setApiPart3] = useState(API_SERACH_TEXT);

  useEffect(() => {
    if (category) {
      setApiPart3(category);
      setApiPart2(API_URL_SEARCH_PART_2);
    }else{
      setApiPart2(API_DEFAULT_PART_2_URL)
      setApiPart3(API_SERACH_TEXT)
    }
  }, [category]);

  useVideos(API_URL_PART_1, apiPart2, apiPart3, API_KEY);

  console.log(category, apiPart3);

  const dispatch = useDispatch();
  const HandleSetCount = () => {
    dispatch(setCount());
  };
  const { isShowSearchIcon } = useSelector((store) => store.searchSlice);

  const [searchText, setSearchText] = useState("");
  const [searchQuery, suggestions] = useSearch(searchText);
  const [showSuggestionsBox, setShowSuggestionsBox] = useState(false);

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

  // We should move to home route with searched suggestion so we need to navigate

  const navigate = useNavigate();
  useEffect(() => {
    const enter = (e) => {
      if (e.key === "Enter") {
        if (searchText) {
          navigate("/");
          hideSearchHandler(false);
          setShowSuggestionsBox(false);
          setApiPart2(API_URL_SEARCH_PART_2);
          setApiPart3(searchText);
          HandleSetCount();
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener("keyup", enter);

    return () => window.removeEventListener("keyup", enter);
  }, [searchText]);

  return (
    <header className="sticky top-0 dark:bg-black bg-white px-8 pb-16 md:pb-4 pt-4 w-full  flex justify-between items-center gap-9 z-20  ">
      <div className="flex justify-start items-center gap-6 sm:gap-10basis-full md:basis-auto ">
        <div
          className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-neutral-300 dark:hover:bg-zinc-700"
          onClick={() => {
            toggleSideBar();
          }}
        >
          {" "}
          <FontAwesomeIcon
            icon={faBars}
            className="cursor-pointer text-[25px] "
          />{" "}
        </div>

        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <img src={YoutubeLogo} alt="logo" className="w-8" />
          <h3 className="font-semibold text-2xl">YouTube</h3>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5  w-[80%] max-w-[600px] top-[80px] left-[10%]  absolute md:static">
        <div
          className={`flex basis-full justify-between items-center h-10  rounded-full outline-1 outline relative ${
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
          {showSuggestionsBox && searchText && (
            <div className="absolute flex flex-col gap-2 py-3 px-6  w-full bg-white top-[105%] rounded-lg shadow-lg text-black">
              {!searchText ? null : !suggestions.length ? (
                <h3 className="text-stone-700 py-2 px-3 w-3/4 ">
                  No record found
                </h3>
              ) : (
                suggestions.map((suggestion) => {
                  return (
                    <h3
                      className="text-stone-700 py-2 px-3 w-3/4 cursor-pointer hover:bg-stone-500 rounded-lg hover:text-white "
                      key={suggestion}
                      onClick={() => {
                        setSearchText(suggestion);
                        setShowSuggestionsBox(false);
                      }}
                    >
                      {suggestion}{" "}
                    </h3>
                  );
                })
              )}
            </div>
          )}

          <input
            type="text"
            className="px-5 py-2 bg-transparent w-full basis-full xl:basis-auto  focus:outline-none"
            placeholder="Search Videos"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onFocus={() => {
              showSearchHandler(true);
              setShowSuggestionsBox(true);
            }}
            onBlur={() => {
              hideSearchHandler(false);
              setTimeout(() => {
                setShowSuggestionsBox(false);
              }, 500);
            }}
          />

          {searchText && (
            <div
              className="  h-full cursor-pointer  text-xl px-4 flex justify-center items-center "
              onClick={() => {
                setSearchText("");
                resetTranscript();
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faXmark} />
            </div>
          )}
          <Link to="/" className="bg-none h-full">
            {" "}
            <div
              className="w-20 h-full flex justify-center items-center border-l border-solid border-zinc-700 bg-neutral-800  dark:bg-neutral-700 rounded-r-full cursor-pointer "
              onClick={() => {
                if (searchText) {
                  setApiPart2(API_URL_SEARCH_PART_2);
                  setApiPart3(searchText);
                  HandleSetCount();
                  window.scrollTo(0, 0);
                  listenStop();
                  setShowMic(false);
                }
              }}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white"
              />
            </div>
          </Link>
        </div>

        <div className="flex justify-center w-8 h-8 items-center cursor-pointer rounded-full hover:bg-neutral-300 dark:hover:bg-gray-800">
          {!showMic ? (
            <FontAwesomeIcon
              onClick={() => {
                listenContinuously();
                setShowMic(true);
              }}
              icon={faMicrophoneSlash}
              className="cursor-pointer dark:text-white "
            />
          ) : (
            <FontAwesomeIcon
              icon={faMicrophone}
              className="cursor-pointer dark:text-white "
              onClick={() => {
                listenStop();
                setShowMic(false);
                resetTranscript();
              }}
            />
          )}
        </div>
      </div>

      <div className="flex justify-end items-center gap-8 ">
        <div className="flex justify-center items-center w-8 h-8 border border-solid border-slate-800 rounded-full bg-gray-50   ">
          <FontAwesomeIcon
            icon={faUser}
            className=" text-slate-800 cursor-pointer "
          />
        </div>
        <div className="">
          {!isDarkMode ? (
            <FontAwesomeIcon
              icon={faMoon}
              className="text-2xl cursor-pointer"
              onClick={() => {
                toggleMode();
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faSun}
              className="text-2xl cursor-pointer"
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
