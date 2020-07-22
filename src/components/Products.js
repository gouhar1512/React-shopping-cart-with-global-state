import React, { useContext } from "react";
import { CartContext } from "../context/GlobalState";
const Products = () => {
  const context = useContext(CartContext);
  return (
    <div className="products">
      <ul>
        {context.products.map((product) => (
          <li key={product.id}>
            <b>{product.name}</b>
            <button onClick={context.addToCart.bind(this, product)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
