import React from "react";

export default function Index(props) {
  return (
    <>
      {props.tag === "h5" ? (
        <div className="section-title">
          <h5>{props.title}</h5>
        </div>
      ) : (
        <div className="section-title">
          <h4>{props.title}</h4>
        </div>
      )}
    </>
  );
}
