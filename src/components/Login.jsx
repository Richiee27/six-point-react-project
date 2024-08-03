import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

console.log(Login);
  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className="login">
      <div className="container">
        <h2>Masuk akun</h2>
        <form method="post" className="form login__form" action="/">
          <p className="form_error">Gagal menambahkan</p>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <button type="submit" onClick="myFunction()" className="btn primary">
            Login
          </button>
        </form>
        <small>
          Belum punya akun? <Link to="/register">Sign Up</Link>
        </small>
      </div>
    </section>
  );
}
export default Login;
