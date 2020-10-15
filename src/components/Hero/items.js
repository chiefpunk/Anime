import React from "react";
import { Link } from "react-router-dom";

export default function Items(props) {
  return (
    <>
      <div class="row">
        <div class="col-lg-6">
          <div class="hero__text">
            <div class="label">Adventure</div>
            <h2>Fate / Stay Night: Unlimited Blade Works</h2>
            <p>After 30 days of travel across the world...</p>
            <Link to="/">
              <span>Watch Now</span> <i class="fa fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
