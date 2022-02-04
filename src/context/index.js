import React, { useReducer, createContext } from 'react';

const initialState = {
  archive: [],
  searchText: ''
};
const ls =  localStorage.getItem('archive')
if ( ls ) initialState.archive = JSON.parse(ls)


const Context = createContext();

const actions = {
  addNoteToArchive: (note) => {
    return {
        type: 'ADD_NOTE_TO_ARCHIVE',
        payload: note,
    }
  },
  changeSearchText: (searchText) => {
    return {
        type: 'CHANGE_SEARCH_TEXT',
        payload: searchText,
    }
  },
  deleteNotesOfArchive: (id) => {
    return {
        type: 'DELETE_NOTE',
        payload: id,
    }
  }
}

const saveArchive = (archive) => {
  localStorage.setItem("archive", JSON.stringify(archive));
}
const reducer = (state, action) => {
  let newState = {
        ...state
      }
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      newState.searchText = action.payload
      return newState;

    case 'ADD_NOTE_TO_ARCHIVE':
      newState.archive.push(action.payload)
      saveArchive(newState.archive)
      return newState;

     case 'DELETE_NOTE':
      const filteredNotes = newState.archive.filter((note) => note.id !== action.payload)
      newState = {
        ...state,
        archive: filteredNotes
      }
      saveArchive(newState.archive)
      return newState;
  
    default:
      return newState

  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export { Context, Provider, actions };
