import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/form.css'

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    passwordcfrm: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className="register">
      <div className="container">
        <h2>Daftarkan akunmu</h2>
        <form method="post" className="form register__form" action="/login">
          <p className="form_error">Gagal menambahkan</p>
          <input
            type="text"
            placeholder="Username"
            name="name"
            value={userData.name}
            onChange={changeInputHandler}
            autoFocus
          />
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
          <input
            type="password"
            placeholder="Confirm password"
            name="passwordcfrm"
            value={userData.passwordcfrm}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary">
            Daftar
          </button>
        </form>
        <small>
          Sudah punya akun? <Link to="/login">Sign In</Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
