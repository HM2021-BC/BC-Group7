const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PETS":
      return {
        ...state,
        pets: pets,
      };
    default:
      return state;
  }
};

export default reducer;
