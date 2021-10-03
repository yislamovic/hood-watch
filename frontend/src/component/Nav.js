import { Link } from 'react-router-dom';
import Image from '../assets/owl.png';


function Nav(props) {
  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
        <img src={Image} alt="logo" width="80px" height="60px"/>
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

export default Nav;