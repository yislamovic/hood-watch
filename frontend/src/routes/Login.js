function Login() {

  return (
    <>
    <h3>Login</h3>
    <form>
    <div>
    <label>Enter Email:</label>
      <input type="email" name="email" placeholder="enter email" required></input>
    </div>
    <div>
    <label>Enter Password:</label>
    <input type="password" name="password" placeholder="enter password" required></input>
    </div>
    </form>
   </>
  );
}

export default Login;