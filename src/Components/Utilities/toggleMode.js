import { createSlice } from "@reduxjs/toolkit";

const toggleMode = createSlice({
  name: "toggleMode",
  initialState: {
    isDarkMode: true,
  },
  reducers: {
    switchMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { switchMode } = toggleMode.actions;
export default toggleMode.reducer;
