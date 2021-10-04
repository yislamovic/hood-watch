import { Link } from 'react-router-dom'
import React, { useState } from "react";
import Image from '../assets/logo.png'
function Nav() {
  const navStyle = {
    color: 'white'
  };
  const [email, setEmail] = useState("");
  const [user, setUser] = useState();

  if (user) {
    return (
      <nav> 
        <img src={Image} alt="logo" width="80px" height="56px"/>
        <ul className='nav-links'>
          <Link style={navStyle} to='/'>
            <li>Home</li>
          </Link>
          <Link style={navStyle} to='/logout'>
          <div>{email} is loggged in</div>;
            <li>Logout</li>
          </Link>
          <Link style={navStyle} to='/register'>
            <li>Register</li>
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