import React from "react";
import "../css/item.css";
import { Link } from "react-router-dom";


const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="gambar" />
      <p>{props.title}</p>
      <p>{props.name}</p>
      <p>{props.desc}</p>
      <div className="item-seller">
        <p>by: {props.seller}</p>
      </div>
      <div className="item-prices">
        <div className="item-price-new">Rp.{props.new_price}</div>
      </div>
      <div className="item-container">
        <button className="btn-group"><Link to='/category'>{props.category}</Link></button>
        <button className="btn-group-1"><Link to='/'>+{props.phone}</Link></button>
      </div>
    </div>
  );
};

export default Item;
