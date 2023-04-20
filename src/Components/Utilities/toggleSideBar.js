import { createSlice } from "@reduxjs/toolkit";
const toggleSideBar = createSlice({
  name: "toggleSideBar",
  initialState: {
    isOpen: true,
  },
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { toggle } = toggleSideBar.actions;
export default toggleSideBar.reducer;
