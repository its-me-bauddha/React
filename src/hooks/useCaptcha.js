import { useState,useEffect } from "react";

export default function useCaptcha(){


    const[code,setCode] = useState();

    useEffect(()=>{
        var a =Math.floor(Math.random()*10 +1)
        var b =Math.floor(Math.random()*10)
        var c =Math.floor(Math.random()*10)
        var d =Math.floor(Math.random()*10)
        var e =Math.floor(Math.random()*10)
        var f =Math.floor(Math.random()*10)
        console.log(a);

        setCode (`${a} ${b}  ${c}  ${d} ${e}  ${f} `)
        
    },[])

    return {code};
}