import React, {useState, useContext} from "react"
import {Context} from "../Context"


function CartProduct(prop){
    const {removeFromCart} = useContext(Context)
    const [hovered, setHovered] = useState(false)

    const cartProduct = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 5em",
        borderBottom: "1px #b4c5e4 solid"
    }

    const priceForm = (prop.price).toLocaleString("en-US", {style: "currency", currency: "USD"})

    return (
        <div style={cartProduct}>
            <i onMouseEnter={() => setHovered(true)}
               onMouseLeave={() => setHovered(false)}
               onClick={() => removeFromCart(prop.id)}
               class={hovered ? "ri-delete-bin-6-fill ri-1x" : "ri-delete-bin-6-line ri-1x"}></i>
            <p>{prop.title}</p>
            <p>{priceForm}</p>
        </div>
    )
}

export default CartProduct