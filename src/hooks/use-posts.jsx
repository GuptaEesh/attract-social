import { useDispatch, useSelector } from "react-redux"

export const usePosts=()=>{
    const {userPosts,allPosts,bookmarkedPosts,likesList}=useSelector(state=>state.posts);
    const dispatchPosts=useDispatch();
    return {state:{userPosts,allPosts,bookmarkedPosts,likesList},dispatchPosts};
}