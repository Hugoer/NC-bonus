import { initialState } from './reducer';

export const select = state => state.bonusList || initialState;

export const bonusListSelector = state => select(state).bonusList;
export const bonusListLoading = state => select(state).bonusListLoading;
export const bonusListLoaded = state => select(state).bonusListLoaded;
export const bonusListFailure = state => select(state).bonusListFailure;

export const addBonusLoading = state => select(state).addBonusLoading;
export const addBonusLoaded = state => select(state).addBonusLoaded;
export const addBonusFailure = state => select(state).addBonusFailure;
