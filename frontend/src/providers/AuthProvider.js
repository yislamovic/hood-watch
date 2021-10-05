import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';


export const authContext = createContext();

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  
  function login(email, password, obj) {
      
      setAuth(true);
      console.log("hello i am user!!")
      let user = obj
      delete user.person_password;
      
      const refreshPage = new Promise((res,rej) => {
        localStorage.setItem('user', JSON.stringify(user))
        res(console.log("I LIKE TACOS"))
        rej("HAHHAHA YOU'RE NOT DONE UR FINAL")
      })

    refreshPage
    .then(() => {
      window.location.reload()
    })
  };

  const logout = function (email, password, obj) {
    setAuth(false);
    setUser(null);
    localStorage.setItem('user', null);
  };
   
  
  // SENDING IT OUT

  // authContext will expose these items
  const userData = { auth, user, setUser, login, logout };

  // We can use this component to wrap any content we want to share this context (makes sense)
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};