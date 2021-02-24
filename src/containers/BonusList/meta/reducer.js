import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  bonusList: [],
  bonusListLoading: false,
  bonusListLoaded: false,
  bonusListFailure: false,

  bonusAddLoading: false,
  bonusAddLoaded: false,
  bonusAddFailure: false,
};

const BonusList = (state = initialState, action) => 
  produce(state, draft => {
    switch (action.type) {
      case constants.GET_BONUS_LIST:
        draft.bonusList = [];
        draft.bonusListLoading = false;
        draft.bonusListLoaded = false;
        draft.bonusListFailure = false;
        break;
      case constants.GET_BONUS_LIST_SUCCESS:
        draft.bonusList = action.payload;
        draft.bonusListLoading = false;
        draft.bonusListLoaded = true;
        draft.bonusListFailure = false;
        break;
      case constants.GET_BONUS_LIST_FAILURE:
        draft.bonusList = [];
        draft.bonusListLoading = false;
        draft.bonusListLoaded = false;
        draft.bonusListFailure = true;
        break;
      case constants.ADD_BONUS:
        draft.bonusAddLoading = true;
        draft.bonusAddLoaded = false;
        draft.bonusAddFailure = false;
        break;
      case constants.ADD_BONUS_SUCCESS:
        draft.bonusList = [...draft.bonusList, action.payload];
        draft.bonusAddLoading = false;
        draft.bonusAddLoaded = true;
        draft.bonusAddFailure = false;
        break;
      case constants.ADD_BONUS_FAILURE:
        draft.bonusAddLoading = false;
        draft.bonusAddLoaded = false;
        draft.bonusAddFailure = true;
        break;
      default:
        break;
    }
  });

export default BonusList;
