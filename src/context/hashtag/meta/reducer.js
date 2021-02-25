import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  hasthtagsList: {},
  hasthtagsListLoading: false,
  hasthtagsListLoaded: false,
  hasthtagsListFailure: false,
};

const HashtagsList = (state = initialState, action) => 
  produce(state, draft => {
    switch (action.type) {
      case constants.GET_HASHTAGS_LIST:
        draft.hasthtagsList = {};
        draft.hasthtagsListLoading = false;
        draft.hasthtagsListLoaded = false;
        draft.hasthtagsListFailure = false;
        break;
      case constants.GET_HASHTAGS_LIST_SUCCESS:
        draft.hasthtagsList = {
          ...state.hasthtagsList, 
          ...action.payload
        };
        draft.hasthtagsListLoading = false;
        draft.hasthtagsListLoaded = true;
        draft.hasthtagsListFailure = false;
        break;
      case constants.GET_HASHTAGS_LIST_FAILURE:
        draft.hasthtagsList = {};
        draft.hasthtagsListLoading = false;
        draft.hasthtagsListLoaded = false;
        draft.hasthtagsListFailure = true;
        break;
      default:
        break;
    }
  });

export default HashtagsList;
