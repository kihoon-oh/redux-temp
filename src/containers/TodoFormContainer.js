import { useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addTodo } from "../redux/modules/todos";

// const TodoFormContainer = connect( ()=>({}) , (dispatch)=>({
//   add : (text)=>{
//     dispatch(addTodo(text));
//   }
// }))(TodoForm);

function TodoFormContainer(){
  const dispatch = useDispatch();

  const add = useCallback(
    (text)=>{
      dispatch(addTodo(text));
    }
  );
  return <TodoForm add={add}/>
}

export default TodoFormContainer;