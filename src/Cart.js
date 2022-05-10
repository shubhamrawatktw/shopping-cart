import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    const {products} = props
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            handleInc={props.handleInc}
            handleDec={props.handleDec}
            onDelete={props.onDelete}
          />
        );
      })}
    </div>
  );
};

export default Cart;
