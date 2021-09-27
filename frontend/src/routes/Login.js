import "../styles/Login.css";

function Login() {

  return (
    <>
    <div className="container">
      <div className="header">Login</div>
       <div class="form-container">
        <form>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" name="email" placeholder="email" required></input>
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" name="password" placeholder="password" required></input>
        </div>
        <div className="button-container">
          <button type="submit" className="btn">Login</button>
        </div>
      </form>
      </div>
    </div>
   </>
  );
}

export default Login;