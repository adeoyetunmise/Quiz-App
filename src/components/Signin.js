import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Signin.css";
import { useFormik } from "formik";
import * as yup from "yup";

const Signin = () => {

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
    
        onSubmit: (values) => {
          console.log(values);
        },

        validate:(values)=>{

                let errors = {}
                //conditional statements
                if (values.email == ""){
                   errors.email= "*This field is required"
             }
             if (values.password == ""){
                errors.password= "*This field is required"
             }
             return errors

            }
    })
  return (
    <>
      <center>
        <h2 className="text-light my-5">Sign In.</h2>
        <div className="container-fluid">
        <div className="row w-25 shadow-sm">
          
            <button className="btn btn-dark my-2"><i class="fa fa-google-plus-official" aria-hidden="true"></i> Continue With Google</button>
            <button className="btn btn-dark my-2"> <i class="fa fa-facebook-official" aria-hidden="true"></i> Continue With Facebook</button>
          </div>
        </div>
       
        <h6 className="text-light">-------Or-------</h6>

        <div className="container-fluid">
          <div className="row">
            <div className="col-9 shadow-sm mx-auto">
              <form action="" onSubmit={formik.handleSubmit}>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2 bg-dark w-25"
                  
                />
                {formik.touched.email && (
                <div className="text-danger">{formik.errors.email}</div>
              )}
                <input
                  type="password"
                  placeholder="Password"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2 bg-dark w-25"
                />
                {formik.touched.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
            <button type="submit" className="btn btn-dark my-2 w-25 " id="submit">Submit</button>

              </form>
            </div>
          </div>
          <p className="">Don't have an account? <Link to="/">Create Account</Link></p>
          <Link to="/">Forgot Password?</Link>
        </div>
      </center>
    </>
  );
};

export default Signin;
