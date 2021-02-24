import * as constants from './constants';

export const getBonusList = () => ({
  type: constants.GET_BONUS_LIST
});

export const getBonusListSuccess = (payload) => ({
  type: constants.GET_BONUS_LIST_SUCCESS,
  payload,
});

export const getBonusListFailure = (payload) => ({
  type: constants.GET_BONUS_LIST_FAILURE,
  payload,
});

export const addBonus = (payload) => ({
  type: constants.ADD_BONUS,
  payload,
});

export const addBonusSuccess = (payload) => ({
  type: constants.ADD_BONUS_SUCCESS,
  payload,
});

export const addBonusFailure = (payload) => ({
  type: constants.ADD_BONUS_FAILURE,
  payload,
});
