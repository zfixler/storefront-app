import React, {useState} from "react"
import HoveredProduct from "./HoveredProduct"


function Product({product}){
    const [hovered, setHovered] = useState(false)

    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        width: "10em",
        margin: "3em",
        position: "relative",
    }

    return(
        <div onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}
             style={cardStyle}>
            {hovered && <HoveredProduct key={product.id} product={product} />}
            <img src={product.image} alt="" height="200px" />
            <p style={{fontWeight: "bold", marginTop: "1em"}}>{product.title}</p>
        </div>
    )
}

export default Product