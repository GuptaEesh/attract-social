let filterPostsOnDate = (filters, posts) => {
  switch (filters.sortByDate) {
    case "OLDEST":
      return [...posts].sort(
        (post1, post2) => new Date(post1.createdAt) - new Date(post2.createdAt)
      );
    case "LATEST":
      return [...posts].sort(
        (post1, post2) => new Date(post2.createdAt) - new Date(post1.createdAt)
      );
    default:
      return posts;
  }
};
let trendingPosts = (filters, posts) =>
  filters.trending
    ? [...posts].sort(
        (post1, post2) => post2.likes.likeCount - post1.likes.likeCount
      )
    : posts;

let getFiltered =
  (...fns) =>
  (filters, allPosts) =>
    fns.reduce((acc, curr) => curr(filters, acc), allPosts);
export { filterPostsOnDate, trendingPosts, getFiltered };
