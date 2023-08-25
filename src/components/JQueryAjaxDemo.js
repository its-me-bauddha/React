import { useState ,useEffect } from "react"
import $, { data } from 'jquery';
import { useFormik } from "formik";
import { json } from "express";

export default function JQueryAjaxDemo(){

        const [users ,setUsers] = useState();
        const [userError ,setUserError] = useState('');
        const formik = useFormik ({
            initialValues : {
                UserId:'',
                UserName:'',
                Passward :'',
                Age:0,
                Mobile :'',
                Subscribed :true,
            },
            onSubmit :values  => {
               $.ajax ({
                method:"POST",
                url:"https://localhost:4000/registeruser",
                data:values
               })
            }

        }
        )

        useEffect (()=>{
            $.ajax({
                method:"GET",
                url:"https://localhost:4000/getusers",
                success : function (response){
                    setUsers (response);
                }
            })
        })

        
    function handleUserId (e) {
            for(var user of users){
                if(user.UserId == e.target.value){
                        setUserError('User ID Taken ');
                        break;

                }
                else{
                    setUserError('User ID Available');
                }
            }
    }
     

    return(
        <div className="container -fluid">
                <h2>User Details</h2>
                <form onSubmit={formik.handleSubmit }>
                    <dl>
                            <dt>User ID </dt>
                            <dd><input type="text" onKeyUp={handleUserId} value={formik.values.UserId}  onChange = {formik.handleChange} name="UserId"></input></dd>
                            <dd>{userError}</dd>
                            <dt>User Name</dt>

                            <dd><input type="text" value={formik.values.UserName} onChange = {formik.handleChange} name="UserName" /></dd>

                            <dt>PassWard</dt>
                            <dd><input type="passward" value={formik.values.Passward}  onChange = {formik.handleChange} name="Passward" /></dd>
                            <dt>Age</dt> 
                            <dd><input type="number" value={formik.values.Age} onChange = {formik.handleChange} name="Age" /></dd>

                            <dt>Mobile</dt>
                            <dd><input type="text" value={formik.values.Mobile} onChange = {formik.handleChange} name="Mobile" /></dd>

                            <dt>Subscribed</dt>
                            <dd className="form-switch"><input className="form-check-input" type="checkbox"  value={formik.values.Subscribed} onChange = {formik.handleChange} name="Subscribed" /> Yes</dd>

                    </dl>
                    <button className="btn btn-primary "> Register</button>
                </form>
        </div>
    )
}