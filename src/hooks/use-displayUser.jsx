import { useDispatch, useSelector } from "react-redux"

export const useDisplayUser=()=>{
    const {displayUser,displayUserPosts}=useSelector(state=>state.user);
    const dispatchUser=useDispatch();
    return {state:{displayUser,displayUserPosts},dispatchUser};
}