import { useFormik, Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";

export default function YupValidationComponent() {
  return (
    <div className="container-fluid">
      <h2>User Register</h2>
      <Formik
        initialValues={{
          UserName: "",
          Email: "",
          Age: "",
          City: "",
        }}
        validationSchema={yup.object({
          UserName: yup
            .string()
            .min(4, "Name is too short")
            .max(10, "Name is too long")
            .required("Name Required"),
          Email: yup.string().email("Invalid Email").required("Email Required"),
          Age: yup.number().required("Age Required"),
          City: yup.string(),
        })}
        onSubmit={(value) => {
          alert(JSON.stringify(value));
        }}
      >
        <Form>
          {
            <div>
              <dl>
                <dt>User Name</dt>
                <dd>
                  <Field name="UserName" type="text"></Field>
                </dd>
                <dd className="text-danger">
                  <ErrorMessage name="UserName"></ErrorMessage>
                </dd>
                <dt>Email</dt>
                <dd>
                  <Field name="Email" type="text"></Field>
                </dd>

                <dd className=" text-danger">
                  <ErrorMessage name="Email"></ErrorMessage>
                </dd>
                <dt>Age</dt>
                <dd>
                  <Field name="Age" type="text"></Field>{" "}
                </dd>

                <dd className=" text-danger">
                  <ErrorMessage name="Age"></ErrorMessage>
                </dd>
                <dt>City</dt>
                <dd>
                  <Field name=" City" as="select">
                    <dd className=" text-danger">
                      <ErrorMessage name="City"></ErrorMessage>
                    </dd>

                    <option>Delhi</option>
                    <option>Mumbai</option>
                  </Field>{" "}
                </dd>
              </dl>
              <button>Register</button>
            </div>
          }
        </Form>
      </Formik>
    </div>
  );
}
