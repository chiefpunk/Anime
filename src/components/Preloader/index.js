import React from "react";
export default function Preloader(props) {
  return (
    <>
      <div id="preloder" className={props.status === "loading" ? "fadeIn" : "fadeOut"}>
        <div className="loader"></div>
      </div>
    </>
  );
}
