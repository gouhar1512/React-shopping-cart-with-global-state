export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const reducer = (state, action) => {
  console.log("reducer triggered");
  console.log("state", state, action.payload);
  switch (action.type) {
    case ADD_TO_CART:
      return action.payload;
    case REMOVE_FROM_CART:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
