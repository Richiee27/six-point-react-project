import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../index";

const Login = () => {
  const [users, setUsers] = useState();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data } = await supabase.from("user_acc").select("*");
    setUsers(data);
    console.log(data);
  }

  function handleChange(e) {
    setUser((PrevFormData) => {
      return {
        ...PrevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function createUser() {
    await supabase 
    .from('user_acc')
    .insert({ username: 'user_acc.username', password: 'user_acc.password'})
  }

  return (
    <section className="login" data-aos="fade-up">
      <div className="container">
        <h2>Masuk akun</h2>
        <form method="post" className="form login__form" action="/" onSubmit={createUser}>
          <p className="form_error">Gagal menambahkan</p>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm password"
            value={user.password}
            onChange={handleChange}
          />
          <button type="submit" onSubmit="{createUser}" className="btn primary">
            Login
          </button>
        </form>
        <small>
          Belum punya akun? <Link to="/register">Sign Up</Link>
        </small>
      </div>
    </section>
  );
};
export default Login;
