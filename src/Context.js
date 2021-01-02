import React, {useEffect, useState} from "react"

const Context = React.createContext()

function ContextProvider({children}){
    const [allProducts, setAllProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [activePage, setActivePage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    function addToCart(newItem){
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id){
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function clearCart(){
        setCartItems([])
    }

    useEffect(() => {
        async function getData(){
            setIsLoading(true)

            try {
            const data = await fetch('https://fakestoreapi.com/products/')
            const response = await data.json()
            setAllProducts(response)
        } catch(error){ console.log(error)}      

            setIsLoading(false)
        }

        getData()
        
    }, [])

    return (
        <Context.Provider value={{allProducts, addToCart, cartItems, removeFromCart, clearCart, activePage, setActivePage, isLoading, setIsLoading}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}