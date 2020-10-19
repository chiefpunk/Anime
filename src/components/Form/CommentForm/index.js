import React from "react";

export default function Index(props) {
  return (
    <>
      <form action="#">
        <textarea placeholder="Your Comment"></textarea>
        <button type="submit">
          <i class="fa fa-location-arrow"></i> Review
        </button>
      </form>
    </>
  );
}
