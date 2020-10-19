import React from "react";
import Card from "components/Card";
import VIDEO_DATA from "./videos";

export default function CommentVideos() {
  // console.log(VIDEO_DATA);
  return (
    <>
      {VIDEO_DATA.map((video, index) => (
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
