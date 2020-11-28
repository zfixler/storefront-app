import React, {useContext} from 'react'
import {Context} from "../Context"
import CartProduct from "./CartProduct"

function Cart(){
    const {cartItems} = useContext(Context)
    
    const cartDisplay = cartItems.map(item => <CartProduct key={item.id} title={item.title} price={item.price} id={item.id} />)

    return(
        <div>
            <h1 style={{textAlign: "center"}}>Shopping Cart</h1>
            {cartDisplay}
        </div>
    )
}

export default Cart