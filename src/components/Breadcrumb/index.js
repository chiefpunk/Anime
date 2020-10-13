import React from "react";

export default function Breadcrumb(props) {
  return (
    <>
      <section
        className="normal-breadcrumb set-bg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="normal__breadcrumb__text">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}
