import React, { useContext } from "react";
import { CartContext } from "../context/GlobalState";
const Cart = () => {
  const context = useContext(CartContext);
  return (
    <div className="cart">
      {context.cart.length ? null : "There is no product in cart"}
      <ul>
        {context.cart.map((product) => (
          <li key={product.id}>
            <b>
              {product.name}({product.quantity})
            </b>

            <button onClick={context.removeFromCart.bind(this, product.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
