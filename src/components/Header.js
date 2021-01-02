import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Header(){

    const {cartItems, setActivePage} = useContext(Context)

    const iconStyle = cartItems.length > 0 ? "ri-shopping-cart-fill ri-2x" : "ri-shopping-cart-line ri-2x"

    return(
        <header>
            <Link to="/storefront-app/"><h1 className={"header-title"} onClick={() => setActivePage(1)}>Fake Store API App</h1></Link>
            <Link to="/storefront-app/cart"><i className={"header-icon"} class={iconStyle}></i></Link>
        </header>
    )
}

export default Header