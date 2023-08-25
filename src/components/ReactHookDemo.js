import { useState,useEffect } from "react";


export default function ReactHookDemo(){

    const[mgs,setMsg] = useState();

     function handlerSuccessClick(){
        setMsg(<SuccessComponent></SuccessComponent>);
    }
    function handleErrorClick(){
        setMsg(<ErrorComponent></ErrorComponent>);
    }
    return (
        <div className="container-fluid">
        <h2>React Hooks</h2>
                    <button onClick={handlerSuccessClick}>Success</button>
                    <button onClick={handleErrorClick}>Invalid</button>

                    <hr/>
                    <div>
                        {mgs}
                    </div>
        </div>
    )

}

function SuccessComponent(){
    useEffect(()=>{
            alert('success component will mounted')
            return (()=>{
                alert('success component will unmount')
            })
    },[])
    return (
        <div>
            <h2>
                Login Success....
            </h2>
        </div>
    )
}

function ErrorComponent(){
    useEffect(()=>{
            alert('Error component will mounted')
            return (()=>{
                alert('Error component will unmount')
            })
    },[])
    return (
        <div>
            <h2>
                Invalid Credentials
            </h2>
        </div>
    )
}