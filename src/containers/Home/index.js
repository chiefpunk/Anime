import React from "react";
import FeatureVideos from "components/FeatureVideos";
import VIDEO_DATA from "./videos";
import TopVideos from "components/TopVideos";
import CommentVideos from "components/CommentVideos";

export default function HomeContainer(props) {
  return (
    <>
      <section class="product spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="trending__product">
                <FeatureVideos
                  feature_title="TRENDING NOW"
                  videos={VIDEO_DATA.TrendVideos}
                />
              </div>
              <div class="popular__product">
                <FeatureVideos
                  feature_title="POPULAR SHOWS"
                  videos={VIDEO_DATA.PopularVideos}
                />
              </div>
              <div class="recent__product">
                <FeatureVideos
                  feature_title="RECENT ADDED SHOWS"
                  videos={VIDEO_DATA.RecentVideos}
                />
              </div>
              <div class="live__product">
                <FeatureVideos
                  feature_title="LIVE ACTION"
                  videos={VIDEO_DATA.LiveVideos}
                />
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-8">
              <div class="product__sidebar">
                <div class="product__sidebar__view">
                  <div class="section-title">
                    <h5>Top Views</h5>
                  </div>
                  <ul class="filter__controls">
                    <li class="active" data-filter="*">
                      Day
                    </li>
                    <li data-filter=".week">Week</li>
                    <li data-filter=".month">Month</li>
                    <li data-filter=".years">Years</li>
                  </ul>
                  <div class="filter__gallery">
                    <TopVideos videos={VIDEO_DATA.TopVideos}></TopVideos>
                  </div>
                </div>
                <div class="product__sidebar__comment">
                  <div class="section-title">
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
