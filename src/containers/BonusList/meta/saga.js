import { all, takeLatest, put } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";
import { default as bonusList } from '../../../data/bonus.json';

function* getBonus() {
  try {
    yield put(actions.getBonusListSuccess(bonusList));
  } catch (error) {
    yield put(actions.getBonusListFailure(error));
  }
}

function* addBonus(bonus) {
  try {
    yield put(actions.addBonusSuccess(bonus.payload));
  } catch (error) {
    yield put(actions.addBonusFailure(error));
  }
}

export default function* (){
  yield all([
    yield takeLatest(constants.GET_BONUS_LIST, getBonus),
    yield takeLatest(constants.ADD_BONUS, addBonus),
  ]);
}
