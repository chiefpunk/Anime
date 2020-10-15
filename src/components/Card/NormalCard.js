import React from "react";

export default function NormalCard(props) {
  console.log("aa:",props);

  return (
    <>
      <div class="product__sidebar__comment__item">
        <div class="product__sidebar__comment__item__pic">
          <img src={props.image} alt="" />
        </div>
        <div class="product__sidebar__comment__item__text">
          <ul>
            {props.categories.map((category) => (
              <li>{category}</li>
            ))}
          </ul>
          <h5>
            <a href="#">{props.title}</a>
          </h5>
          <span>
            <i class="fa fa-eye"></i> {props.views} Viewes
          </span>
        </div>
      </div>
    </>
  );
}
