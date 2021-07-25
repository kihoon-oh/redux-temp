export const TODO_ADD = 'TODO_ADD';
export const TODO_DONE = 'TODO_DONE';
export const FILTER_ALL = 'FILTER_ALL';
export const FILTER_DONE = 'FILTER_DONE';

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

export function filter_ALL(){
  return{
    type : FILTER_ALL,
  }
}

export function filter_DONE(){
  return{
    type : FILTER_DONE,
  }
}