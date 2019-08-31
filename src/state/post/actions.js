import {
  put,
  call,
  all,
  takeLatest,
} from 'redux-saga/effects';
import * as types from './types';
import API from '../../utils/api';

export const actionFetchPosts = () => ({
  type: types.FETCH,
});

export const actionFetchPostsSuccess = (posts) => ({
  type: types.FETCH_SUCCESS,
  payload: {
    posts,
  },
});

export function* fetchPosts() {
  const { response, error } = yield call(() => API.get('posts/'));
  if (response) {
    yield put(actionFetchPostsSuccess(response));
  } else {
    console.log('FETCH ERROR:', error);
  }
}

export function* watchPostActions() {
  yield all([
    takeLatest(types.FETCH, fetchPosts),
  ]);
}
