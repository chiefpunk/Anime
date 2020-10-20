import React from "react";
import SectionTitle from "components/SectionTitle";
import TopVideos from "components/TopVideos";
import ReviewItems from "components/ReviewItems";
import CommentForm from "components/Form/CommentForm";
import Stars from "components/Stars";
import useVideo from "hooks/useVideo";
import Preloader from "components/Preloader";
import { Link, useParams } from "react-router-dom";

export default function Index(props) {
  const { title } = useParams();
  const { status, data, error, isFetching } = useVideo(title);
  console.log("detail", data);
  return (
    <>
      {status === "loading" ? (
        <Preloader />
      ) : (
        <section className="anime-details spad">
          <div className="container">
            <div className="anime__details__content">
              <div className="row">
                <div className="col-lg-3">
                  <div
                    className="anime__details__pic set-bg"
                    data-setbg="img/anime/details-pic.jpg"
                    style={{
                      background: `url(${data.data.attributes.posterImage.small}})`,
                    }}
                  >
                    <div className="comment">
                      <i className="fa fa-comments"></i> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye"></i> {data.data.attributes.userCount}
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="anime__details__text">
                    <div className="anime__details__title">
                      <h3>{data.data.attributes.titles.en}</h3>
                      <span>{data.data.attributes.titles.en_jp}</span>
                    </div>
                    <div className="anime__details__rating">
                      <Stars num="4" />
                      <span>1.029 Votes</span>
                    </div>
                    <p>
                      {data.data.attributes.description}
                    </p>
                    <div className="anime__details__widget">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <ul>
                            <li>
                              <span>Type:</span> {data.data.attributes.showType} Series
                            </li>
                            <li>
                              <span>Studios:</span> Lerche
                            </li>
                            <li>
                              <span>Date aired:</span> {data.data.attributes.startDate} to {data.data.attributes.endDate}
                            </li>
                            <li>
                              <span>Status:</span> {data.data.attributes.status}
                            </li>
                            <li>
                              <span>Genre:</span> Action, Adventure, Fantasy,
                              Magic
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <ul>
                            <li>
                              <span>Scores:</span> 7.31 / 1,515
                            </li>
                            <li>
                              <span>Rating:</span> {data.data.attributes.averageRating}
                            </li>
                            <li>
                              <span>Duration:</span> 24 min/ep
                            </li>
                            <li>
                              <span>Quality:</span> HD
                            </li>
                            <li>
                              <span>Views:</span> 131,541
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="anime__details__btn">
                      <a href="/" className="follow-btn">
                        <i className="fa fa-heart-o"></i> Follow
                      </a>
                      <Link to={`/watch/${title}`} className="watch-btn">
                        <span>Watch Now</span>{" "}
                        <i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <div className="anime__details__review">
                  <SectionTitle tag="h5" title="REVIEWS" />
                  <ReviewItems />
                </div>
                <div className="anime__details__form">
                  <SectionTitle tag="h5" title="Your Comment" />
                  <CommentForm />
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="anime__details__sidebar">
                  <SectionTitle tag="h5" title="you might like..." />
                  <TopVideos />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
