import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div className="my-5">
        <div className="container py-1 py-md-5">
          <div
            id="message"
            className="shadow p-5 my-md-5 my-0"
            style={{
              background: "rgba(255,255,255,.2)",
              backdropFilter: "blur(5px)",
              borderRadius: "5px",
            }}
          >
            <h1 className='display-1 text-center text-light'>404</h1>
            
            <h2 className='text-center text-light'>Oops!!! The page you are looking for was not found!</h2>
            <center>
           <Link to="/"> <button className='btn btn-outline-light text-light mt-4' style={{background:"none"}}>Home Page</button></Link>
            </center>
          </div>
        </div>
      </div>
    
    
    </>
  )
}

export default NotFound