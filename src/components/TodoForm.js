import { useCallback, useRef } from "react";
import useReduxDispatch from "../hooks/useReduxDispatch";
import { addTodo } from "../redux/actions";

export default  function TodoForm(){
  const inputRef = useRef();
  const dispatch = useReduxDispatch();
  const click = useCallback( ()=>{
    dispatch(addTodo(inputRef.current.value));
  });
  return (
    <div>
      <input ref={inputRef}></input>
      <button onClick={click}>click</button>
    </div>
  );
}