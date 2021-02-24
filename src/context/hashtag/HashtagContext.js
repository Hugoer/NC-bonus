import React, { createContext, useReducer, useState } from "react";
import { initialState, default as HashtagsListReducer } from './meta/reducer';

export const HashtagStateContext = createContext();
export const HashtagDispatchContext = createContext();

export function HashtagContextProvider({children}) {
  const [state, dispatch] = useReducer(HashtagsListReducer, initialState);

  return (
    <HashtagStateContext.Provider value={state}>
      <HashtagDispatchContext.Provider value={dispatch}>
        {children}
      </HashtagDispatchContext.Provider>
    </HashtagStateContext.Provider>
  );
};

export function useHashtagState() {
  const context = React.useContext(HashtagStateContext)
  if (context === undefined) {
    throw new Error('useHashtagState must be used within a HashtagContextProvider')
  }
  return context
}

export function useHashtagDispatch() {
  const context = React.useContext(HashtagDispatchContext)
  if (context === undefined) {
    throw new Error('useHashtagDispatch must be used within a HashtagContextProvider')
  }
  return context
}