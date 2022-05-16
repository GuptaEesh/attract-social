import { useDispatch, useSelector } from "react-redux"

export const useAuth=()=>{
    const {token,user,error,loading}=useSelector(state=>state.auth);
    const dispatchAuth=useDispatch();
    return {state:{token,user,error,loading},dispatchAuth};
}