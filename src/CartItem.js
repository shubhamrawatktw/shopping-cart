import React from "react";

const CartItem = (props) => {
  // console.log(props);
  const { price, title, qty ,img} = props.product;
  const { product, handleInc, handleDec, onDelete } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img src={img} alt="" style={styles.images} />
      </div>

      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>{price}</div>
        <div style={{ color: "#777" }}>{qty}</div>
        <div className="cart-item-actions">
          {/* buttons */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            className="action-icons"
            alt="increase"
            onClick={() => handleInc(product)}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            className="action-icons"
            alt="decrease"
            onClick={() => handleDec(product)}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            className="action-icons"
            alt="delete"
            onClick={() => {
              onDelete(product.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  images: {
    height: 110,
    width: 110,
    borderRadius: 4,
  },
};

export default CartItem;
