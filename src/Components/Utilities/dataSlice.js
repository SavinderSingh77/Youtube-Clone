import { createSlice } from "@reduxjs/toolkit";
const dataSlice = createSlice({
  name: "API_DATA",
  initialState: {
    items: {
      data: [],
      isLoading: true,
    },
  },
  reducers: {
    getVideos: (state, action) => {
      state.items.data = action.payload[0];
      state.items.isLoading = action.payload[1];
    },
  },
});

export const { getVideos } = dataSlice.actions;
export default dataSlice.reducer;
