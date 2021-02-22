import { initialState } from './reducer';

export const select = state => state.bonusList || initialState;
export const bonusListSelector = state => select(state).bonusList;
