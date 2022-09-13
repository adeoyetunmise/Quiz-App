import React from 'react'
import { Link } from 'react-router-dom';
import "../assets/css/Signup.css";
import { useFormik } from "formik";
import * as yup from "yup";


const Signup = () => {
    let lower = new RegExp('(?=.*[a-z])');
    let upper = new RegExp('(?=.*[A-Z])');
    let number = new RegExp('(?=.*[0-9])');
    let length = new RegExp('(?=.[10,])');
    const formik = useFormik({
        initialValues: {
          firstname: "",
          lastname: "",
          email: "",
          password: "",
         
        },
    
        onSubmit: (values) => {
          console.log(values);
        },

        validationSchema: yup.object({
            firstname: yup.string().matches(/^[\w]{2,}$/, "must be atleast 2 characters").required("This field is required"),
            lastname:  yup.string().matches(/^[\w]{2,}$/, "must be atleast 2 characters").required("This field is required"),
            email: yup.string().required("This field is required").email("must be a valid email"),
            password: yup.string() .matches(upper, "Must include upper case").matches(lower, "Must include lower case")
            .matches(number, "Must include a number") .matches(length, "Must not be less than 8 characters") .required("This field is required"),
              
        })

    })
  return (
   <>
   <center>
        
        <h2 className="text-light my-5">Sign Up.</h2>
        <div className="container-fluid">
        <div className="row w-25 shadow-sm col-lg-4">
          
            <button className="btn btn-dark my-2 col-12"> <i class="fa fa-google-plus-official" aria-hidden="true"></i> Sign Up With Google</button>
            <button className="btn btn-dark my-2"><i class="fa fa-facebook-official" aria-hidden="true"></i> Sign Up With Facebook</button>
          </div>
        </div>
       
        <h6 className="text-light">------------Or------------</h6>

        <div className="container-fluid">
          <div className="row">
            <div className="col-9 shadow-sm mx-auto">
              <form action="" onSubmit={formik.handleSubmit}>
              <input
                  type="text"
                  placeholder="Firstname"
                  name='firstname'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2 bg-dark text-light w-25"
                />
                {formik.touched.firstname && (
                <div className="text-danger">{formik.errors.firstname}</div>
              )}

                <input
                  type="text"
                  placeholder="Lastname"
                  name='lastname'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2 bg-dark text-light w-25"
                />
                {formik.touched.lastname && (
                <div className="text-danger">{formik.errors.lastname}</div>
              )}
                
                <input
                  type="text"
                  placeholder="Email"
                  name='email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2 bg-dark text-light w-25"
                />
                {formik.touched.email && (
                <div className="text-danger">{formik.errors.email}</div>
              )}
                <input
                  type="password"
                  placeholder="Password"
                  name='password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2 bg-dark text-light w-25"
                />
                {formik.touched.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
                
            <button type="submit" className="btn btn-dark my-2 w-25 " id="submit">Next</button>

              </form>
            </div>
          </div>
          <p className="">Already have an account? <Link to="/signin">Sign In</Link></p>
          
        </div>
      </center>
   </>
  )
}

export default Signup