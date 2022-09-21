import "../assets/css/Dashboard.css"
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/Removed2.png'

const Dashboard = () => {
  function toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active')
    toggle.classList.toggle('active')
}
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm py-2" >
  <div className="container-fluid p-0">
    <Link to='/' className="navbar-brand p-0" style={{borderRadius:"15px"}} ><img className='p-0' src={logo} width={65}  alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <form className="d-flex ">
        <button className="btn btn-outline-light  mx-3" type="submit"><Link to='/signup'> Create Account</Link></button>
        <button className="btn btn-outline-light mx-4" type="submit"><Link to='/signin'>Log Out</Link></button>
      </form>
      </div>
      
   
  </div>
</nav>
    <div class="navigation">
        <ul>
            <li>
                <a href="#">
                   <span class="icon"><i class="fa fa-home" aria-hidden="true"></i></span> 
                   <span class="title">Home</span>
                </a>
            </li>
            <li>
                <a href="#">
                   <span class="icon"><i class="fa fa-user" aria-hidden="true"></i></span> 
                   <span class="title">Profile</span>
                </a>
            </li>
            <li>
                <a href="#">
                   <span class="icon"><i class="fa fa-comment" aria-hidden="true"></i></span> 
                   <span class="title">Messages</span>
                </a>
            </li>
            <li>
                <a href="#">
                   <span class="icon"><i class="fa fa-question-circle" aria-hidden="true"></i></span> 
                   <span class="title">Help</span>
                </a>
            </li>
            <li>
                <a href="#">
                   <span class="icon"><i class="fa fa-cog" aria-hidden="true"></i></span> 
                   <span class="title">Setting</span>
                </a>
            </li>
            <li>
                <a href="#">
                   <span class="icon"><i class="fa fa-lock" aria-hidden="true"></i></span> 
                   <span class="title">Password</span>
                </a>
            </li>
            <li>
                <a href="#">
                   <span class="icon"><i class="fa fa-sign-out" aria-hidden="true"></i></span> 
                   <span class="title">Sign Out</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="toggle" onClick={toggleMenu}></div>
    </>
  )
}

export default Dashboard