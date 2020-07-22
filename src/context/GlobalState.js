import React, { useReducer } from "react";
import { reducer, ADD_TO_CART, REMOVE_FROM_CART } from "./cartReducer";
export const CartContext = React.createContext();

const GlobalState = (props) => {
  const products = [
    { id: 1, name: "Mobile" },
    { id: 2, name: "Laptop" },
    { id: 3, name: "Keyboard" },
    { id: 4, name: "Mouse" },
  ];

  const initialState = {
    cart: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );
    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = updatedCart[updatedItemIndex];
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    dispatch({
      type: ADD_TO_CART,
      payload: updatedCart,
    });
  };

  const removeFromCart = (productId) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === productId
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
    dispatch({
      type: REMOVE_FROM_CART,
      payload: updatedCart,
    });
  };

  return (
    <CartContext.Provider
      value={{
        products: products,
        cart: state.cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default GlobalState;
