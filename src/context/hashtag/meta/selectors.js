import { initialState } from './reducer';

export const select = state => state.hashtagsList || initialState;

export const hashtagsListSelector = state => select(state).hashtagsList;
export const hashtagsListLoading = state => select(state).hashtagsListLoading;
export const hashtagsListLoaded = state => select(state).hashtagsListLoaded;
export const hashtagsListFailure = state => select(state).hashtagsListFailure;