const reducer = (state, action) => {
  switch (action.type) {
    case "'SET_ERROR_MESSAGE'":
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    case "'SET_PETS'":
      return {
        ...state,
        pets: action.pets,
      };
    default:
      return state;
  }
};

export default reducer;
