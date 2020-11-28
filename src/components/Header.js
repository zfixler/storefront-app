import React from "react"
import {Link} from "react-router-dom"

function Header(){

    const style = {
        backgroundColor: "#F17300",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "0 0 2em 0",
        boxShadow: "3px 3px 5px 0px rgba(0,0,0,0.33)",
        padding: "2em 3em",
    }

    const iconStyle = {
        float: "right",
        color: "white",
        cursor: "pointer",
    }

    const titleStyle = {
        textAlign: "center",
        color: "white",
        fontSize: "2rem",
        cursor: "pointer",
        margin: "0",
    }

    return(
        <header style={style}>
            <Link to="/"><h1 style={titleStyle}>Storefront App</h1></Link>
            <Link to="/cart"><i style={iconStyle} class="ri-shopping-cart-line ri-2x"></i></Link>
        </header>
    )
}

export default Header