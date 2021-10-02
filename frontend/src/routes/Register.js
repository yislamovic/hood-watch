import "../styles/Register.css";
import useForm from "../hooks/useForm";
import { useState, useEffect } from 'react';

function Register() {
  const { handleChange, handleSubmit, values, setValues } = useForm(handleRegisterForm)
  const [isDisabled, setIsDisabled] = useState(true)
  const [errors, setErrors] = useState({})

  function handleRegisterForm(){
    // Email
    if (!values.email) {
        return setErrors({email: "Email is required"})
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      return setErrors({email: "Email is invalid"})
    }
    
    // Password
    if (!values.password) {
      return setErrors({password: "Password is required"})
    } else if (values.password.length < 8) {
      return setErrors({password: "Password must be 8 characters long"})
    }
    // Password Confirm
    if (!values.password_confirm) {
        return setErrors({password_confirm: "Password Confirmation is required"})
    } else if (values.password_confirm !== values.password) {
        return setErrors({password_confirm: "Passwords do not match"})
    }
    console.log("Form Submitted!!")
    setValues({});
  }

  // anytime the value changes, want to run this function
  // you change the state, instead of react changing right away, it changes on the next render => immutability
  // rerun the component with the new value
  useEffect(() => {
    if (Object.values(values).filter(value => value !== "").length === 9) {
      setIsDisabled(false)
     } else {
       setIsDisabled(true)
     }
  }, [values])

  return (
    <>
    <div className="register-container">
      <h1 className="header">Register a New Account!</h1>
       <div className="register-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
         
         <div className="register-form-group">
          <label>First Name: </label>
          <input type="text"
           name="first_name" 
           placeholder="first name"
           value={values.first_name}
           onChange={handleChange}
           required
           >
           </input>
          </div>
        
        <div className="register-form-group">
          <label>Last Name: </label>
          <input type="text"
           name="last_name" 
           placeholder="last name"
           value={values.last_name}
           onChange={handleChange}
           required
           >
          </input>
        </div>
       
        <div className="register-form-group">
          <label>Country: </label>
          <input type="text"
           name="country" 
           placeholder="country"
           value={values.country}
           onChange={handleChange}
           required
           ></input>
        </div>
        
        <div className="register-form-group">
          <label>Province/State: </label>
          <input type="text"
           name="province_or_state" 
           placeholder="province/state"
           value={values.province_or_state}
           onChange={handleChange}
           required 
           ></input>
        </div>

        <div className="register-form-group">
          <label>City: </label>
          <input type="text"
           name="city" 
           placeholder="city"
           value={values.city}
           onChange={handleChange}
           required
           >
          </input>
        </div>

        <div className="register-form-group">
          <label>Street: </label>
          <input type="text"
           name="street"
           value={values.street}
           onChange={handleChange}
           placeholder="street"
           required 
            >
            </input>
        </div>
        
        <div className="register-form-group">
          <label>Email: </label>
          <input type="email"
           name="email" 
          placeholder="email"
          value={values.email}
          onChange={handleChange}
          required
          >
          </input>
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="register-form-group">
          <label>Password: </label>
          <input type="password"
           name="password" 
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          required
          >
          </input>
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <div className="register-form-group">
          <label>Confirm Password: </label>
          <input type="password"
           name="password_confirm" 
          placeholder="password"
          value={values.password_confirm}
          onChange={handleChange}
          required
          ></input>
          {errors.password_confirm && <p className="error-message">{errors.password_confirm}</p>}
        </div>

        <div className="button-container">
          <button type="submit" className="btn" disabled={isDisabled}>Register</button>
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </form>
      </div>
    </div>
   </>
    
  );
}

export default Register;