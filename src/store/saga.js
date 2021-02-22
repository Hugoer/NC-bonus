import {all} from 'redux-saga/effects';
import { default as bonusListSaga } from '../containers/BonusList/meta/saga';

export default function* saga() {
    yield all([
      bonusListSaga(),
    ]);
}
