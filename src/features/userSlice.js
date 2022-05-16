import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleUserHandler, getSingleUserPostsHandler } from "../utils";
let initialUserData = {
  displayUser: null,
  displayUserPosts: [],
};

export const getUser = createAsyncThunk(
  "user/singleUser",
  async ({ username }) => {
    try {
      const response = await getSingleUserHandler(username);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const getUserPosts = createAsyncThunk(
  "user/singleUserPosts",
  async ({ username }) => {
    try {
      const response = await getSingleUserPostsHandler(username);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialUserData,
  reducers: {},
  extraReducers: {
    [getUser.fulfilled]: (state, { payload: displayUser }) => {
      state.displayUser = displayUser.user;
    },
    [getUserPosts.fulfilled]: (state, { payload: displayUserPosts }) => {
      state.displayUserPosts = displayUserPosts.posts;
    },
  },
});
// export const {} = userSlice.actions;
export const userReducer = userSlice.reducer;
