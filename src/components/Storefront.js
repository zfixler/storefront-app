import React, {useContext, useState, useEffect} from 'react'
import {Context} from "../Context"
import Product from "./Product"
import Fuse from 'fuse.js'

function Storefront(){
    const {allProducts, activePage, setActivePage, isLoading} = useContext(Context)
    const [searchTerm, setSearchTerm] = useState('')
    const [result, setResult] = useState([])
    

    let products = allProducts.map(product => 
        <Product key={product.id} product={product}/>
    )

    function displayProducts(activePage){
        if(activePage === 1){
            return (products.filter(product => product.key <= 10))
        } else { return (products.filter(product => product.key > 10)) }
    }


    useEffect(() => {
        const options = {
            includeScore: true,
            isCaseSensitive: false,
            keys: ['title', 'description', 'category']
        }

        const fuse = new Fuse(allProducts, options)
        const searchResult = fuse.search(searchTerm)

        setResult(searchResult)

    }, [searchTerm, allProducts])

    const displayResult = result.map(item => <Product key={item.id} product={item.item}/>)

    console.log(isLoading)

    return(
        isLoading ? <div className={"loading-container"}><div className={"loading-spinner"}></div></div> :
        <>
        <form className="search-bar"
              onSubmit={(e) => e.preventDefault()}  >
            <i class="ri-search-line ri-2x"></i>
            <input type="text" 
                   value={searchTerm} 
                   onChange={(event) => setSearchTerm(event.target.value)}
                   className={"search-input"}
                   placeholder="Search products here..." />
        </form>
            <div className={"storefront-container"}>
                {searchTerm === '' ? displayProducts(activePage) : displayResult}
            </div>
        <div className={"page-numbers"}>
                <p className={activePage === 1 && "active-page"} onClick={() => {setActivePage(1)}}>1</p>
                <p className={activePage === 2 && "active-page"} onClick={() => {setActivePage(2)}}>2</p>
        </div> 
        </>
    )
}

export default Storefront