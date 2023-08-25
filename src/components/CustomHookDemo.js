import { useEffect,useState } from "react"
import useFetchData from "../hooks/useFetchData"

export default function CustomHookDemo(){


    const [data] = useFetchData("https://fakestoreapi.com/products");

    return (
           <div className="container-fluid">
            <h2>Product</h2>
            <ol>
                {
                    data.map(products =>
                    <li key={products.title}> {products.title} </li>
                    
                    ) 
                }
            </ol>
           </div>
           )
}