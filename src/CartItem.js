import React from "react";

class CartItem extends React.Component {


increaseQuantity = ()=>{
    // console.log("this.state",this.state);
    this.setState({
        qty : this.state.qty + 1
    })
    // this.setState((prevState)=>{
    //    return {
    //        qty: prevState.qty +1
    //    }
    // })
}

decreaseQuantity = ()=>{
   const {qty} = this.state
   if (qty ===0) {
       return
   }

   this.setState((state)=>{
       return {
           qty : state.qty - 1
       }
    })
}

  render() {
    const { price, title, qty } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img src="" alt="" style={styles.images} />
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
              onClick={this.increaseQuantity}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              className="action-icons"
              alt="decrease"
              onClick={this.decreaseQuantity}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              className="action-icons"
              alt="delete"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  images: {
    height: 110,
    width: 110,
    borderRadius: 4,
  },
};

export default CartItem;
