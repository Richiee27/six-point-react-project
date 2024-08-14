import React from "react";
import "../css/item.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Item = (props, {postID, category}) => {
  return (
    <Card
      style={{
        width: "16rem",
        boxShadow: "1px 1px 1px 1px",
        alignItems: "center",
      }}
    >
      <div className="item">
        <Card.Img variant="top" src={props.image} alt={props.title}/>
        <Card.Body>
          <Card.Text style={{ textAlign: "left" }}>
            <Card.Title>
              <Link to={`/posts/detail/${postID}`}>
              <p>{props.title}</p>
              </Link>
            </Card.Title>
            <p>{props.name}</p>
            <p>{props.desc}</p>
            <div className="item-seller">
              <p>by: {props.seller}</p>
            </div>
          </Card.Text>
          <Card.Text style={{ textAlign: "left" }}>
            <div className="item-prices">
              <div className="item-price-new">Rp.{props.new_price}</div>
            </div>
          </Card.Text>
            <div className="item-container">
              <button className="btn-group">
                <Link to="/category">{props.category}</Link>
              </button>
              <button className="btn-group-1">
              <Link to={"https://api.whatsapp.com/send?phone=6282134701083"} className="">
              Whatsapp
            </Link>
              </button>
            </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default Item;
