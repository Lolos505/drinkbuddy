export default (state, action) => {
  switch (action.type) {
    case "ADD_DRINK_TO_FAVORITESLIST":
      return {
        ...state,
        favoriteslist: [action.payload, ...state.favoriteslist],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favoriteslist: state.favoriteslist.filter(
          (drink) => drink.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
