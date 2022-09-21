import { Link } from "react-router-dom";
import logo from '../assets/images/Removed2.png'

const NavBar = () => {
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
        <button className="btn btn-outline-light mx-4" type="submit"><Link to='/signin'>Sign In</Link></button>
      </form>
      </div>
      
   
  </div>
</nav>
    </>
  )
}

export default NavBar