import React from "react";
import { Link } from "react-router-dom";

export default function VerticalCard(props) {
  return (
    <>
      <div class="col-lg-4 col-md-6 col-sm-6">
        <div className="product__item">
          <div
            className="product__item__pic set-bg"
            data-setbg="img/trending/trend-1.jpg"
            style={{ backgroundImage: `url(${props.image})` }}
          >
            <div className="ep">{props.episode}</div>
            <div className="comment">
              <i className="fa fa-comments"></i> {props.comments}
            </div>
            <div className="view">
              <i className="fa fa-eye"></i> {props.views}
            </div>
          </div>
          <div className="product__item__text">
            <ul>
              {props.categories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
            <h5>
              <Link to={`/anime/${props.title}`}>{props.title}</Link>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
