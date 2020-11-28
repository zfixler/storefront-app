import React, {useContext} from "react"
import {Context} from "../Context"

function HoveredProduct({product}){

    const {addToCart, cartItems, removeFromCart} = useContext(Context)

    const priceForm = (product.price).toLocaleString("en-US", {style: "currency", currency: "USD"})

    
    const alreadyAdded = cartItems.some(item => item.id === product.id)

    function button(){
        if(!alreadyAdded){
          return <button className={"btn"} onClick={() => addToCart(product)}>Add to Cart!</button>
        } else {
          return <button className={"btn"} onClick={() => removeFromCart(product.id)}>Remove</button>
        }
    }

    return(
        <div className={"hovered-product-card"}>
        <p className={"hovered-price"}>{priceForm}</p>
        {alreadyAdded && <p style={{color: "white"}}>This item is in your cart.</p>}
        {button()}
        </div>
    )
}

export default HoveredProduct