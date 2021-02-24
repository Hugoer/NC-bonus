import { all, takeLatest, put } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";
import { default as hashtagsList } from '../../../data/bonus.json';

function* geHashtags() {
  try {
    yield put(actions.geHashtagsListSuccess(hashtagsList));
  } catch (error) {
    yield put(actions.geHashtagsListFailure(error));
  }
}

export default function* (){
  yield all([
    yield takeLatest(constants.GET_HASHTAGS_LIST, geHashtags),
  ]);
}