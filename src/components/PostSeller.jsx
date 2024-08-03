import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/img/images/Avatar/ava2.jpg";

const PostSeller = () => {
  return (
    <Link to={"./posts/users/ysysy"} className="seller__post">
      <div className="post__seller-ava">
        <img src={Avatar} alt="" />
      </div>
      <div className="post__seller-details">
        <h5>Oleh: Fajar</h5>
        <small>5 Hari Lalu</small>
      </div>
    </Link>
  );
};

export default PostSeller;
