import { all } from "redux-saga/effects";
import { usersSata } from "./users";

export default function* rootSaga(){
  yield all([usersSata()]);
}