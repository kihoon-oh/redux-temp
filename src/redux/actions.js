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


//
// GITHUB API 호출 시작
export const GET_USERS_START = 'GET_USERS_START';

// GITHUB API 호출 성공
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'; 

// GITHUB API 호출 실패
export const GET_USERS_FAIL = 'GET_USERS_FAIL'; 

export function getUsersStart(){
  return{
    type : GET_USERS_START
  }
}

export function getUsersSuccess(data){
  return{
    type : GET_USERS_SUCCESS,
    data
  }
}

export function getUsersFail(error){
  return{
    type : GET_USERS_FAIL,
    error
  }
}

export function getUsersThunk(){
  return async (dispatch)=>{
    try{
      dispatch(getUsersStart());
      const res= await fetch("https://api.github.com/users");
      if(!res.ok){
        throw new Error('서버에러');
      }
      dispatch(getUsersSuccess(await res.json()));
    }catch(e){
      dispatch(getUsersFail(e));
    }
  }
}

const GET_USERS = 'GET_USERS';

export const GET_USERS_PENDING='GET_USERS_PENDING';
export const GET_USERS_FULFILLED='GET_USERS_FULFILLED';
export const GET_USERS_REJECTED='GET_USERS_REJECTED';

export function getUsersPromise(){
  return {
    type: GET_USERS,
    payload: async ()=>{
      const res= await fetch("https://api.github.com/users");
      if(!res.ok){
        throw new Error('서버에러');
      }
      return await res.json();
    }
  }
}