import { useEffect, useState } from "react";
import { cacheSearch } from "./Utilities/cacheSuggestionsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const useSearch = (searchText) => {
  const [suggestions, setSuggestions] = useState([]);
  const cachedSuggestions = useSelector((store) => store.cacheSuggestions);

  const dispatch = useDispatch();
  const HandleCacheSearch = (obj) => {
    dispatch(cacheSearch(obj));
  };

  async function searchSuggestions() {
    const fetchData = await fetch(
      "https://suggestqueries.google.com/complete/search?client=firefox&q=" +
        searchText
    );
    const dataJson = await fetchData.json();
    setSuggestions(dataJson);
    HandleCacheSearch({
      [dataJson[0]]: dataJson[1],
    });
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedSuggestions[searchText]) {
        setSuggestions([searchText, cachedSuggestions[searchText]]);
      } else {
        searchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchText]);
  return suggestions;
};
export default useSearch;
