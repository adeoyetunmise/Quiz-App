import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../assets/css/Signup.css";
import logo from '../assets/images/Removed2.png'
import { useFormik } from "formik";
import * as yup from "yup";


const Signup = () => {
  const Navigate = useNavigate()
  const [Game, setGame] = useState([])

  useEffect(()=> {
    if(localStorage.quiz) {
      setGame(JSON.parse(localStorage.getItem("quiz")))
    } else {
      setGame([])
    }
  }, [])


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
          let allGame = Game.push(values)
          setGame(allGame)
          localStorage.setItem("quiz",JSON.stringify(Game))
          Navigate("/signin")
        
          
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
   <nav className="navbar navbar-expand-lg navbar-light shadow-sm " >
  <div className="container-fluid">
    <Link to='/' className="navbar-brand " ><img src={logo} width={120}  height={50}  alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <form className="d-flex">
        <button className="btn btn-outline-light  mx-5" type="submit"><Link to='/signup'>Create Account</Link></button>
        <button className="btn btn-outline-light" type="submit"><Link to='/signin'>Sign In</Link></button>
      </form>
      </div>
   
  </div>
</nav>

          


   <center>
        
        <h2 className="text-light my-5">Sign Up.</h2>
        <div className="container-fluid">
          <div className="row col-lg-3 shadow-sm mx-2">
            <button className="btn btn-dark my-2"><i class="fa fa-google-plus-official" aria-hidden="true"></i> Continue With Google</button>
            <button className="btn btn-dark my-2"> <i class="fa fa-facebook-official" aria-hidden="true"></i> Continue With Facebook</button>
          </div>
</div>
       
        <h6 className="text-light">------------&nbsp;&nbsp;&nbsp;&nbsp;Or&nbsp;&nbsp;&nbsp;&nbsp;------------</h6>

        <div className="container-fluid">
          <div className="row col-lg-3 ">
            <div className="col-12 shadow-sm mx-auto">
              <form action="" onSubmit={formik.handleSubmit}>
              <input
                  type="text"
                  placeholder="Firstname"
                  name='firstname'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2 bg-dark text-light"
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
                  className="form-control my-2 bg-dark text-light"
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
                  className="form-control my-2 bg-dark text-light"
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
                  className="form-control my-2 bg-dark text-light"
                />
                {formik.touched.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
                
            <button type="submit" className="btn btn-dark my-2 " id="submit">Next</button>

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