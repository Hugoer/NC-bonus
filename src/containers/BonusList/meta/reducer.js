import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  bonusList: [],
  bonusListLoading: false,
  bonusListLoaded: false,
  bonusListFailure: false,
};

const BonusList = (state = initialState, action) => 
  produce(state, draft => {
    switch (action.type) {
      case constants.GET_BONUS_LIST:
        draft = {
          ...draft,
          bonusList: [],
          bonusListLoading: false,
          bonusListLoaded: false,
          bonusListFailure: false,
        };
        break;
      case constants.GET_BONUS_LIST_SUCCESS:
        return draft = {
          ...draft,
          bonusList: action.payload,
          bonusListLoading: false,
          bonusListLoeaded: true,
          bonusListFailure: false,
        };
      case constants.GET_BONUS_LIST_FAILURE:
        return draft = {
          ...draft,
          bonusList: [],
          bonusListLoading: false,
          bonusListLoeaded: false,
          bonusListFailure: true,
        };
      default:
        break;
    }
  });

export default BonusList;
