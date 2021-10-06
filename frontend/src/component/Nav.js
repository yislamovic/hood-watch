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
        <a className="owl" href='/'>🦉</a>
        <ul className='nav-links'>
          <span style={navStyle} to='/posts'>
            <li className="link">See Posts</li>
          </span>
          <span style={navStyle} to='/map'>
            <li className="link">View Map</li>
          </span>
          <span style={navStyle}>
          <li className="link">{user.email}</li>
          </span>
          <span style={navStyle} to='/login'>
            <li className="link" onClick={logout}>Logout</li>
          </span>
        </ul>
    </nav>
    );
  } else {
    return (
      <nav>
        <a className="owl" href='/'>🦉</a>
        <ul className='nav-links'>
          <Link style={navStyle} to='/map'>
            <li>View Map</li>
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