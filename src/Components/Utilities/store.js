import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import toggleSideBar from "./toggleSideBar";
import toggleMode from "./toggleMode";
import cacheSuggestionsSlice from "./cacheSuggestionsSlice";
import dataSlice from "./dataSlice";
import countSlice from "./countSlice";
const store = configureStore({
  reducer: {
    searchSlice: searchSlice,
    toggleSideBar: toggleSideBar,
    toggleMode: toggleMode,
    cacheSuggestions: cacheSuggestionsSlice,
    API_DATA: dataSlice,
    countSlice: countSlice,
  },
});
export default store;
