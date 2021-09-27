import "../styles/Login.css";

function Login() {

  return (
    <>
    <div className="container">
      <h1 className="header">Login</h1>
      <div className="form-container">
        <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" placeholder="email" required></input>
        </div>
        <div className="form-group">
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