import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {db} from "./firebase"
class App extends React.Component {
  constructor() {
    super();
  
    this.state = {
      products: [],
      loading:true
    };
  }

  componentDidMount (){

    db.collection("products")
    .get()
    .then((snapshot)=>{
      // console.log(snapshot.docs);
      snapshot.docs.map((doc)=>{
        // console.log(doc.data());
      })

      const products = snapshot.docs.map((doc)=>{
        // console.log(doc);
        const data = doc.data()
        data.id = doc.id
        // console.log(data);
        return data
      })
      this.setState({
        products,
        loading:false 
      })
    })
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

getCartCount = ()=>{
  const {products} = this.state
  let count = 0;
  products.forEach((product)=>{
    count += product.qty
  })
  return count;
}

getCartTotal = ()=>{
  const {products} = this.state
  let cartTotal = 0;
  products.map((product)=>{
    cartTotal = cartTotal + product.qty * product.price
  })

  return cartTotal;
}

  render() {
   
    const { products , loading} = this.state;
    return (
      <>
        <Navbar count = {this.getCartCount()}/>
        <Cart 
         products={products} 
          handleInc = {this.increaseQuantity}   
          handleDec = {this.decreaseQuantity}
          onDelete = {this.handleDeleteProduct}
        />
        
        {loading && <h1>Loading products...</h1>}
        <div style={{fontSize:20,padding:10}}>Total : {this.getCartTotal()}</div>
      </>
    );
  }
}

export default App;
