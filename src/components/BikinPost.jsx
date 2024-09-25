import React, { useEffect, useState } from "react";
import "../css/form.css";
import { supabase } from "../index";
import {useQuill} from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const BikinPost = () => {

  const { quill, quillRef } = useQuill();

  const {desc, setDesc} = useState("");

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
    <section className="create-form">
      <div className="container">
        <h2>Mulai Posting</h2>
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
          <div>
            <div style={{ width: 330, height: 150, marginBottom: 100}}>
              <div ref={quillRef} onChange={setDesc}></div>
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
            type="text"
            inputMode="numeric"
            name="harga"
            placeholder="harga"
            onChange={handleChange}
          />
          <input type="file" name="thumbnail" onChange={handleChange} accept="jpg,jpeg,png" />
          <button type="submit" onSubmit="{createUser}" className="btn primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
export default BikinPost;
