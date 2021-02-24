import * as constants from './constants';

export const getHashtags = () => ({
  type: constants.GET_HASHTAGS_LIST
});

export const getHashtagsSuccess = (payload) => ({
  type: constants.GET_HASHTAGS_LIST_SUCCESS,
  payload,
});

export const getHashtagsFailure = (payload) => ({
  type: constants.GET_HASHTAGS_LIST_FAILURE,
  payload,
});