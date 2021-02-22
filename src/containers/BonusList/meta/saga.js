import { all, takeLatest, put, call } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";

function* getBonus() {
  try {
    console.log('getBonus saga');
    const response = yield fetch('../../../data/bonus.json');
    yield put(actions.getBonusListSuccess(response));
  } catch (error) {
    yield put(actions.getBonusListFailure(error));
  }
}

export default function* (){
  yield all([
    yield takeLatest(constants.GET_BONUS_LIST, getBonus),
  ]);
}
