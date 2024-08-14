import React, { useState } from "react";
import { Link } from "react-router-dom";
import Thumbnail from "../assets/img/images/bahan/atac_vest.jpg";
import PostSeller from "../components/PostSeller";
import Item from "./Item";
import { DUMMY_POSTS } from "../dataa";

const PostDetail = (id) => {
  const [props, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div key={props.id}>
          <h2>ATAC LV119</h2>
          <div className="post-detail__thumbnail">
            <img src={Thumbnail} alt="gambar" />
          </div>
          <Link to></Link>
          <p>
            WTS repro dari Spiritus System LV119, bahan cordura 1000D, tahan
            air, dapat dimasukkan plat anti peluru Level IV.
          </p>
          <div className="post-detail__header">
            <PostSeller />
          </div>
          <div className="post-detail__buttons">
            <Link to={"https://wa.me/082134701083"} className="btn sm primary fs-5">
              Whatsapp
            </Link>
            <Link to={"/keranjang"}>
              <i className="fa-solid fa-cart-plus fs-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
