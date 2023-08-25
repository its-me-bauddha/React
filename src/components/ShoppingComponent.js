import {usestate,useEffect, useState} from "react"

export default function ShoppingComponent(){
    const [categories ,setCategories]  = useState([]);
    const [products ,setProducts] = useState([]);
    const [cartItems , setCartItems] = useState();
    const [itemCounts,setItemCount] = useState(0);


    function getCartItemsCount(){
        setItemCount(cartItems.length)
    }

    function LoadProducts(url){
        fetch(url)
        .then(res=>res.json())
        .then(data =>{
            setProducts(data);
        });
    }

    function LoadCategories(){
        fetch("https://fakestoreapi.com/products/categories")
        .then(res=>res.json())
        .then(data =>{
            data.unshift('All');
            setCategories(data);
        });
    }

    
    useEffect(()=>{
        LoadCategories();
        LoadProducts("https://fakestoreapi.com/products");
    })
    function handleCategoryChange(e){
        if(e.target.value== 'all'){
                LoadProducts(`https://fakestoreapi.com/products`);
                
        }
        else{
            LoadProducts(`https://fakestoreapi.com/products/categories/${e.target.value}`)
        }
       
    }
    function handleAddToCart(e){
        fetch(`https://fakestoreapi.com/products/${e.target.value}`)
        .then(res=>res.json())
        .then(data=>
            {
               cartItems.push(data);
               getCartItemsCount();
            })

    }
    return (
        <div className="container-fluid">
        <header className="bg-danger text-white text-center p-2" >
            <h1>
                <span className="bi bi-cart">

                </span>
                Shopping Home
            </h1>
        </header>
        <section className="row">
            <nav className="col-3">
                <div>
                    <label>
                        Select a Category
                    </label>
                    <div>
                        <select className="form-select" onClick={handleCategoryChange}>
                                {
                                    categories.map(category=>
                                    <option key={category}>{category.toUpperCase()}</option>
                                    )
                                }
                        </select>
                    </div>
                </div>
            </nav>
            <main className="col-7 d-flex flex-wrap" height = "400">
                                {
                                    products.map(product=>
                                    <div className="card m-2 p-2 w-25">
                                    <img src={product.image} className="card-img-top " height="150"/>
                                    <div className="card-header " style={{height:160}}>
                                        <p>{product.title}</p>
                                    </div>
                                    <div className="card-body">
                                        <dl>
                                            <dt>Price</dt>
                                            <dd>{product.price}</dd>
                                            <dt>Rating</dt>
                                            <dd>
                                                <span className="bi bi-star-fill text-success"></span>
                                                {product.rating.rate} <span>[{product.rating.count}]</span>
                                            </dd>
                                        </dl>

                                    </div>
                                    <div  className="card-footer">
                                    <button id={product.id} onClick={handleAddToCart} className="btn btn-danger w-100">
                                        <span className="bi bi-cart4">
                                                Add to Cart 
                                        </span>
                                    </button>

                                    </div>

                                    </div>
                                    )
                                }
            </main>
            <aside className="col-2">
                <button className="btn btn-danger w-100 m-10">
                    <span className="bi bi-cart3"></span>
                    [{itemCounts}]
                </button>
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th>title</th>
                        <th>price</th>
                        <th>preview</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map(item =>
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.preview}</td>
                        </tr>
                        )
                    }
                </tbody>

                </table>
            </aside>
        </section>
           
        </div>
    )
}