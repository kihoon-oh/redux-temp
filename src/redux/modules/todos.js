// 액션타입
const TODO_ADD = 'redux-start/todos/TODO_ADD';
const TODO_DONE = 'redux-start/todos/TODO_DONE';

// 액션 생성자
export function addTodo(todo){
  return{
    type : TODO_ADD,
    todo
  }
}

export function todoDone(idx){
  return{
    type : TODO_ADD,
    idx
  }
}

// 초기값
const initialState = [];

//리듀서
export default function todoReducer(prestate=initialState,action){
  if(action.type === TODO_ADD){
    return [
      ...prestate,
      {  text : action.todo , done :false }
    ]
  }

  if(action.type === TODO_DONE){
    return prestate.map((state,idx)=>{
      if(idx === action.idx){
        return {...state, done:true};
      }
      return state;
    })
  }

  return prestate;
}