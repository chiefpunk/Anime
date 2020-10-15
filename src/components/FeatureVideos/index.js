import React from "react";
import Card from "components/Card";

export default function FeatureVideos(props) {
  return (
    <>
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-8">
          <div class="section-title">
            <h4>{props.feature_title}</h4>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="btn__all">
            <a href="#" class="primary-btn">
              View All <span class="arrow_right"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        {props.videos.map((video) => (
          <div class="col-lg-4 col-md-6 col-sm-6">
            <Card
              episode={video.episode}
              comments={video.comments}
              views={video.views}
              categories={video.categories}
              title={video.title}
              image={video.image}
              type="1"
            />
          </div>
        ))}
      </div>
    </>
  );
}
