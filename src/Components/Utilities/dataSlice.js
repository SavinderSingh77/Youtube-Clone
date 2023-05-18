import { createSlice } from "@reduxjs/toolkit";
const dataSlice = createSlice({
  name: "API_DATA",
  initialState: {
    items: {
      data: [],
      isLoading: true,
      isError : false,
    },
  },
  reducers: {
    getVideos: (state, action) => {
      state.items.data = action.payload[0];
      state.items.isLoading = action.payload[1];
      state.items.isError = action.payload[2]
    },
  },
});

export const { getVideos } = dataSlice.actions;
export default dataSlice.reducer;
