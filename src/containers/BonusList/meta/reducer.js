import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  bonusList: [],
  bonusListLoading: false,
  bonusListLoeaded: false,
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
          bonusListLoeaded: false,
          bonusListFailure: false,
        };
        break;
      case constants.GET_BONUS_LIST_SUCCESS:
        draft = {
          ...draft,
          bonusList: action.payload,
          bonusListLoading: false,
          bonusListLoeaded: true,
          bonusListFailure: false,
        };
        break;
      case constants.GET_BONUS_LIST_SUCCESS:
        draft = {
          ...draft,
          bonusList: [],
          bonusListLoading: false,
          bonusListLoeaded: false,
          bonusListFailure: true,
        };
        break;          
      default:
        break;
    }
  });

export default BonusList;
