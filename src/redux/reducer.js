import * as types from "./actionTypes";
import { TOGGLE_FAVOURITE } from "./action";

const initialState = {
  cocktails: [],
  cocktail: [],
  favourites: [],
  loading: false,
  error: null,
};

const cockTailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COCKTAIL_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_COCKTAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        cocktails: action.payload,
      };
    case types.FETCH_COCKTAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.SEARCH_COCKTAIL_START:
      return {
        ...state,
        loading: true,
      };
    case types.SEARCH_COCKTAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        cocktails: action.payload,
      };
    case types.SEARCH_COCKTAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_SINGLE_COCKTAIL_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_SINGLE_COCKTAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        cocktail: action.payload,
      };
    case types.GET_SINGLE_COCKTAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TOGGLE_FAVOURITE:
      let cocktail = action.payload;
      let cocktailFromFavourite = state.favourites.find(
        (favCocktail) => cocktail.idDrink === favCocktail.idDrink
      );
      return {
        ...state,
        favourites: cocktailFromFavourite
          ? [
              ...state.favourites.filter(
                (cocktail) => cocktail.idDrink !== cocktailFromFavourite.idDrink
              ),
            ]
          : [...state.favourites, action.payload],
      };
    default:
      return state;
  }
};

export default cockTailReducer;
