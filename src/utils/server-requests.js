import axios from "axios";
import { apiRoutes } from "./constants";
const getConfig = (token) => ({ headers: { authorization: token } });
export const loginHandler = async (username, password) => {
  return await axios.post(apiRoutes.login, {
    username,
    password,
  });
};
export const signUpHandler = async (formData) => {
  return await axios.post(apiRoutes.signup, formData);
};
export const getSingleUserHandler = async (username) => {
  return await axios.get(`/api/users/${username}`);
};
export const getSingleUserPostsHandler = async (username) => {
  return await axios.get(`/api/posts/user/${username}`);
};
export const getAllPostsHandler = async (username) => {
  return await axios.get(apiRoutes.allPosts);
};
export const putPostHandler = async (content, token) => {
  return await axios.post(
    apiRoutes.allPosts,
    { postData: content },
    getConfig(token)
  );
};
export const likePostHandler = async (id, token) => {
  return await axios.post(`/api/posts/like/${id}`, {}, getConfig(token));
};
export const disLikePostHandler = async (id, token) => {
  return await axios.post(`/api/posts/dislike/${id}`, {}, getConfig(token));
};
export const bookMarkPostHandler = async (id, token) => {
  return await axios.post(`/api/users/bookmark/${id}`, {}, getConfig(token));
};
export const removeBookMarkPostHandler = async (id, token) => {
  return await axios.post(
    `/api/users/remove-bookmark/${id}`,
    {},
    getConfig(token)
  );
};
export const getBookMarksHandler = async (token) => {
  return await axios.get(apiRoutes.bookmarkedPosts, getConfig(token));
};
