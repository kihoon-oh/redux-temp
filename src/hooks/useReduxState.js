import { useContext, useEffect, useState } from "react";
import addContext from "../context/todoContext";

export default function useReduxState(){
  const store = useContext(addContext);
  const [state,setState] = useState(store.getState());

  useEffect(()=>{
    store.subscribe(()=>{
      setState(store.getState());
    });
  });
  return state;
}
