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
    // .where("price",">",100)
    // .where("title","==","laptop")
    .orderBy("price","desc")
    .onSnapshot((snapshot)=>{
 
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
   
    // products[index].qty += 1;
   
    // this.setState({
    //     products 
    // })
  const docRef = db.collection("products").doc(products[index].id) 
  docRef.update({
    qty: products[index].qty + 1
  })
  .then(()=>{
    console.log("docu updated");
  })
  .catch((err)=>{
   console.log(err);
  })


}

decreaseQuantity = (product)=>{
    const {products} = this.state
    const index = products.indexOf(product)
   if (products[index].qty ===0) {
       return
   }
    
    // products[index].qty -= 1 
    // this.setState({
    //     products
        
    // })

const docRef = db.collection("products").doc(products[index].id)
docRef.update({
  qty : products[index].qty - 1
})
.then(()=>{
  console.log("product updated");
})
.catch((err)=>{
  console.log(err);
})


}

handleDeleteProduct = (id)=>{
    const {products} = this.state
    // const items = products.filter((item)=>item.id !== id)
    // this.setState({
    //     products:items
    // })
    const docRef = db.collection("products").doc(id)
    docRef.delete()
    .then(()=>{
      console.log("delete success");
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

// addProduct(){
//   db.collection("products")
//   .add({img:"",
//         title:"washing machine",
//         price:"10000",
//         qty:1
// }).then((product)=>{
//   console.log(product);
// })

// }

  render() {
   
    const { products , loading} = this.state;
    return (
      <>
        <Navbar count = {this.getCartCount()}/>
        {/* <button onClick={this.addProduct}>add product</button> */}
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
