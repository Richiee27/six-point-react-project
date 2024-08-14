import React, { useEffect, useState } from "react";
import "../css/form.css";
import { supabase } from "../index";
import {useQuill} from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const EditPost = () => {

  const { quill, quillRef } = useQuill();

  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({
    title: "",
    desc: "",
    category: "",
    seller: "",
    price: "",
  });

  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data } = await supabase.from("product_jual").select("*");
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
    await supabase.from('product_jual').insert({ });
  }

  return (
    <section className=" min-vh-100 auto edit-form">
      <div className="container">
        <h2>Edit Konten</h2>
        <form
          method="post"
          className="form login__form"
          action="/"
          onSubmit={createUser}
        >
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
          <select name="kategori" id="kategori" onChange={handleChange}>
            <option value="uncategorized">Uncategorized</option>
            <option value="headgear">Headgear</option>
            <option value="backpack">Backpack</option>
            <option value="bodygear">Bodygear</option>
            <option value="footwear">Footwear</option>
            <option value="accesories">Accesories</option>
          </select>
          <div className="quill">
            <div style={{ width: 400, height: 100, marginBottom: 100, textAlign: "start"}}>
              <div ref={quillRef}></div>
            </div>
          </div>
          <input
            type="text"
            id="seller"
            name="seller"
            placeholder="Isi nama"
            onChange={handleChange}
          />
          <input
            type="number"
            name="harga"
            placeholder="harga"
            onChange={handleChange}
          />
          <input type="file" name="thumbnail" onChange={handleChange} />
          <button type="submit" onSubmit="{createUser}" className="btn primary">
            Edit
          </button>
        </form>
      </div>
    </section>
  );
};
export default EditPost;
