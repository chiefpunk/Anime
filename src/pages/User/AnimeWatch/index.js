import React from "react";
import SectionTitle from "components/SectionTitle";
import { useParams } from "react-router-dom";
import CommentForm from "components/Form/CommentForm";
import ReviewItems from "components/ReviewItems";
import Preloader from "components/Preloader";
import useVideo from "hooks/useVideo";
import { Link } from "react-router-dom";

export default function Index(props) {
  const { title } = useParams();
  const { status, data } = useVideo(title);
  console.log("watch", status);
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
      {status === "loading" ? (
        <Preloader />
      ) : (
        <section class="anime-details spad">
          <div class="container">
            <div class="row">
              <SectionTitle title={data.data.attributes.titles.en_jp} />

              <div class="col-lg-12">
                <div class="anime__video__player">
                  <iframe
                    title={data.data.attributes.titles.en_jp}
                    width="800"
                    height="600"
                    src={`https://www.youtube.com/embed/${data.data.attributes.youtubeVideoId}`}
                  ></iframe>
                  {/* <video
                    id="player"
                    playsinline
                    controls
                    poster={data.data.attributes.coverImage.original}
                    
                  >
                    <source
                      src={`https://www.youtube.com/watch?v=${data.data.attributes.youtubeVideoId}`}
                    />
                    <track
                      kind="captions"
                      label="English captions"
                      src="#"
                      srclang="en"
                      default
                    />
                  </video> */}
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
      )}
    </>
  );
}
