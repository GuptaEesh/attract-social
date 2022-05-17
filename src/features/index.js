export {
  postsReducer,
  getPosts,
  putPost,
  likeThePost,
  disLikeThePost,
  addToBookMarks,
  removeFromBookMarks,
  getBookMarkedPosts,
} from "./postsSlice";

export { userReducer, getUser, getUserPosts } from "./userSlice";

export { authReducer, login, logout, signup, handlePass } from "./authSlice";
