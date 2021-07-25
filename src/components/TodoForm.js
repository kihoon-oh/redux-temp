import { useCallback, useRef } from "react";

export default function TodoForm({add}){
  const inputRef = useRef();
  const click = useCallback( ()=>{
    add(inputRef.current.value);
  },[]);
  return (
    <div>
      <input ref={inputRef}></input>
      <button onClick={click}>click</button>
    </div>
  );
}

