import { createSlice } from "@reduxjs/toolkit";

const cacheSuggestionsSlice = createSlice({
  name: "cacheSuggestions",
  initialState: {},

  reducers: {
    cacheSearch: (state, action) => {
      // Object.assign modifies the mutate the state (first argument)
      Object.assign(state, action.payload);
    },
  },
});
export const { cacheSearch } = cacheSuggestionsSlice.actions;
export default cacheSuggestionsSlice.reducer;
