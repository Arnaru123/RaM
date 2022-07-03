import { createSlice } from "@reduxjs/toolkit";

export const charSlice = createSlice({
  name: "favoriteChar",
  initialState: {
    ids: [],
  },
  reducers: {
    add: (state, action) => {
      state.ids.push(action.payload.id);
    },
  },
});

export const { add } = charSlice.actions;

export default charSlice.reducer;
