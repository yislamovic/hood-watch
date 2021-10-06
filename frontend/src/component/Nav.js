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
         <span style={navStyle}>
          <li className="link">{user.email}</li>
          </span>
          <span style={navStyle}>
            <li><a className="link" href='/posts'>See Posts</a></li>
          </span>
          <span style={navStyle} to='/map'>
           <li><a className="link" href='/map'>View Map</a></li>
          </span>
          <span style={navStyle} to='/login'>
           <li onClick={logout}><a className="link" href='/login'>Logout</a></li>
          </span>
        </ul>
    </nav>
    );
  } else {
    return (
      <nav>
        <a className="owl" href='/'>🦉</a>
        <ul className='nav-links'>
          <span style={navStyle}>
            <li><a className="link" href='/map'>View Map</a></li>
          </span>
          <span style={navStyle}>
            <li><a className="link" href='/login'>Login</a></li>
          </span>
          <span style={navStyle}>
            <li><a className="link" href='/register'>Register</a></li>
          </span>
        </ul>
    </nav>
    );
  }
}


export default Nav;