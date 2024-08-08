import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/form.css'
import { supabase } from "..";

const Register = () => {
  const [users, setUsers] = useState();

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
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
    .insert({ email: 'user_acc.email', username: 'user_acc.username', password: 'user_acc.password'})
  }

  return (
    <section className="register">
      <div className="container p-0">
        <h2>Daftarkan akunmu</h2>
        <form method="post" className="form register__form" action="/login" onSubmit={createUser}>
          <p className="form_error">Gagal menambahkan</p>
          <input
            type="text"
            placeholder="Username"
            name="name"

            onChange={handleChange}
            autoFocus
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="password"
            onChange={handleChange}
          />
          <button type="submit" onSubmit={createUser} className="btn primary">
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
