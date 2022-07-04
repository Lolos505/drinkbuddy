import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favoriteslist: localStorage.getItem("favoriteslist")
    ? JSON.parse(localStorage.getItem("favoriteslist"))
    : [],
  removed: localStorage.getItem("removed")
    ? JSON.parse(localStorage.getItem("removed"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favoriteslist", JSON.stringify(state.favoriteslist));
    localStorage.setItem("removed", JSON.stringify(state.removed));
  }, [state]);

  // actions
  const addDrinkToFavoriteslist = (drink) => {
    dispatch({ type: "ADD_DRINK_TO_FAVORITESLIST", payload: drink });
  };

  // action remove from favorites
  const removeFromFavorites = (id) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        favoriteslist: state.favoriteslist,
        removed: state.removed,
        addDrinkToFavoriteslist,
        removeFromFavorites,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
