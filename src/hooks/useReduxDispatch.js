import { useContext } from "react";
import addContext from "../context/todoContext";

export default function useReduxispatch(){
  const store = useContext(addContext);
  return store.dispatch;
}
