import { createSlice } from "@reduxjs/toolkit";

export const jobPostReducer = createSlice({
  name: "jobs",
  initialState: {
    posts: [],
    post: {},
    loading: false,
  },
  reducers: {
    setAllPost: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.posts = action.payload;
      state.loading = false;
    },

    setPost: (state, action) => {
      state.post = state.posts.find((post) => post._id === action.payload);
      state.loading = false;
    },

    postNewJob: (state, action) => {
      state.posts = [...state.posts, action.payload],
        state.loading = false;
    },

    updatePost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id !== action.payload._id ? post : { ...action.payload }
      );

      state.loading = false;
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const {
  setAllPost,
  setPost,
  postNewJob,
  updatePost,
  deletePost,
  setLoading,
} = jobPostReducer.actions;

export const selectJobPosts = (state) => state.job;

export default jobPostReducer.reducer;
