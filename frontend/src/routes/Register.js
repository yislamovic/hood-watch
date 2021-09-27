import "../styles/Register.css";

function Register() {

  return (
    <>
    <div className="container">
      <h1 className="header">Register a New Account!</h1>
       <div className="form-container">
        <form>
        
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="first_name" placeholder="first name" required></input>
        </div>
        
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="last_name" placeholder="last name" required></input>
        </div>
       
        <div className="form-group">
          <label>Country:</label>
          <input type="text" name="country" placeholder="country" required></input>
        </div>
        
        <div className="form-group">
          <label>Province/State:</label>
          <input type="text" name="province_or_state" placeholder="province/state" required></input>
        </div>

        <div className="form-group">
          <label>City:</label>
          <input type="text" name="city" placeholder="city" required></input>
        </div>

        <div className="form-group">
          <label>Street:</label>
          <input type="text" name="street" placeholder="street" required></input>
        </div>
        
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" placeholder="email" required></input>
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" placeholder="password" required></input>
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="password" placeholder="password" required></input>
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