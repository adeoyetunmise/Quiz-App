import React from 'react'
import "../assets/css/QuizArea.css";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/Removed2.png'
import { useState } from 'react';
import { useEffect } from 'react';

const QuizArea = () => {
    const [quiz, setquiz] = useState([])
    const [quizArray, setquizArray] = useState({})
    const [activeIndex, setactiveIndex] = useState(1)
    let currentUser = JSON.parse(localStorage.currentUser)
    let getQuiz = JSON.parse(localStorage.questions)
    const getRandomQuestion = getQuiz.sort(
        ()=>
        0.5 - Math.random()
    );
    localStorage.randomQuestion = JSON.stringify(getRandomQuestion)
    const getQuestion =JSON.parse(localStorage.randomQuestion)

    useEffect(() => {
      setquiz(getQuestion)
      setquizArray(getQuestion[0])
      console.log(getQuestion);

    
     
    }, [])
    

    let answer = quizArray.correctOption
    const nextQuestion =()=>{
        let i = activeIndex + 1
        if (i === quiz.length) {
            return console.log("done");
            
        }
        setactiveIndex(i)
        console.log(activeIndex + 1)
        console.log(quiz);  
        setquizArray(quiz[activeIndex])
      }
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
        <button className="btn btn-outline-light  mx-5" type="submit"><Link to='/dashboard'> Dashboard</Link></button>
        <button className="btn btn-outline-light" type="submit"><Link to='/signin'>Sign In</Link></button>
      </form>
      </div>
   
  </div>
</nav>


            <div className="container mt-2" id="contain-cards">
                <div className="container-fluid mt-lg-0">
                    <div className="row mx-auto">
                        <h5 className=' card text-dark mt-5 row col-lg mx-lg-3 mx-auto align-items-center justify-content-center'>
                           {quizArray.question}</h5>
                    </div>
                    <h2 className='text-light mt-5 text-center col-lg'>Options</h2>
                </div>
            </div>

            <div className="container mt-2" id="contain-cards">
                <div className="container-fluid mt-lg-5 p-2 py-3">
                    <div className="row mx-auto p-2 mb-4">
                        <div className="col mx-5" id="options">
                            A.
                        </div>
                      
                        <div className="col mx-5" id="options">
                            B.
                        </div>
                    </div>

                    <div className="row mx-auto p-2 mt-5">
                        <div className="col mx-5" id="options">
                            C.
                        </div>
                        
                        <div className="col mx-5" id="options">
                            D.
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-5" id="contain-cards">
                 <div className="container-fluid my-5 px-4 d-flex">
                        <div className='mx-2'><button className='btn btn-outline-light' id='quizbtn'>Previous</button></div>
                        <div className='mx-2'><button className='btn btn-outline-light'  id='quizbtn'>Next</button></div>
                        <div className='mx-2 btn-end'><button  className='btn btn-outline-light' id='quizbtn'>Submit</button></div>
                </div>
              
            </div>
            









        </>
    )
}

export default QuizArea
