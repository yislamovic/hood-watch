import { createContext, useState } from 'react';
export const authContext = createContext();

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({ email: "", name: "", id: "" });

  // Perform login process for the user & save authID, etc

  // handleUserLogin
  const login = function (email, password) {
    setAuth(true);
    setUser({ email });
    
  };

  const logout = function (email, password) {
    setUser({ email: "" });
    setAuth(false);
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