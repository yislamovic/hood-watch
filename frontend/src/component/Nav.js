import { Link } from 'react-router-dom'
import Image from '../assets/logo.png'
import {  useContext, useEffect } from 'react';
import { authContext } from '../providers/AuthProvider';

function Nav() {
  const navStyle = {
    color: 'white'
  };
  
  const { logout, user, setUser } = useContext(authContext);

  useEffect(() => {
    let userObj = JSON.parse(localStorage.getItem('user'))
    if (userObj) {
      setUser(userObj)
    }
  },[])


  if (user) {
    return (
      <nav> 
        <img src={Image} alt="logo" width="80px" height="56px"/>
        <ul className='nav-links'>
          <Link style={navStyle} to='/'>
            <li>Home</li>
          </Link>
          <Link style={navStyle}>
          <li>{user.email}</li>
          </Link>
          <Link style={navStyle} to='/login'>
            <li onClick={logout}>Logout</li>
          </Link>
        </ul>
    </nav>
    );
  } else {
    return (
      <nav>
        <img src={Image} alt="logo" width="80px" height="56px"/>
        <ul className='nav-links'>
          <Link style={navStyle} to='/'>
            <li>Home</li>
          </Link>
          <Link style={navStyle} to='/posts'>
            <li>See Posts</li>
          </Link>
          <Link style={navStyle} to='/login'>
            <li>Login</li>
          </Link>
          <Link style={navStyle} to='/register'>
            <li>Register</li>
          </Link>
        </ul>
    </nav>
    );
  }
}


export default Nav;