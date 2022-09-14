import React from 'react'
import logo from '../assets/images/tenaThomas.png'
import "../assets/css/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light shadow-sm p-0" >
  <div className="container-fluid p-0">
    <Link to='/' className="navbar-brand p-0" style={{borderRadius:"15px"}} ><img className='p-0' src={logo} width={65}  alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      
      <form className="d-flex">
        <button className="btn btn-outline-light  mx-3" type="submit"><Link to='/signup'> Create Account</Link></button>
        <button className="btn btn-outline-light mx-4" type="submit"><Link to='/signin'>Sign In</Link></button>
      </form>
   
  </div>
</nav>


<footer></footer>
   
   </>
  )
}

export default Home