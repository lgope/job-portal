import { configureStore } from "@reduxjs/toolkit";
import jobPostReducer from "./reducer/jobPostReducer";

export default configureStore({
  reducer: {
    job: jobPostReducer,
  },
});
