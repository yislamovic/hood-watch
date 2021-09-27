import "../styles/Register.css";
import useForm from "./useForm";
import validateInfo from "./validateInfo";

function Register() {
  const { handleChange, values, handleSubmit, errors } = useForm(validateInfo)
  return (
    <>
    <div className="container">
      <h1 className="header">Register a New Account!</h1>
       <div className="form-container">
        <form onSubmit={handleSubmit}>
         
         <div className="form-group">
          <label>First Name:</label>
          <input type="text"
           name="first_name" 
           placeholder="first name"
           value={values.first_name}
           onChange={handleChange}
           >
           </input>
           {errors.first_name && <p className="error-message">{errors.first_name}</p>}
          </div>
        
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text"
           name="last_name" 
           placeholder="last name"
           value={values.last_name}
           onChange={handleChange}
           >
          </input>
          {errors.last_name && <p className="error-message">{errors.last_name}</p>}
        </div>
       
        <div className="form-group">
          <label>Country:</label>
          <input type="text"
           name="country" 
           placeholder="country"
           value={values.country}
           onChange={handleChange}
           ></input>
           {errors.country && <p className="error-message">{errors.country}</p>}
        </div>
        
        <div className="form-group">
          <label>Province/State:</label>
          <input type="text"
           name="province_or_state" 
           placeholder="province/state"
           value={values.province_or_state}
           onChange={handleChange} 
           ></input>
           {errors.province_or_state && <p className="error-message">{errors.province_or_state}</p>}
        </div>

        <div className="form-group">
          <label>City:</label>
          <input type="text"
           name="city" 
           placeholder="city"
           value={values.city}
           onChange={handleChange}
           >
          </input>
          {errors.city && <p className="error-message">{errors.city}</p>}
        </div>

        <div className="form-group">
          <label>Street:</label>
          <input type="text"
           name="street"
           value={values.street}
           onChange={handleChange} 
           placeholder="street"
            >
            </input>
            {errors.street && <p className="error-message">{errors.street}</p>}
        </div>
        
        <div className="form-group">
          <label>Email:</label>
          <input type="email"
           name="email" 
          placeholder="email"
          value={values.email}
          onChange={handleChange}
          >
          </input>
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password"
           name="password" 
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          >
          </input>
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password"
           name="password_confirm" 
          placeholder="password"
          value={values.password_confirm}
          onChange={handleChange}
          ></input>
          {errors.password_confirm && <p className="error-message">{errors.password_confirm}</p>}
        </div>

        <div className="button-container">
          <button type="submit" className="btn">Register</button>
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </form>
      </div>
    </div>
   </>
    
  );
}

export default Register;