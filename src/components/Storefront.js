import React, {useContext} from 'react'
import {Context} from "../Context"

function Storefront(){

    const {allProducts} = useContext(Context)

    console.log(allProducts)

    return(
        <div>
            <h1>Storefront</h1>
        </div>
    )
}

export default Storefront