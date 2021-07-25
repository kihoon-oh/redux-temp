import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList"
import { getUsersFail, getUsersStart, getUsersSuccess } from "../redux/actions";

export default function UserListContainer(){
  const users = useSelector(state=>state.users.data);
  const dispatch = useDispatch();

  const getUsers = useCallback( async ()=>{
    try{
      dispatch(getUsersStart());
      const res= await fetch("https://api.github.com/users");
      if(!res.ok){
        throw new Error('서버에러');
      }
      dispatch(getUsersSuccess(await res.json()));
    }catch(e){
      dispatch(getUsersFail(e));
    }
  }
  ,[dispatch]);

  return (<UserList users={users} getUsers={getUsers}/>);
}