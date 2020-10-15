import React from "react";

export default function HorizantalCard(props) {

  return (
    <>
      <div
        class="product__sidebar__view__item set-bg mix day years"
        data-setbg="img/sidebar/tv-1.jpg"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div class="ep">{props.episode}</div>
        <div class="view">
          <i class="fa fa-eye"></i> {props.views}
        </div>
        <h5>
          <a href="#">{props.title}</a>
        </h5>
      </div>
    </>
  );
}
