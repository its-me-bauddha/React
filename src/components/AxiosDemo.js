import { useEffect,useState } from "react";
import {axios} from "axios";

export default function AxiosDemo(){

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        axios.get("https://localhost:4000/getusers")
        .then(function (response){
            setUsers(response.data);
        }).catch(function(ex){
                console.log(ex);
        })
    })
    return(
        <div className="container-fluid">
            <h2> Users</h2>
            <ol>
                {
                    users.map(user =>
                    <li key={user.userId}>{user.UserId}</li>)
                }
            </ol>
        </div>
    )
}