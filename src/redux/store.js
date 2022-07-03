import { configureStore } from "@reduxjs/toolkit";
import charReducer from "./charSlice";

export default configureStore({
  reducer: {
    favoriteChar: charReducer,
  },
});
