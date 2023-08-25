import { useState,useEffect, useCallback } from "react";


export default function TwoWayBinding(){

const [product ,setProduct] = useState({Name:''  , Price:0 , City:'' , Stock : false});
const [newProduct ,setNewProduct] = useState({Name:''  , Price:0 , City:'' , Stock : false});
const [reProduct ,setReProduct] = useState({Name:''  , Price:0 , City:'' , Stock : false});



function handleName(e){
    setProduct({
        Name:e.target.value,
        Price: product.Price,
        City : product.City,
        Stock:product.Stock
    })

}
function handlePrice(e){
                setProduct({
                    Name:product.Name,
                    City:product.City,
                    Price:e.target.value,
                    Stock:product.Stock
                })
}
function handleCity(e){
            setProduct({
                Name:product.Name,
                City:e.target.value,
                Price:product.Price,
                Stock:product.Stock
            })
}
function handleStock(e){
    setProduct({
        Name:product.Name,
        City: product.City,
        Price:product.Price,
        Stock:e.target.checked
    })
}

function handleRegister(){
    setNewProduct(product);
}
function handleReset(){
    setReProduct(product);
}

    return(
        <div className="container-fluid">
               <div className="row">
                    <div className="col-3">
                            <h2>Register Product</h2>
                            <dl>
                                <dt>
                                    Name
                                </dt>
                                <dd>
                                    <input className="form-control" onChange={handleName} type="text"></input>
                                </dd>
                                <dt>Price</dt>
                                <dd><input className="form-control" onChange={handlePrice}type="text"></input></dd>
                                <dt>City</dt>
                                <dd>
                                    <select className="form-select" onChange={handleCity}>
                                        <option>Delhi</option>
                                        <option>Kanpur</option>
                                    </select>
                                </dd>
                                <dt>Stock</dt>
                                <dd className="form-switch">
                                    <input className="form-check-input" type="checkbox"  onChange={handleStock}/> Available
                                </dd>
                            </dl>
                            <button onClick={handleRegister}  className="btn btn-primary w100" >Register</button>
                           
                            <button onClick={handleReset} className="btn btn-primary w100 m-5" >Reset</button>
                    </div>
                    <div className="col-9">
                            <h2>Product Details</h2>
                            <dl>   
                                <dt>Name</dt>
                                <dd>{newProduct.Name}</dd>

                                <dt>Price</dt>
                                <dd>{newProduct.Price}</dd>
                                <dt>City</dt>
                                <dd>{newProduct.City}</dd>
                                <dt>Stock</dt>
                                <dd>{(newProduct.Stock == true)? "Available" : "Out Of Stock"}</dd>

                                
                            </dl>
                    </div>
               </div>

        </div>
    )
}