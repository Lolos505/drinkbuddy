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
  const removeDrinkFromFavoriteslist = (idDrink) => {
    dispatch({ type: "REMOVE_DRINK_FROM_FAVORITESLIST", payload: idDrink });
  };

  const addDrinkToFavorites = (drink) => {
    dispatch({ type: "ADD_DRINK_TO_FAVORITES", payload: drink });
  };

  return (
    <GlobalContext.Provider
      value={{
        favoriteslist: state.favoriteslist,
        removed: state.removed,
        addDrinkToFavoriteslist,
        removeDrinkFromFavoriteslist,
        addDrinkToFavorites,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
