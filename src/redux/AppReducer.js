export default (state, action) => {
  switch (action.type) {
    case "ADD_DRINK_TO_FAVORITESLIST":
      return {
        ...state,
        favoriteslist: [action.payload, ...state.favoriteslist],
      };
    case "REMOVE_DRINK_FROM_FAVORITESLIST":
      return {
        ...state,
        favoriteslist: state.favoriteslist.filter(
          (drink) => drink.idDrink !== action.payload
        ),
      };
    case "ADD_DRINK_TO_FAVORITES":
      return {
        ...state,
        favoriteslist: state.favoriteslist.filter(
          (drink) => drink.idDrink !== action.payload
        ),
        deleted: [action.payload, ...state.deleted],
      };
    default:
      return state;
  }
};
