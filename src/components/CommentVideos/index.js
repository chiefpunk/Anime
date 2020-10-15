import React from "react";
import Card from "components/Card";

export default function CommentVideos(props) {
  return (
    <>
      {props.videos.map((video, index) => (
        <Card
          key={index}
          type="3"
          title={video.title}
          image={video.image}
          views={video.views}
          categories={video.categories}
        ></Card>
      ))}
    </>
  );
}
