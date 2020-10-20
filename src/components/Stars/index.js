import React from "react";

export default function Index(props) {
  const star = (num) => {
    for (let i = 0; i < num; i++)
      return (
        <a href="/">
          <i className="fa fa-star"></i>
        </a>
      );
  };
  return (
    <>
      <div className="rating">{star(props.num)}</div>
    </>
  );
}
