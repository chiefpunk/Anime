import React from "react";
import Card from "components/Card";
import videos from "./videos";
export default function TopVideos(props) {
  return (
    <>
      {videos.map((video, index) => (
        <Card
          type="2"
          key={index}
          title={video.title}
          image={video.image}
          views={video.views}
          date={video.date}
        ></Card>
      ))}
    </>
  );
}
