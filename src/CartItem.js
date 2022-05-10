import React from 'react'

class CartItem extends React.Component{
render() {
    return (
        <div className="cart-item">
            <div className="left-block">
            <img src="" alt="" style={styles.images} />
            </div>

            <div className="right-block">
            <div style={{fontSize:25}}>Phone</div>
            <div  style={{color:"#777"}}> RS 999</div>
            <div style={{color:"#777"}}>Qty : 1</div>
            <div className="cart-item-actions">
                {/* buttons */}
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