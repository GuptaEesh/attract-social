import axios from "axios";
import { apiRoutes } from "./constants";

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
