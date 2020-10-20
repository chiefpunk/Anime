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
            {(props.genres || []).map((genre,index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
          <h5>
            <Link to={`/anime/${props.videoId}`}>{props.title}</Link>
          </h5>
          <span>
            <i className="fa fa-eye"></i> {props.views} Viewes
          </span>
        </div>
      </div>
    </>
  );
}
