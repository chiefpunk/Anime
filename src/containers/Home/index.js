import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import FeatureVideos from "components/FeatureVideos";
import TopVideos from "components/TopVideos";
import CommentVideos from "components/CommentVideos";
import SectionTitle from "components/SectionTitle";
import Preloader from "components/Preloader";
import useTrendVideos from "hooks/useTrendVideos";

export default function HomeContainer(props) {
  const { status, data } = useTrendVideos();
  
  let trendVideos = {};
  if (status === "success") {
    trendVideos = data.data.map((video) => {
      const id = video.id;
      const title = video.attributes.titles.en_jp;
      const views = video.attributes.userCount;
      const episode = video.attributes.episodeCount;
      const image = video.attributes.posterImage.medium;
      const comments = video.attributes.favoritesCount;
      // const genresData = await getGenres(video.id);
      // console.log(genresData);
      const genres = [];
      // genresData.data.map(data=>{
      //   genres.push(data.attributes.name);
      // })
      return {id, title, views, episode, image, comments, genres}
    });
    console.log("may:",trendVideos);
  }

  return (
    <>
      {status === "loading" ? (
        <Preloader status={status} />
      ) : (
        <>
          <section className="product spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="trending__product">
                    <FeatureVideos
                      feature_title="TRENDING NOW"
                      videos={trendVideos}
                    />
                  </div>
                  {/* <div className="popular__product">
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
                  </div> */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="product__sidebar">
                    <div className="product__sidebar__view">
                      <SectionTitle tag="h5" title="Top Views" />
                      <ul className="filter__controls">
                        <li className="active" data-filter="*">
                          Day
                        </li>
                        <li data-filter=".week">Week</li>
                        <li data-filter=".month">Month</li>
                        <li data-filter=".years">Years</li>
                      </ul>
                      <div className="filter__gallery">
                        <TopVideos />
                      </div>
                    </div>
                    <div className="product__sidebar__comment">
                      <div className="section-title">
                        <h5>New Comment</h5>
                      </div>
                      <CommentVideos />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ReactQueryDevtools initialIsOpen />
          </section>
        </>
      )}
    </>
  );
}
