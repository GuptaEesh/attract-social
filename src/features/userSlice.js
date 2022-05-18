import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getSingleUserHandler,
  getSingleUserPostsHandler,
  getAllUsersHandler,
  followUserHandler,
  unFollowUserHandler,
  updateAuthUser,
} from "../utils";
let initialUserData = {
  displayUser: null,
  displayUserPosts: [],
  allUsers: [],
};

export const getAllUsers = createAsyncThunk("user/allUsers", async () => {
  try {
    const response = await getAllUsersHandler();
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

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

export const followUser = createAsyncThunk(
  "user/followUser",
  async ({ followUserId, token, setFollowLoader }) => {
    try {
      setFollowLoader(true);
      const response = await followUserHandler(followUserId, token);
      await updateAuthUser(response.data.user, token);
      setFollowLoader(false);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);
export const unFollowUser = createAsyncThunk(
  "user/followUser",
  async ({ followUserId, token, setFollowLoader }) => {
    try {
      setFollowLoader(true);
      const response = await unFollowUserHandler(followUserId, token);
      await updateAuthUser(response.data.user, token);
      setFollowLoader(false);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialUserData,
  reducers: {
    resetUserProfile: (state) => {
      state.displayUser = null;
      state.displayUserPosts = [];
    },
  },
  extraReducers: {
    [getUser.fulfilled]: (state, { payload: displayUser }) => {
      state.displayUser = displayUser.user;
    },
    [getUserPosts.fulfilled]: (state, { payload: displayUserPosts }) => {
      state.displayUserPosts = displayUserPosts.posts;
    },
    [getAllUsers.fulfilled]: (state, { payload: users }) => {
      state.allUsers = users.users;
    },
    [followUser.fulfilled]: (state, { payload: { user, followUser } }) => {
      state.allUsers = state.allUsers.map((userCheck) =>
        userCheck.username === user.username ? user : userCheck
      );
      state.allUsers = state.allUsers.map((userCheck) =>
        userCheck.username === followUser.username ? followUser : userCheck
      );
      localStorage.setItem("user", JSON.stringify(user));
      state.displayUser = followUser;
    },
    [unFollowUser.fulfilled]: (state, { payload: { user, followUser } }) => {
      state.allUsers = state.allUsers.map((userCheck) =>
        userCheck.username === user.username ? user : userCheck
      );
      state.allUsers = state.allUsers.map((userCheck) =>
        userCheck.username === followUser.username ? followUser : userCheck
      );
      localStorage.setItem("user", JSON.stringify(user));
      state.displayUser = followUser;
    },
  },
});
export const { resetUserProfile } = userSlice.actions;
export const userReducer = userSlice.reducer;
