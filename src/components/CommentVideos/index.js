import React from "react";
import Card from "components/Card";

export default function Index(props) {
  return (
    <>
      {props.videos.map((video) => (
        <Card
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
