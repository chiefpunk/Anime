import React from "react";
import { Link } from "react-router-dom";
export default function HorizantalCard(props) {

  return (
    <>
      <div
        className="product__sidebar__view__item set-bg mix day years"
        data-setbg="img/sidebar/tv-1.jpg"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="ep">{props.episode}</div>
        <div className="view">
          <i className="fa fa-eye"></i> {props.views}
        </div>
        <h5>
          <Link to={`/anime/${props.title}`}>{props.title}</Link>
        </h5>
      </div>
    </>
  );
}
