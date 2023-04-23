import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import toggleSideBar from "./toggleSideBar";
import toggleMode from "./toggleMode";
const store = configureStore({
  reducer: {
    searchSlice: searchSlice,
    toggleSideBar: toggleSideBar,
    toggleMode: toggleMode,
  },
});
export default store;
