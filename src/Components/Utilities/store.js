import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import toggleSideBar from "./toggleSideBar";
import toggleMode from "./toggleMode";
import cacheSuggestionsSlice from "./cacheSuggestionsSlice";
import dataSlice from "./dataSlice";
import countSlice from "./countSlice";
import commentSlice from "./commentSlice";
import channelSlice from "./channelSlice";
import categorySlice from "./categorySlice";
const store = configureStore({
  reducer: {
    searchSlice: searchSlice,
    toggleSideBar: toggleSideBar,
    toggleMode: toggleMode,
    cacheSuggestions: cacheSuggestionsSlice,
    API_DATA: dataSlice,
    countSlice: countSlice,
    comment: commentSlice,
    channel: channelSlice,
    category : categorySlice
  },
});
export default store;
