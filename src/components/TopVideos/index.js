import React from "react";
import Card from "components/Card";
export default function TopVideos(props) {
  return (
    <>
      {props.videos.map((video) => (
        <Card
          type="2"
          title={video.title}
          image={video.image}
          views={video.views}
          date={video.date}
        ></Card>
      ))}
    </>
  );
}
