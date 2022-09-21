import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/Removed2.png'
import "../assets/css/Signin.css";
import { useFormik } from "formik";
import * as yup from "yup";

const Signin = () => {
  let receive = JSON.parse(localStorage.getItem("quiz"));
  const navigate = useNavigate();
  const [userLogin,setuserLogin] = useState([]);
  const [message,setmessage] = useState("")
  let lower = new RegExp('(?=.*[a-z])');
  let upper = new RegExp('(?=.*[A-Z])');
  let number = new RegExp('(?=.*[0-9])');
  let length = new RegExp('(?=.[10,])');
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
    
        onSubmit: (values) => {
          receive.filter((items) => {
            if (items.email === values.email && items.password === values.password) {
              setuserLogin(userLogin.push(values))
              localStorage.login = JSON.stringify(userLogin)
              navigate("/dashboard")
              
            }
            else if (values.email !== items.email && values.password !== items.password){
              setmessage("Invalid login details")
            }
            else{
              setmessage("Inavalid login details")
            }
         
          })
          
          // console.log(values);
        },

        validationSchema: yup.object({
          email: yup.string().required("This field is required").email("must be a valid email"),
          password: yup.string() .matches(upper, "Must include upper case").matches(lower, "Must include lower case")
          .matches(number, "Must include a number") .matches(length, "Must not be less than 8 characters") .required("This field is required"),
            
      })
    })
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm " >
  <div className="container-fluid">
    <Link to='/' className="navbar-brand" ><img src={logo} width={130} height={50} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <form className="d-flex">
        <button className="btn btn-outline-light  mx-5" type="submit"><Link to='/signup'> Create Account</Link></button>
        <button className="btn btn-outline-light" type="submit"><Link to='/signin'>Sign In</Link></button>
      </form>
      </div>
   
  </div>
</nav>



      <center>
        <h2 className="text-light my-5">Sign In.</h2>
        
       
        

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 shadow-sm mx-auto">
              <form action="" onSubmit={formik.handleSubmit}>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2 bg-dark text-light"
                  
                />

                {formik.touched.email && (
                <div className="text-danger">{formik.errors.email}</div>
              )}

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2 bg-dark text-light"
                />

                {formik.touched.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
            <button type="submit" className="btn btn-dark my-2" id="submit">Submit</button>

              </form>
            </div>
          </div>
          <h6 className="text-light">------------&nbsp;&nbsp;&nbsp;&nbsp;Or&nbsp;&nbsp;&nbsp;&nbsp;-----------</h6>

<div className="container-fluid">
<div className="row col-lg-3 shadow-sm">
  
    <button className="btn btn-dark my-2"><i class="fa fa-google-plus-official" aria-hidden="true"></i> Continue With Google</button>
    <button className="btn btn-dark my-2"> <i class="fa fa-facebook-official" aria-hidden="true"></i> Continue With Facebook</button>
  </div>
</div>
          <p className="">Don't have an account? <Link to="/signup">Create Account</Link></p>
          <Link to="/signup">Forgot Password?</Link>
        </div>

       
      </center>
    </>
  );
};

export default Signin;
