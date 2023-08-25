import React , {useContext, useState} from "react"
var  userDetailsContext = React.createContext(null);
export default function ContextDemo(){
        
        const[userDetails] = useState({
            userName:'John',
            Email:'john@gmail.com'
        })
    return (
        <userDetailsContext.Provider value={userDetails}>
        <div className="container-fluid">
        
            <h1>Site Index - {userDetails.userName}</h1>
            <HeaderComponent/> 
        </div>
        </userDetailsContext.Provider>
        
    )
}

 
function HeaderComponent(){

   var userdetails = useContext(userDetailsContext );
    return (
        <div className="bg-info text-white" style={{height:'250px' , padding:'20px'}}>
            <h2>Home - {userdetails.userName}</h2>
            <NavbarComponent/>
        </div>
    )
}

function NavbarComponent(){
    
    var userDetails = useContext(userDetailsContext );
    return(
        <div className="btn - btn-toolbar bg-dark text-white justify-content-between">
                <div className="btn-group">
                <button className="btn-btn-dark">Amazon</button>

                </div>
                <div className="btn-group">
                <button className="btn-btn-dark">{userDetails.Email}</button>

                </div>
        </div> 
    )
}