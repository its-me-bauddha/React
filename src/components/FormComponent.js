import { useState } from "react";
export default function FormComponent(){
    const[users]  = useState([
        {userID:'john'},
        {userID:'john12'},
        {userID : 'harsh'},
        {userID:'david'}
    ]);

    const[userMsg , setUserMsg] = useState('');
    const[isUserValid , setUserValid] = useState(false);
    const[pswMsg , setPswMsg] = useState('');

    function VerifyUserId(e){
        for(var user of users){
            if(user.userID == e.target.value){
                    setUserMsg('User ID is taken !! try another');
                    setUserValid(false);
                    break; 
            }
            else{
                setUserMsg('User ID Available');
                setUserValid(true);
            }
        }

    }

    function HideUserMsg(){
        setUserMsg('');
    }

    function VerifyPassWard(e){
        if(e.target.value.match(/(?=.*[A-Z]\w{4,10})/))
        {
            setPswMsg('Strong PassWard');
        }
        else{
            if(e.target.value.length < 4){
                setPswMsg('Poor PassWard');
            }
            else{
                setPswMsg('Weak PassWard');
            }
        }
    } 

    function HidePswMsg(){
        setPswMsg('');
    }
        return (
            <div  className="container-fluid">
                    <h2>
                        Register User
                    </h2>
                    <dl>
                        <dt>User Id</dt>
                        <dd> <input type="text" onBlur={HideUserMsg} onKeyUp={VerifyUserId}></input></dd>
                        <dd className={(isUserValid == true) ? 'text-success' : 'text-danger'}>{userMsg}</dd>
                        <dt>PassWard</dt> 
                        <dd>
                            <input type="password"  onBlur ={HidePswMsg} onKeyUp={VerifyPassWard}></input>
                        </dd>
                        <dd>{pswMsg}</dd>
                        <dd >
                        <span className="text-warning">
                        <span className="bi bi-exclamation-triangle">
                                    CAPS ON
                            </span>
                        </span>
                           
                        </dd>
                    </dl>
            </div>
        );

}