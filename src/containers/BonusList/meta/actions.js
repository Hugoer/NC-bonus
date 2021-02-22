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
