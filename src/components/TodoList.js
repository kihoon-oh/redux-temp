import useReduxState from "../hooks/useReduxState";

export default function TodoList(){
  const state = useReduxState();

  console.log(state.todo);
  return (
    <ul>
      {
        state.todo.map(todo=>
          <li>{todo.todo}</li>
        )
      }
    </ul>
  );

}