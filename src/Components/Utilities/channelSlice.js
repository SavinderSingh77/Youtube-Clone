import { createSlice } from "@reduxjs/toolkit";
const channelSlice = createSlice({
  name: "channel",
  initialState: {
    channelInfo: {},
  },
  reducers: {
    channelInfo: (state, action) => {
      state.channelInfo = action.payload;
    },
  },
});

export const { channelInfo } = channelSlice.actions;
export default channelSlice.reducer;
