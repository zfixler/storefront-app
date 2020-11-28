import React, {useContext} from "react"
import {Context} from "../Context"

function HoveredProduct({product}){

    const {addToCart} = useContext(Context)

    const hoveredStyle = {
        position: "absolute",
        zIndex: "1",
        backgroundColor: "rgba(241, 115, 0, .9)",
        textAlign: "center",
        height: "100%",
        width: "100%",
        top: "-1em",
        left: "-1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "1em",
        padding: "1em"
    }

    const priceStyle = {
        color: "white",
        opacity: "1",
        fontSize: "2rem"
    }

    const priceForm = (product.price).toLocaleString("en-US", {style: "currency", currency: "USD"})

    return(
        <div style={hoveredStyle}>
        <p style={priceStyle}>{priceForm}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default HoveredProduct