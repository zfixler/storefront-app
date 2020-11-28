import React, {useState, useContext} from "react"
import {Context} from "../Context"


function CartProduct(prop){
    const {removeFromCart} = useContext(Context)
    const [hovered, setHovered] = useState(false)


    const priceForm = (prop.price).toLocaleString("en-US", {style: "currency", currency: "USD"})

    return (
        <div className={"cart-product"}>
            <div style={{display: "flex", alignItems: "center"}}>
                <i onMouseEnter={() => setHovered(true)}
                   onMouseLeave={() => setHovered(false)}
                   onClick={() => removeFromCart(prop.id)}
                   class={hovered ? "ri-delete-bin-6-fill ri-1x" : "ri-delete-bin-6-line ri-1x"}></i>
                <p className="cart-item-title">{prop.title}</p>
            </div>
            <p>{priceForm}</p>
        </div>
    )
}

export default CartProduct