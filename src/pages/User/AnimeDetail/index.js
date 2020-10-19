import React from "react";
import SectionTitle from "components/SectionTitle";
import TopVideos from "components/TopVideos";
import ReviewItems from "components/ReviewItems";
import CommentForm from "components/Form/CommentForm";
import { Link, useParams } from "react-router-dom";

export default function Index(props) {
  const { title } = useParams();
  return (
    <>
      <section class="anime-details spad">
        <div class="container">
          <div class="anime__details__content">
            <div class="row">
              <div class="col-lg-3">
                <div
                  class="anime__details__pic set-bg"
                  data-setbg="img/anime/details-pic.jpg"
                  style={{
                    background: `url(${require("assets/img/anime/details-pic.jpg")})`,
                  }}
                >
                  <div class="comment">
                    <i class="fa fa-comments"></i> 11
                  </div>
                  <div class="view">
                    <i class="fa fa-eye"></i> 9141
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="anime__details__text">
                  <div class="anime__details__title">
                    <h3>{title}</h3>
                    <span>フェイト／ステイナイト, Feito／sutei naito</span>
                  </div>
                  <div class="anime__details__rating">
                    <div class="rating">
                      <a href="/">
                        <i class="fa fa-star"></i>
                      </a>
                      <a href="/">
                        <i class="fa fa-star"></i>
                      </a>
                      <a href="/">
                        <i class="fa fa-star"></i>
                      </a>
                      <a href="/">
                        <i class="fa fa-star"></i>
                      </a>
                      <a href="/">
                        <i class="fa fa-star-half-o"></i>
                      </a>
                    </div>
                    <span>1.029 Votes</span>
                  </div>
                  <p>
                    Every human inhabiting the world of Alcia is branded by a
                    “Count” or a number written on their body. For Hina’s
                    mother, her total drops to 0 and she’s pulled into the
                    Abyss, never to be seen again. But her mother’s last words
                    send Hina on a quest to find a legendary hero from the Waste
                    War - the fabled Ace!
                  </p>
                  <div class="anime__details__widget">
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <ul>
                          <li>
                            <span>Type:</span> TV Series
                          </li>
                          <li>
                            <span>Studios:</span> Lerche
                          </li>
                          <li>
                            <span>Date aired:</span> Oct 02, 2019 to ?
                          </li>
                          <li>
                            <span>Status:</span> Airing
                          </li>
                          <li>
                            <span>Genre:</span> Action, Adventure, Fantasy,
                            Magic
                          </li>
                        </ul>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <ul>
                          <li>
                            <span>Scores:</span> 7.31 / 1,515
                          </li>
                          <li>
                            <span>Rating:</span> 8.5 / 161 times
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
                  <div class="anime__details__btn">
                    <a href="#" class="follow-btn">
                      <i class="fa fa-heart-o"></i> Follow
                    </a>
                    <Link to={`/watch/${title}`} class="watch-btn">
                      <span>Watch Now</span> <i class="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 col-md-8">
              <div class="anime__details__review">
                <SectionTitle tag="h5" title="REVIEWS" />
                <ReviewItems />
              </div>
              <div class="anime__details__form">
                <SectionTitle tag="h5" title="Your Comment" />
                <CommentForm />
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="anime__details__sidebar">
                <SectionTitle tag="h5" title="you might like..." />
                <TopVideos />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
