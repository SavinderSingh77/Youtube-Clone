import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    isShowSearchIcon: false,
  },
  reducers: {
    showSearch: (state, actions) => {
      state.isShowSearchIcon = actions.payload;
    },
  },
});
export const { showSearch } = searchSlice.actions;
export default searchSlice.reducer;
