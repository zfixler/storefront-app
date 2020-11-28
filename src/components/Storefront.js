import React, {useContext} from 'react'
import {Context} from "../Context"
import Product from "./Product"

function Storefront(){

    const {allProducts} = useContext(Context)

    const products = allProducts.map(product => 
        <Product key={product.id} product={product}/>
    )

    return(
        <div className={"storefront-container"}>
            {products}
        </div>
    )
}

export default Storefront