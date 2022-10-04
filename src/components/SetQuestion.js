import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const SetQuestion = () => {
    const navigate = useNavigate();
    const [allQuestion, setallQuestion] = useState([])

    let getQuestion = []
    if (localStorage.questions != null) {
        getQuestion= JSON.parse(localStorage.questions)
        
        
    }else{
        getQuestion= []
    }


    useEffect(() => {
      setallQuestion(getQuestion)
      
    
    }, [])
    
    const formik = useFormik({
        initialValues: {
          question: "",
          optionA: "",
          optionB: "",
          optionC: "",
          optionD: "",
          correctOption: ""

         },

          
    onSubmit:(values)=>{
        setallQuestion([...allQuestion, values])
        let questionArray = [...allQuestion, values]
        localStorage.questions = JSON.stringify(questionArray)
        setallQuestion("")
        navigate("/quizArea")
       
        

    },

        validationSchema: yup.object({
            question: yup.string().required("This field is required"),
            optionA:  yup.string().required("This field is required"),
            optionB:  yup.string().required("This field is required"),
            optionC:  yup.string().required("This field is required"),
            optionD:  yup.string().required("This field is required"),
            correctOption:  yup.string().required("This field is required"),
              
        })
})
  return (
    <>
    <center>


        <div className="container mt-5">
          <div className="row col-lg-3">
            <div className="col-12 shadow-sm rounded set mx-auto">
              <form action="" onSubmit={formik.handleSubmit}>
                <h5 className=' text-light p-2 rounded-pill w-7'>Set Your Quiz Question Here.</h5>
              <textarea
                  type="text"
                  placeholder="Type your question here"
                  name='question'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2"
                />
                {formik.touched.question && (
                <div className="text-danger">{formik.errors.question}</div>
              )}

                <input
                  type="text"
                  placeholder="Option A"
                  name='optionA'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2"
                />
                {formik.touched.optionA && (
                <div className="text-danger">{formik.errors.optionA}</div>
              )}
                
                <input
                  type="text"
                  placeholder="Option B"
                  name='optionB'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2"
                />
                {formik.touched.optionB && (
                <div className="text-danger">{formik.errors.optionB}</div>
              )}
                <input
                  type="text"
                  placeholder="Option C"
                  name='optionC'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2"
                />
                {formik.touched.optionC && (
                <div className="text-danger">{formik.errors.optionC}</div>
              )}
               <input
                  type="text"
                  placeholder="Option D"
                  name='optionD'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2"
                />
                {formik.touched.optionD && (
                <div className="text-danger">{formik.errors.optionD}</div>
              )}
               <input
                  type="text"
                  placeholder="Correct Option"
                  name='correctOption'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2"
                />
                {formik.touched.correctOption && (
                <div className="text-danger">{formik.errors.correctOption}</div>
              )}

            <button type="submit" className="btn btn-dark my-2 " id="submit">Set Question</button>
           

              </form>
            </div>
          </div>
         </div>
      </center>

    
    

    
    </>
  )
}

export default SetQuestion