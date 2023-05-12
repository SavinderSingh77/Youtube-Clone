import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: "",
  },

  reducers: {
    category: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const {category} = categorySlice.actions;
export default categorySlice.reducer
