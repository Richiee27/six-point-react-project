import React, { useState } from "react";
import "../css/posts.css";
import Item from "./Item";
import { DUMMY_POSTS } from "../dataa";


const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <div className="post min-vh-100 align-items-center">
      <h1>Produk Tactical Terbaru</h1>
      <hr />
      <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="/jual">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">&raquo;</a>
      </div>

      <div className="posts-item">
        {DUMMY_POSTS.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              title={item.title}
              seller={item.seller}
              desc={item.desc}
              image={item.thumbnail}
              category={item.category}
              phone={item.phone}
              new_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
