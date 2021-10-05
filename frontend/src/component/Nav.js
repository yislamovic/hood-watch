import { Link } from 'react-router-dom'
import Image from '../assets/logo.png'
import {  useContext } from 'react';
import { authContext } from '../providers/AuthProvider';

function Nav() {
  const navStyle = {
    color: 'white'
  };
  
  const { logout, user } = useContext(authContext);

  
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