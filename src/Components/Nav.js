import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Nav = () => {
  let auth = localStorage.getItem("user")
  const navigate = useNavigate();
  
  const Logout = () => {
    localStorage.clear();
    navigate("/signup");
  }

  return (
    <div>
      <img 
        src='https://i.pinimg.com/originals/78/77/bb/7877bbbcf27abe683040c534f528a23a.jpg' 
        alt='Logo'
        className='nav-logo'
      />

        {
          auth
          ?
          <>
            <ul className='nav-ul'>
              <li><Link to={"/"}>Products</Link></li>
              <li><Link to={"/add"}>Add Product</Link></li>
              {/* <li><Link to={"/update/0"}>Update Product</Link></li> */}
              <li><Link to={"/profile"}>Profile</Link></li>
              <li><Link onClick={Logout} to={"/signup"}>Logout</Link></li>
            </ul>
          </>
          :
          <>
              <ul className='nav-ul nav-right'>
              <li><Link to={"/Login"}>Login</Link></li> 
              <li><Link to={"/signup"}>SignUp</Link></li>
            </ul>
          </>
        }
        
    </div>
  )
}

export default Nav;