import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList"
import { getUserSagaStart} from "../redux/modules/users";

export default function UserListContainer(){
  const users = useSelector(state=>state.users.data);
  const dispatch = useDispatch();

  const getUsers = useCallback( ()=>{
    //dispatch(getUsersThunk());
    dispatch(getUserSagaStart());
  }
  ,[dispatch]);

  return (<UserList users={users} getUsers={getUsers}/>);
}