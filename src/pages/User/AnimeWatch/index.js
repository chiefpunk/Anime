import React from "react";
import SectionTitle from "components/SectionTitle";
import { useParams } from "react-router-dom";
import CommentForm from "components/Form/CommentForm";
import ReviewItems from "components/ReviewItems";
import { Link } from "react-router-dom";

export default function Index(props) {
  const { title } = useParams();
  const episodes = [
    "Ep 01",
    "Ep 02",
    "Ep 03",
    "Ep 04",
    "Ep 05",
    "Ep 06",
    "Ep 07",
    "Ep 08",
    "Ep 09",
    "Ep 10",
  ];
  return (
    <>
      <section class="anime-details spad">
        <div class="container">
          <div class="row">
            <SectionTitle title={title} />

            <div class="col-lg-12">
              <div class="anime__video__player">
                <video
                  id="player"
                  playsinline
                  controls
                  poster={require("assets/videos/anime-watch.jpg")}
                  style={{
                    backgroundImage: `url(${require("assets/videos/anime-watch.jpg")})`,
                  }}
                >
                  <source
                    src={require("assets/videos/1.mp4")}
                    type="video/mp4"
                  />
                  <track
                    kind="captions"
                    label="English captions"
                    src="#"
                    srclang="en"
                    default
                  />
                </video>
              </div>
              <div class="anime__details__episodes">
                <SectionTitle tag="h5" title="LIST NAME" />
                {episodes.map((episode, index) => (
                  <Link to="/" key={index}>
                    {episode}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8">
              <div class="anime__details__review">
                <SectionTitle tag="h5" title="Reviews" />
                <ReviewItems />
              </div>
              <div class="anime__details__form">
                <SectionTitle tag="h5" title="Comments" />
                <CommentForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
