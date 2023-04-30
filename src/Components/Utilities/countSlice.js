import { createSlice } from "@reduxjs/toolkit";
const countSlice = createSlice({
  name: "countSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    setCount: (state) => {
      state.count++;
    },
  },
});

export const {setCount} = countSlice.actions
export default countSlice.reducer