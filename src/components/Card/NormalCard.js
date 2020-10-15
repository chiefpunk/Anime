import React from "react";
import { Link } from "react-router-dom";

export default function NormalCard(props) {

  return (
    <>
      <div className="product__sidebar__comment__item">
        <div className="product__sidebar__comment__item__pic">
          <img src={props.image} alt="" />
        </div>
        <div className="product__sidebar__comment__item__text">
          <ul>
            {props.categories.map((category,index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
          <h5>
            <Link to="/">{props.title}</Link>
          </h5>
          <span>
            <i className="fa fa-eye"></i> {props.views} Viewes
          </span>
        </div>
      </div>
    </>
  );
}
