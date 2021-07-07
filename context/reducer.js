const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    case "SET_PETS":
      const a = {
        ...state,
        pets: action.pets,
      }
      console.log(a);
      return a;
    case "SET_USER":
      return {
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
