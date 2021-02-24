import { all, takeLatest, put, call } from 'redux-saga/effects';
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
    yield put(actions.AddBonusSuccess(bonus));
  } catch (error) {
    yield put(actions.AddBonusFailure(error));
  }
}

export default function* (){
  yield all([
    yield takeLatest(constants.GET_BONUS_LIST, getBonus),
    yield takeLatest(constants.ADD_BONUS, addBonus),
  ]);
}
