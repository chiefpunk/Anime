import React from "react";
import ReviewItem from "./item";
import reviews from "./reviews";

export default function Index(props) {
  return (
    <>
      {reviews.map((review, index) => (
        <ReviewItem
          name={review.name}
          time={review.time}
          comment={review.comment}
          image={review.image}
          key={index}
        />
      ))}
    </>
  );
}
