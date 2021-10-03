import "../styles/Login.css";
import useForm from "../hooks/useForm";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


export default function Login(props) {
  const { handleChange, handleSubmit, values, setValues } = useForm(handleLoginForm);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  let history = useHistory();

  function handleLoginForm() {
    // Email
    if (!values.email) {
      return setErrors({ email: "Email is required" })
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      return setErrors({ email: "Email is invalid" })
    }

    // Password
    if (!values.password) {
      return setErrors({ password: "Password is required" })
    } else if (values.password.length < 8) {
      return setErrors({ password: "Password must be 8 characters long" })
    }
    console.log("Form Submitted!!")
    setValues({});
  }

  function userLogin() {
    const getData = async () => {
      try {
        console.log('Form Submission')
        const [loginSubmit] = await Promise.all([
          axios.post(`http://localhost:3000/login`, { values })
        ]).then(() => {
          history.push('/')
        })
        console.log("over here im values", values);
        await console.log('im response.data', loginSubmit);
        return loginSubmit;
      } catch (err) {
        console.log(err);
      }
    }
    getData()
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
