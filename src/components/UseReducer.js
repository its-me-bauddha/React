
import { useEffect, useReducer ,useState } from "react";
import useFetchData from "../hooks/useFetchData";


var initialState = {likes:0,dislikes:0};

function reducer(state,action){
    switch(action.type){
        case 'like':
            return {likes :parseInt(state.likes)+1 , dislikes:state.dislikes};

        case 'dislike':
            return{dislikes:parseInt(state.dislikes) + 1, likes :state.likes };
    }
}

export default function UseReducer(){


    const [state,dispatch] = useReducer(reducer,initialState);
    const [product ,setProduct] = useState({});
    const[data] = useFetchData("https://fakestoreapi.com/products/2");

    // useEffect (()=>{

    //     fetch ("https://fakestoreapi.com/products/2")
    //     .then(response => response.json())
    //     .then(data => {
    //         setProduct(data);
    //     })
    // },[]);

   function handleLikeClick(){
        dispatch({type:'like'});
    }

    function handleDisLikeClick(){
        dispatch({type:'dislike'});
    }
         return(
            <div className="container-fluid"> 
                <h2>Product Details</h2>
                <div className="card p-2" style={{width : '300px'}}>

                    <img src={data.image } className="card-img-top" height="260px"/>
                    <div className="card-body">
                        <p>{data.title}</p>
                    </div>
                    <div className="card-footer">
 
                   
                </div>
                [{state.likes}]<button onClick={handleLikeClick} className="btn btn-primary"><span className="bi bi-hand-thumbs-up"></span></button>
                [{state.dislikes}] <button onClick={handleDisLikeClick} className="btn btn-danger" > <span className="bi bi-hand-thumbs-down"></span></button>
                </div>
            </div>
        )

}