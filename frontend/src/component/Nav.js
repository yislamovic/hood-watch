import { Link } from 'react-router-dom'
import Image from '../assets/logo.png'
import { useHistory } from 'react-router-dom';

function Nav(props) {
  const navStyle = {
    color: 'white'
  };
  const history = useHistory();

  const { user, setUser } = props;
  function userLogout() {
    setUser(null)
    history.push('/login');
  }

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
            <li onClick={userLogout}>Logout</li>
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