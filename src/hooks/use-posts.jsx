import { useDispatch, useSelector } from "react-redux";

export const usePosts = () => {
  const { allPosts, bookmarkedPosts, sortByDate, trending } = useSelector(
    (state) => state.posts
  );
  const dispatchPosts = useDispatch();
  return {
    state: { allPosts, bookmarkedPosts, sortByDate, trending },
    dispatchPosts,
  };
};
