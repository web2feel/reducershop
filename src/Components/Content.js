import React from 'react'
import Product from "./Product"
 let items = [
     {name:"Watch", price:600},
     {name:"Shoe", price:2000},
     {name:"Phone",price:12000},
     {name:"Shirt", price:1500},
     {name:"Jeans",price:3300}
]
function Content() {
    return (
        <div className="gallery">
            {
                items.map(item => {
                    return <Product info={item} />
                })
            }
        </div>
    )
}

export default Content
