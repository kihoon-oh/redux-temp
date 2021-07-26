// 액션타입
const FILTER_ALL = 'redux-start/filter/FILTER_ALL';
const FILTER_DONE = 'redux-start/filter/FILTER_DONE';

// 액션 생성자
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

// 초기값
const initialState = 'ALL';

// 리듀서
export default function filterReducer(prestate=initialState,action){
  if(action.type === FILTER_ALL){
    return 'ALL';
  }
  if(action.type === FILTER_DONE){
    return 'DONE'
  }
  return prestate;
}