import React from "react";

export default function VerticalCard(props) {
  return (
    <>
      <div class="product__item">
        <div
          class="product__item__pic set-bg"
          data-setbg="img/trending/trend-1.jpg"
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <div class="ep">{props.episode}</div>
          <div class="comment">
            <i class="fa fa-comments"></i> {props.comments}
          </div>
          <div class="view">
            <i class="fa fa-eye"></i> {props.views}
          </div>
        </div>
        <div class="product__item__text">
          <ul>
            {props.categories.map((category) => (
              <li>{category}</li>
            ))}
          </ul>
          <h5>
            <a href="#">{props.title}</a>
          </h5>
        </div>
      </div>
    </>
  );
}
