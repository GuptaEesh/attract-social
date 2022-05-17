import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllPostsHandler,
  putPostHandler,
  likePostHandler,
  disLikePostHandler,
  bookMarkPostHandler,
  removeBookMarkPostHandler,
  getBookMarksHandler,
} from "../utils";

const initialPostData = {
  allPosts: [],
  bookmarkedPosts: [],
  sortByDate: null,
  trending: false,
};

export const getPosts = createAsyncThunk("posts/all", async () => {
  try {
    const response = await getAllPostsHandler();
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const putPost = createAsyncThunk(
  "posts/singlePost",
  async ({ content, token }) => {
    try {
      const response = await putPostHandler(content, token);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const likeThePost = createAsyncThunk(
  "posts/like",
  async ({ postId, token, setLoaders }) => {
    try {
      setLoaders((loaders) => ({ ...loaders, likeLoader: true }));
      const response = await likePostHandler(postId, token);
      setLoaders((loaders) => ({ ...loaders, likeLoader: false }));
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const disLikeThePost = createAsyncThunk(
  "posts/dislike",
  async ({ postId, token, setLoaders }) => {
    try {
      setLoaders((loaders) => ({ ...loaders, likeLoader: true }));
      const response = await disLikePostHandler(postId, token);
      setLoaders((loaders) => ({ ...loaders, likeLoader: false }));

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);
export const addToBookMarks = createAsyncThunk(
  "posts/addbookamrk",
  async ({ postId, token, setLoaders }) => {
    try {
      setLoaders((loaders) => ({ ...loaders, bookmarkLoader: true }));
      const response = await bookMarkPostHandler(postId, token);
      setLoaders((loaders) => ({ ...loaders, bookmarkLoader: false }));
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);
export const removeFromBookMarks = createAsyncThunk(
  "posts/removebookmark",
  async ({ postId, token, setLoaders }) => {
    try {
      setLoaders((loaders) => ({ ...loaders, bookmarkLoader: true }));
      const response = await removeBookMarkPostHandler(postId, token);
      setLoaders((loaders) => ({ ...loaders, bookmarkLoader: false }));
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);
export const getBookMarkedPosts = createAsyncThunk(
  "posts/getbookmark",
  async ({ token }) => {
    try {
      const response = await getBookMarksHandler(token);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostData,
  reducers: {
    sortByDateHandler: (state, action) => {
      state.sortByDate = action.payload;
    },
    trendHandler: (state) => {
      state.trending = !state.trending;
    },
    clearFiltersHandler: (state) => {
      state.sortByDate = null;
      state.trending = false;
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, { payload: posts }) => {
      state.allPosts = posts.posts;
    },
    [putPost.fulfilled]: (state, { payload: posts }) => {
      state.allPosts = posts.posts;
    },
    [likeThePost.fulfilled]: (state, { payload: posts }) => {
      state.allPosts = posts.posts;
    },
    [disLikeThePost.fulfilled]: (state, { payload: posts }) => {
      state.allPosts = posts.posts;
    },
    [addToBookMarks.fulfilled]: (state, { payload: bookmarks }) => {
      state.bookmarkedPosts = bookmarks.bookmarks;
    },
    [removeFromBookMarks.fulfilled]: (state, { payload: bookmarks }) => {
      state.bookmarkedPosts = bookmarks.bookmarks;
    },
    [getBookMarkedPosts.fulfilled]: (state, { payload: bookmarks }) => {
      state.bookmarkedPosts = bookmarks.bookmarks;
    },
  },
});

export const { sortByDateHandler, trendHandler, clearFiltersHandler } =
  postsSlice.actions;
export const postsReducer = postsSlice.reducer;
