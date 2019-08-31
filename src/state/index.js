import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import {
  postActions,
  postReducer,
} from './post';


export const rootReducer = combineReducers({
  post: postReducer,
});

export function* rootSaga() {
  yield all([
    postActions.watchPostActions(),
  ]);
}
