import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import toggleSideBar from "./toggleSideBar";
const store = configureStore({
  reducer: {
    searchSlice: searchSlice,
    toggleSideBar: toggleSideBar,
  },
});
export default store;
