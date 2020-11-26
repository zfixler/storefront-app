import React, {useEffect, useState} from "react"

const Context = React.createContext()

function ContextProvider({children}){
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(json => setAllProducts(json))
    }, [])

    return (
        <Context.Provider value={{allProducts}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}