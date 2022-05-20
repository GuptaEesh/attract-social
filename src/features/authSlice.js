import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginHandler, signUpHandler } from "../utils";

let initialAuthData = {
  token: localStorage.getItem("token") ?? "",
  user: JSON.parse(localStorage.getItem("user")) ?? null,
  loading: false,
  error: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await loginHandler(username, password);
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response.data);
    }
  }
);
export const signup = createAsyncThunk(
  "auth/signup",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await signUpHandler(formData);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthData,
  // these are a sort of clickable actions :-
  reducers: {
    logout: (state) => {
      state.token = "";
      state.user = null;
      localStorage.clear();
    },
    handlePass: (state) => {
      state.error = "Passwords don't match";
    },
  },
  // these are a sort of auto actions that work on promise states :-
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [login.fulfilled]: (state, { payload: { encodedToken, foundUser } }) => {
      state.user = foundUser;
      state.token = encodedToken;
      state.loading = false;
      state.error = "";
      localStorage.setItem("token", encodedToken);
      localStorage.setItem("user", JSON.stringify(foundUser));
    },
    [login.rejected]: (state, { payload: errors }) => {
      state.loading = false;
      state.error = errors.errors[0].split(".")[0];
    },
    [signup.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [signup.fulfilled]: (state, { payload: { encodedToken, createdUser } }) => {
      state.user = createdUser;
      state.token = encodedToken;
      state.loading = false;
      state.error = "";
      localStorage.setItem("token", encodedToken);
      localStorage.setItem("user", JSON.stringify(createdUser));
    },
    [signup.rejected]: (state, { payload: errors }) => {
      state.loading = false;
      state.error = errors.errors[0].split(".")[0];
    },
  },
});

export const { logout, handlePass } = authSlice.actions;
export const authReducer = authSlice.reducer;
