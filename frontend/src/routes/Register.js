import "../styles/Register.css";
import useForm from "../hooks/useForm";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Register() {
  const { handleChange, handleSubmit, values, setValues } = useForm(handleRegisterForm);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  let history = useHistory();

  function handleRegisterForm() {
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
    // Password Confirm
    if (!values.password_confirm) {
      return setErrors({ password_confirm: "Password Confirmation is required" })
    } else if (values.password_confirm !== values.password) {
      return setErrors({ password_confirm: "Passwords do not match" })
    }
    console.log("Form Submitted!!")
    setValues({});
  }

  function userSubmitData() {
    const getData = async () => {
      try {
        console.log('Form Submission')
        if (values.password_confirm !== values.password) {
          console.log("Passwords don't match 40")
          return;
        }
        const [formSubmit] = await Promise.all([
          axios.post(`http://localhost:3000/register`, { values })
        ]).then(() => {
          history.push("/login");
        })
        await console.log('im response.data', formSubmit)
        return formSubmit.data
      } catch (err) {
        console.log(err);
      }
    }
    getData()
  }

  // anytime the value changes, want to run this function
  // you change the state, instead of react changing right away, it changes on the next render => immutability
  // rerun the component with the new value
  useEffect(() => {
    if (Object.values(values).filter(value => value !== "").length === 6) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [values])

  return (
    <>
      <div className="register-container">
        <div className="register-form-container">
          <h1 className="header">Register a New Account!</h1>
          <form className="register-form" onSubmit={handleSubmit}>

            <div className="register-form-group">
              <label className="register-label">First Name: </label>
              <input type="text"
                name="first_name"
                className="register-box"
                placeholder="first name"
                value={values.first_name}
                onChange={handleChange}
                required
              >
              </input>
            </div>

            <div className="register-form-group">
              <label className="register-label">Last Name: </label>
              <input type="text"
                name="last_name"
                className="register-box"
                placeholder="last name"
                value={values.last_name}
                onChange={handleChange}
                required
              >
              </input>
            </div>

            <div className="register-form-group">
              <label className="register-label">Address: </label>
              <input type="text"
                name="address"
                className="register-box"
                placeholder="address"
                value={values.address}
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className="register-form-group">
              <label className="register-label">Email: </label>
              <input type="email"
                name="email"
                className="register-box"
                placeholder="email"
                value={values.email}
                onChange={handleChange}
                required
              >
              </input>
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="register-form-group">
              <label className="register-label">Password: </label>
              <input type="password"
                name="password"
                className="register-box"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
                required
              >
              </input>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="register-form-group">
              <label className="register-label">Confirm Password: </label>
              <input type="password"
                name="password_confirm"
                className="register-box"
                placeholder="confirm password"
                value={values.password_confirm}
                onChange={handleChange}
                required
              ></input>
              {errors.password_confirm && <span className="error-message">{errors.password_confirm}</span>}
            </div>

            <div className="register-button-container">
              <button type="submit" className="register-btn" disabled={isDisabled} onClick={() => userSubmitData()}>Register</button>
              <p>Already have an account? <a href="/login">Login here</a></p>
            </div>
          </form>
        </div>
      </div>
    </>

  );
}

export default Register;