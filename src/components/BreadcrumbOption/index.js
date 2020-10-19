import React from "react";
import { Link } from "react-router-dom";

export default function Index(props) {
  return (
    <>
      <div class="breadcrumb-option">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb__links">
                <Link to="/">
                  <i class="fa fa-home"></i> Home
                </Link>
                <Link to={`/category/${props.category}`}>Categories</Link>
                {props.title ? (
                  <Link to={`/category/${props.category}`}>{props.category}</Link>
                ) : (
                  <span>{props.category}</span>
                )}
                <span>{props.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
