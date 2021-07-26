import { applyMiddleware, createStore } from "redux";
import reducer from "./modules/reducer";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

// function middleware1(store){
//   console.log('middleware1',0);
//   return (next)=>{
//     console.log('middleware1',1);
//     return action =>{
//       console.log('middleware1',2);
//       const returnvalue = next(action);
//       console.log('middleware1',3);
//       return returnvalue;
//     }
//   }
// }

 const store = createStore(
   reducer,
   composeWithDevTools(applyMiddleware(thunk,promise))
 );

 export default store;