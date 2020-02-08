import React, { useReducer, useContext } from "react";
import produce from "immer";

const PhishStateContext = React.createContext();
const PhishDispatchContext = React.createContext();

const INITIAL_STATE = {
  searching: false,
  searchResults: {
    songs: [],
    venues: [],
    tours: []
  },
  selectedCategory: "Songs",
  selected: {
    songs: [],
    venues: [],
    tours: []
  }
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_SEARCHING":
      return {
        ...state,
        searching: payload
      };
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: payload
      };
    case "SET_SONGS":
      return {
        ...state,
        songs: payload
      };
    case "SET_CATEGORY":
      return {
        ...state,
        selectedCategory: payload
      };
    case "SET_SELECTED_SONGS":
      return produce(state, draft => {
        draft.selected.songs = payload;
      });
    default:
      throw new Error(`Unknown action: ${type}`);
  }
};

export const PhishProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <PhishDispatchContext.Provider value={dispatch}>
      <PhishStateContext.Provider value={state}>
        {children}
      </PhishStateContext.Provider>
    </PhishDispatchContext.Provider>
  );
};

export const usePhish = () => useContext(PhishStateContext);
export const useDispatchPhish = () => useContext(PhishDispatchContext);
