import React from 'react'

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price:999,
            title:"Mobile Phone",
            qty:1,
            img:""
        }
    }
render() {
    const {price,title,qty} = this.state
    return (
        <div className="cart-item">
            <div className="left-block">
            <img src="" alt="" style={styles.images} />
            </div>

            <div className="right-block">
            <div style={{fontSize:25}}>{title}</div>
            <div  style={{color:"#777"}}>{price}</div>
            <div style={{color:"#777"}}>{qty}</div>
            <div className="cart-item-actions">
                {/* buttons */}
                <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" className='action-icons' />
                <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className='action-icons' />
                <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" className='action-icons' />
            </div>
            </div>
        </div>
    )
}
}

const styles = {
    images:{
        height:110,
        width:110,
        borderRadius:4
    }
}

export default CartItem;