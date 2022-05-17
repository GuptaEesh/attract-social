export {
  postsReducer,
  getPosts,
  putPost,
  likeThePost,
  disLikeThePost,
  addToBookMarks,
  removeFromBookMarks,
  getBookMarkedPosts,
  sortByDateHandler,
  trendHandler,
  clearFiltersHandler,
} from "./postsSlice";

export {
  userReducer,
  getUser,
  getUserPosts,
  getAllUsers,
  followUser,
  unFollowUser,
} from "./userSlice";

export { authReducer, login, logout, signup, handlePass } from "./authSlice";
