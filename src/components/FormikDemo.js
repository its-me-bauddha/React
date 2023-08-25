import { Formik, useFormik } from "formik"

export default function FormikDemo(){

        const formik = useFormik({
                initialValues :{
                    UserName:'',
                    PassWard : '',
                    City :''
                },
                onSubmit:values =>{
                    alert(JSON.stringify(values)); 
                }
        })

    return(
        <div className="container-fluid">
             <form onSubmit={formik.handleSubmit}>
             <h2>Register User</h2>
             <dl>
                <dt>User Name</dt>
                <dd><input type="text" name="UserName" onChange={formik.handleChange} value={formik.values.UserName}></input></dd>
                <dt>Password</dt>
                <dd><input type="password" name="PassWard" onChange={formik.handleChange}value={formik.values.PassWard}></input></dd>

                <dt>City</dt>
                <dd>
                    <select name="City" onChange={formik.handleChange} value={formik.values.City}>
                        <option>Delhi</option>
                        <option>Mumbai </option>
                    </select>
                </dd>
             </dl>
             <button>Register</button>
             </form>
             <h2>User Details </h2>
             {formik.values.UserName};
        </div>
    )
};