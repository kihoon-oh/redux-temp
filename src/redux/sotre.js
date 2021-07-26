import { applyMiddleware, createStore } from "redux";
import reducer from "./modules/reducer";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { routerMiddleware } from "connected-react-router";
import history from "../history";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   composeWithDevTools(applyMiddleware(
      thunk.withExtraArgument({history}),
      promise,
      routerMiddleware(history),
      sagaMiddleware
      ))
);

sagaMiddleware.run(rootSaga);
export default store;