import React from "react";
import FeatureVideos from "components/FeatureVideos";
import VIDEO_DATA from "./videos";
import TopVideos from "components/TopVideos";
import CommentVideos from "components/CommentVideos";

export default function HomeContainer(props) {
  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="trending__product">
                <FeatureVideos
                  feature_title="TRENDING NOW"
                  videos={VIDEO_DATA.TrendVideos}
                />
              </div>
              <div className="popular__product">
                <FeatureVideos
                  feature_title="POPULAR SHOWS"
                  videos={VIDEO_DATA.PopularVideos}
                />
              </div>
              <div className="recent__product">
                <FeatureVideos
                  feature_title="RECENT ADDED SHOWS"
                  videos={VIDEO_DATA.RecentVideos}
                />
              </div>
              <div className="live__product">
                <FeatureVideos
                  feature_title="LIVE ACTION"
                  videos={VIDEO_DATA.LiveVideos}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="product__sidebar">
                <div className="product__sidebar__view">
                  <div className="section-title">
                    <h5>Top Views</h5>
                  </div>
                  <ul className="filter__controls">
                    <li className="active" data-filter="*">
                      Day
                    </li>
                    <li data-filter=".week">Week</li>
                    <li data-filter=".month">Month</li>
                    <li data-filter=".years">Years</li>
                  </ul>
                  <div className="filter__gallery">
                    <TopVideos videos={VIDEO_DATA.TopVideos}></TopVideos>
                  </div>
                </div>
                <div className="product__sidebar__comment">
                  <div className="section-title">
                    <h5>New Comment</h5>
                  </div>
                  <CommentVideos videos={VIDEO_DATA.CommentVideos}></CommentVideos>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
