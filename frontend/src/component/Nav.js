import { Link } from 'react-router-dom'
import Image from '../assets/logo.png'
import {  useContext, useEffect } from 'react';
import { authContext } from '../providers/AuthProvider';
import { useHistory } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'
  };
  
  const { logout, user, setUser } = useContext(authContext);
  const history = useHistory();

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
          <Link style={navStyle} to='/posts'>
            <li>See Posts</li>
          </Link>
          <Link style={navStyle} to='/map'>
            <li>View Map</li>
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