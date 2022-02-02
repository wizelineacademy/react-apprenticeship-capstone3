import React, { useReducer, createContext } from 'react';

const initialState = {
  archive: [],
  searched: [],
};

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTES_TO_ARCHIVE':
      return { ...state, ...action.payload };
      case 'SAVE_SEARCHED_NOTES':
        return { ...state, ...action.payload };
      case 'DELETE_NOTE':
          return { ...state, ...action.payload };
    default:
      throw new Error('App is having code issues');
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export { Context, Provider };
