import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "watch",
          qty: 10,
          img: "",
          id: 1,
        },
        {
          price: 999,
          title: "phone",
          qty: 4,
          img: "",
          id: 2,
        },
        {
          price: 999,
          title: "laptop",
          qty: 1,
          img: "",
          id: 3,
        },
      ],
    };
  }

  increaseQuantity = (product)=>{
     
    const {products} = this.state
    const index = products.indexOf(product)
   
    products[index].qty += 1;
   
    this.setState({
        products 
    })
 
}

decreaseQuantity = (product)=>{
    const {products} = this.state
    const index = products.indexOf(product)
   if (products[index].qty ===0) {
       return
   }
    
    products[index].qty -= 1 
    this.setState({
        products
    })
}

handleDeleteProduct = (id)=>{
    const {products} = this.state
    const items = products.filter((item)=>item.id !== id)
    this.setState({
        products:items
    })
}
    

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem 
          product={product} 
          key={product.id} 
          handleInc = {this.increaseQuantity}   
          handleDec = {this.decreaseQuantity}
          onDelete = {this.handleDeleteProduct}
          />;
        })}
      </div>
    );
  }
}

export default Cart;
