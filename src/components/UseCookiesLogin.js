import { useState,useEffect } from "react"
import { useCookies } from "react-cookie"
import useCaptcha from "../hooks/useCaptcha";
export default function UseCookiesLogin(){

    const [cookies,setCookie,removeCookie] = useCookies(['userName']);
    const [userDetails,setUserDetails] = useState({UserName : '' , Passward :  ''});
    const code =useCaptcha();


    function handleUserName(e){
            setUserDetails({
                UserName:e.target.value,
                Passward:userDetails.Passward
            });
    }
    function handlePassward(e){
        setUserDetails({
            UserName:userDetails.UserName,
            Passward:e.target.value
        })
    }
    function handleLogin(){
            setCookie("userName",userDetails.UserName,{path:"/",expires:new Date("2023-07-31 20:22")});
            alert('login success')
    }

    function handleSignOut()
    {
            removeCookie("userName");
            alert("signOut SuccessFully");
    }   
    
    useEffect(()=>{
            if(cookies.userName == undefined){
                alert("please login");
            }
    },[])

    function handlerCode(){
        setCookie("userName",userDetails.UserName,{path:"/",expires:new Date("2023-07-31 20:22")});
            alert('login success');
            
            
    }
    
    return(
        <div className="container-fluid">
            <h2>User Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleUserName}></input></dd>

                <dt>Email</dt>
                <dd><input type="email"></input></dd>

                <dt>Password</dt>
                <dd><input type="passward" onChange={handlePassward}></input></dd>
                <dt>Verify Code  <button onClick={handlerCode}>New Code</button></dt>
                <dd>{code.code}</dd>
            </dl>
            <button onClick={handleLogin}>Login</button>
            <hr/>

            <h3>Home <button className="btn btn-link" onClick={handleSignOut}>Sign Out</button></h3>
           Hello!  {cookies.userName}
        </div>
    )
}