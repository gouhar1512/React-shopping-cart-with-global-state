import React, { useState } from "react";

export const CartContext = React.createContext();
const GlobalState = (props) => {
  const products = [
    { id: 1, name: "Mobile", quantity: 1 },
    { id: 2, name: "Laptop", quantity: 1 },
    { id: 3, name: "Keyboard", quantity: 1 },
    { id: 4, name: "Mouse", quantity: 1 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push(product);
    } else {
      const updatedItem = updatedCart[updatedItemIndex];
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = [...cart];
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
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        products: products,
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default GlobalState;
