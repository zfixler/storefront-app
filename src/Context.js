import React, {useEffect, useState} from "react"

const Context = React.createContext()

function ContextProvider({children}){
    const [allProducts, setAllProducts] = useState([])
    const [cartItems, setCartItems] = useState([])

    function addToCart(newItem){
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id){
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(json => setAllProducts(json))
    }, [])

    return (
        <Context.Provider value={{allProducts, addToCart, cartItems, removeFromCart}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}