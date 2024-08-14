import React from "react";
import { Link } from "react-router-dom";
import PostSeller from "./PostSeller";

const PostItem = ({ id, postID, category, title, desc, sellerID, thumbnail }) => {
    const shortDescription = desc.length > 120 ? desc.substr(0, 120) + '...' : desc;
    const postTitle = title.length > 30 ? title.substr(0, 30) + '...' :title;
  return (
    <article className="posts">
      <div className="post__thumb">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="post__content">
        <Link to={`/posts/${postID}`}>
          <h3>{postTitle}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className="post__footer">
          <PostSeller />
          <Link to={`/posts/categories/${category}`} className="btn category">
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
