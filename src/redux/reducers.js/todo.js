import {TODO_ADD,TODO_DONE} from '../actions';

const initialState = [];

export default function todoReducer(prestate=initialState,action){
  if(action.type === TODO_ADD){
    return [
      ...prestate,
      {  todo : action.todo , done :false }
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