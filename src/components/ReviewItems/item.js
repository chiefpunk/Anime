import React from "react";

export default function Item(props) {
  return (
    <>
      <div class="anime__review__item">
        <div class="anime__review__item__pic">
          <img src={props.image} alt="" />
        </div>
        <div class="anime__review__item__text">
          <h6>
            {props.name} - <span>{props.time}</span>
          </h6>
          <p>{props.comment}</p>
        </div>
      </div>
    </>
  );
}
