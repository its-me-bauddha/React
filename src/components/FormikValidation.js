import { useFormik } from "formik"

export default function FormikValidation(){

    function verifyUserDetails(userDetails){
            const errors = {};
            
            if(userDetails.UserName == ""){
                errors.UserName = "User Name Required";
            }
            else if(userDetails.UserName.length< 4){
                errors.UserName = "User Name is Too Short";
            }
            else if(userDetails.UserName.length >10){
                errors.UserName = "User Name is Too Long";
            }

            if(userDetails.Age == ""){
                errors.Age = "Age Required";
            }
            else if(isNaN(userDetails.Age)){
                errors.Age = "Age must be a Number"
            }

            if(userDetails.Email == ""){
                errors.Email = "Email Required";
            }
            else if(userDetails.Email.indexOf("@") <= 2){
                errors.Email = "Invalid Email"
            }


            if(userDetails.Mobile == ""){
                errors.Mobile = "Mobile Required "
            }
            else if(userDetails.Mobile.match(/\+91d{}/)){
                errors.Mobile = "";
            }
            else{
                errors.Mobile = "Invalid MObile";
            }
            return errors;
    }

    const formik = useFormik({
        initialValues:{
            UserName :'',
            Age :0,
            Email:'',
            Mobile:''
        },
        validate:verifyUserDetails,
        onSubmit:values=>{
            alert(JSON.stringify(values));
        }
    })

    return (

        <div className="container -fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName"  onChange={formik.handleChange}></input></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age" onChange={formik.handleChange}></input></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Email</dt>
                    <dd><input type="email" name="Email" onChange={formik.handleChange}></input></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange}></input></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}