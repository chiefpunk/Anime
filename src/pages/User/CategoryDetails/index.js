import React from "react";
import { useParams } from "react-router-dom";
import VIDEO_DATA from "./videos";
import BreadcrumbOption from "components/BreadcrumbOption";
import Card from "components/Card";
import SectionTitle from "components/SectionTitle";
import CommentVideos from "components/CommentVideos";
import TopVideos from "components/TopVideos";

export default function Index(props) {
  const { name } = useParams();
  console.log("params:", name);
  return (
    <>
      <BreadcrumbOption category={name} />
      <section className="product-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="product__page__content">
                <div className="product__page__title">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-6">
                    <SectionTitle title={name} />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="product__page__filter">
                        <p>Order by:</p>
                        <select>
                          <option value="">A-Z</option>
                          <option value="">1-10</option>
                          <option value="">10-50</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {VIDEO_DATA.map((video, index) => (
                    <Card
                      episode={video.episode}
                      comments={video.comments}
                      views={video.views}
                      categories={video.categories}
                      title={video.title}
                      image={video.image}
                      type="1"
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="product__pagination">
                <a href="/" className="current-page">
                  1
                </a>
                <a href="/">2</a>
                <a href="/">3</a>
                <a href="/">4</a>
                <a href="/">5</a>
                <a href="/">
                  <i className="fa fa-angle-double-right"></i>
                </a>
              </div>
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
                  <SectionTitle tag="h5" title="New Comment" />
                  <CommentVideos />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
