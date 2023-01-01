import { Formik } from "formik";
import * as Yup from "yup"
import logo from "../assets/images/logos/logo-black-removebg-preview.png"



const Login = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center"
  }}>
  <div id="loginContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: "50px",
        marginTop: "15em",
        display: "flex",
        height: "30em",
        width: "50%"
      }}>
      <Formik
  initialValues={{ email: "", password: "" }} //lets us know that initial values of the fields should always be blank
  onSubmit={(values, { setSubmitting }) => { // onsubmit callback that takes two params. values:whatever the user enters and an object 
    setTimeout(() => {
      console.log("Logging In", values);
      setSubmitting(false); //calling function. this function allows use to enable or disable the submit button while a login call is happening
    }, 500);
  }}
    
  validationSchema={Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number.")
  })}
>

{props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (

        <form onSubmit={handleSubmit}>

<label htmlFor="email">Email</label>
<input
  id="email"
  name="email"
  type="text"
  placeholder="Enter your email"
  value={values.email}
  onChange={handleChange}
  onBlur={handleBlur}
  className={errors.email && touched.email && "error"}
/>
{errors.email && touched.email && (
  <div className="input-feedback">{errors.email}</div>
)}

<label htmlFor="password">Password</label>
<input
  id="password"
  name="password"
  type="password"
  placeholder="Enter your password"
  value={values.password}
  onChange={handleChange}
  onBlur={handleBlur}
  className={errors.password && touched.password && "error"}
/>
{errors.password && touched.password && (
  <div className="input-feedback">{errors.password}</div>
)}
          <button type="Submit" disabled={isSubmitting} >Login</button>
          <a href="/Signup">Not A Member? Sign Up</a>
        </form>
      );
    }}
    </Formik>
    </div>

</div>
);


export default Login;