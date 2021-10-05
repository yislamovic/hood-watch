import "../styles/Login.css";
import useForm from "../hooks/useForm";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { authContext } from '../providers/AuthProvider';

export default function Login() {

  const { handleChange, handleSubmit, values, setValues } = useForm(handleLoginForm);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  let history = useHistory();
  const { login } = useContext(authContext);
  const email = values.email;
  const password = values.password;


  
  // FORM VALIDATIONS ON SUBMIT
  function handleLoginForm() {
    // Email
    if (!email) {
      return setErrors({ email: "Email is required" })
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return setErrors({ email: "Email is invalid" })
    }

    // Password
    if (!password) {
      return setErrors({ password: "Password is required" })
    } else if (password.length < 8) {
      return setErrors({ password: "Password must be 8 characters long" })
    }
    console.log("Form Submitted!!")
    setValues({});
  }


  // GETTING BACK AXIOS INFO
  const userLogin = () => {
    axios.post(`http://localhost:8000/login`, { values })
    .then((res) => {
      const userObj = res.data;
      console.log("RES 45", res)
      console.log("RES.DATA 46 ---->", userObj)
      if (!userObj) {
        return;
      } else {
        login(email, password, userObj);
      }
      history.push('/');
    })
  }
  
  useEffect(() => {
    if (Object.values(values).filter(value => value !== "").length === 2) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [values])

  return (
    <>
    <div className="login-container">
        <h1 className="header">Login</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit} >
            <div className="form-group">
              <label>Email: </label>
              <input type="email" name="email" placeholder="email" onChange={handleChange} required></input>
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input type="password" name="password" placeholder="password" onChange={handleChange} required></input>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <div className="button-container">
              <button type="submit" className="btn" disabled={isDisabled} onClick={userLogin}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>

    
  
  );
}
