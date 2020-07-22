import React, { useContext } from "react";
import { CartContext } from "../context/GlobalState";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const context = useContext(CartContext);
  let totalProducts = context.cart.reduce(
    (total, curr) => total + curr.quantity,
    0
  );
  return (
    <div className="navbar">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">Cart({totalProducts})</NavLink>
    </div>
  );
};

export default Navbar;
