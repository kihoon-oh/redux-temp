import {FILTER_ALL,FILTER_DONE} from '../actions';

const initialState = 'ALL';

export default function filterReducer(prestate=initialState,action){
  if(action.type === FILTER_ALL){
    return 'ALL';
  }
  if(action.type === FILTER_DONE){
    return 'DONE'
  }
  return prestate;
}