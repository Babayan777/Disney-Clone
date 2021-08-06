import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from '../features/movie/movieSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    movue:movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});