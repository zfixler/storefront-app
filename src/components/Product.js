import React, {useState} from "react"
import HoveredProduct from "./HoveredProduct"


function Product({product}){
    const [hovered, setHovered] = useState(false)

    return(
        <div onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}
             className={"product-card"}>
            {hovered && <HoveredProduct key={product.id} product={product} />}
            <img src={product.image} alt="" height="200px" />
            <p style={{fontWeight: "bold", marginTop: "1em"}}>{product.title}</p>
        </div>
    )
}

export default Product