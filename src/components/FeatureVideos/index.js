import React from "react";

import Card from "components/Card";
import Button from "components/Button";
import SectionTitle from "components/SectionTitle";

export default function FeatureVideos(props) {
  console.log(props.videos[0].id);

  return (
    <>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8">
          <SectionTitle tag="h4" title={props.feature_title} />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="btn__all">
            <Button to="/" className="primary-btn">
              View All <span className="arrow_right"></span>
            </Button>
          </div>
        </div>
      </div>
      <div className="row">
        {props.videos.map((video, index) => (
          <Card
            videoId={video.id}
            episode={video.episode}
            comments={video.comments}
            views={video.views}
            genres={video.genres}
            title={video.title}
            image={video.image}
            type="1"
            key={index}
          />
        ))}
      </div>
    </>
  );
}
