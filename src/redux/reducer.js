import * as types from "./actionTypes";

const initialState = {
  cocktails: [],
  cocktail: [],
  loading: false,
  error: null,
  favouriteslist: localStorage.getItem("favoriteslist")
    ? JSON.parse(localStorage.getItem("favoriteslist"))
    : [],
  removed: localStorage.getItem("removed")
    ? JSON.parse(localStorage.getItem("removed"))
    : [],
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

    // Add drink to favorites
    case types.ADD_DRINK_TO_FAVOURITES_START:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_DRINK_TO_FAVOURITES_SUCCESS:
      return {
        ...state,
        favouriteslist: [action.payload, ...state.favouriteslist],
      };
    case types.ADD_DRINK_TO_FAVOURITES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // end of add drink to favorites

    // Remove drink from favorites
    case types.REMOVE_FROM_FAVOURITES_START:
      return {
        ...state,
        loading: true,
      };
    case types.REMOVE_FROM_FAVOURITES_SUCCESS:
      return {
        ...state,
        favouriteslist: state.favouriteslist.filter(
          (drink) => drink.id !== action.payload
        ),
      };
    case types.REMOVE_FROM_FAVOURITES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // end of remove drink from favorites
    default:
      return state;
  }
};

export default cockTailReducer;
