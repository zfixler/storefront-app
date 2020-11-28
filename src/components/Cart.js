import React, {useContext, useState} from 'react'
import {Context} from "../Context"
import CartProduct from "./CartProduct"

function Cart(){
    const {cartItems, clearCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Check Out")
    const cartDisplay = cartItems.map(item => <CartProduct key={item.id} title={item.title} price={item.price} id={item.id} />)
    const costArr = cartItems.map(item => item.price)
    const totalCost = costArr.reduce((a , b) => (a + b), 0).toLocaleString("en-US", {style: "currency", currency: "USD"})

    function checkOut(){
        setButtonText("Ordering...")
        setTimeout(() => {
            clearCart()
        }, 3000)
    }

    return(
        <div className={"cart-container"}>
            <h1 style={{textAlign: "center"}}>Shopping Cart</h1>
            {cartDisplay}
            <p className="total-cost">Total Cost: {totalCost} </p>
            {cartItems.length > 0 ? 
            <button className={"btn checkout-btn"}
                    onClick={() => checkOut()}>{buttonText}</button> : 
            <p>Your shopping cart is empty.</p>}
        </div>
    )
}

export default Cart