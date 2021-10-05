import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export const authContext = createContext();

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  let history = useHistory();
  
    function login(email, password, obj) {
    setUser({ email: obj.email });
    setAuth(true);
    console.log("hello i am user!!")
    console.log("AUTH USER 19 ----->", user)
    // localStorage.setItem('user',JSON.stringify(user))
  };

  const logout = function (email, password, obj) {
    setAuth(false);
    setUser(null);
    // history.push('/login');
  };
   
  
  // SENDING IT OUT

  // authContext will expose these items
  const userData = { auth, user, login, logout };

  // We can use this component to wrap any content we want to share this context (makes sense)
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};