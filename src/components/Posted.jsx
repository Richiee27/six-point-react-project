import React, { useState } from "react";
import PostItem from "./PostItem";

import { DUMMY_POSTS } from "../dataa";

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  console.log("DUMMY_POSTS");
  return (
    <section className="posts">
      {posts.length > 0 ? <div className="container posts__container">
        {posts.map(
          ({ id, thumbnail, category, title, desc, sellerID, harga }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              desc={desc}
              harga={harga}
              sellerID={sellerID}
            />
          )
        )}
      </div> : <h2 className="center">Ups, tidak ada postingan</h2> }
    </section>
  );
};

export default Posts;
