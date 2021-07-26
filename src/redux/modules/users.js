// 액션 타입

// GITHUB API 호출 시작
const GET_USERS_START = 'redux-start/users/GET_USERS_START';

// GITHUB API 호출 성공
const GET_USERS_SUCCESS = 'redux-start/users/GET_USERS_SUCCESS'; 

// GITHUB API 호출 실패
const GET_USERS_FAIL = 'redux-start/users/GET_USERS_FAIL'; 

const GET_USERS = 'GET_USERS';

//프로미스 액션타입
const GET_USERS_PENDING='GET_USERS_PENDING';
const GET_USERS_FULFILLED='GET_USERS_FULFILLED';
const GET_USERS_REJECTED='GET_USERS_REJECTED';


//액션 생성자 

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


//초기값
const initialState ={
  loading : false,
  data: [],
  error: null,
};

//리듀서
export default function users(state =initialState, action){
  if(action.type === GET_USERS_START || action.type === GET_USERS_PENDING ){
    return {
      ...state,
      loading:true,
      error:null,
    }
  }

  if(action.type === GET_USERS_SUCCESS ){
    return {
      ...state,
      loading : false,
      data:action.data,
    }

  }

  
  if(action.type === GET_USERS_FULFILLED){
    return {
      ...state,
      loading : false,
      data: action.payload,
    }
  }

  if(action.type === GET_USERS_FAIL || action.type === GET_USERS_REJECTED){
    return {
      ...state,
      loading : false,
      error:action.error,
    }
  }

  return state;
}



// 미들웨어 

// 덩크

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

// 프로미스

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
