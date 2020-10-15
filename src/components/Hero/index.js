import React from "react";
import HeroImage from "assets/img/hero/hero-1.jpg";
import HeroImage1 from "assets/img/sidebar/tv-1.jpg";
import HeroSlider from "components/HeroSlider";
export default function Hero(props) {
  const slides = [
      {
          category:"Adventure",
          title:"Fate / Stay Night: Unlimited Blade Works",
          img:HeroImage,
          link:"/fate"
      },
      {
          category:"Active",
          title:"Sen to Chihiro no Kamikakushi",
          img:HeroImage1,
          link:"/sen"
      },
    ];
  return (
    <>
      <section className="hero">
        <div className="container">
            <HeroSlider slides = {slides} />
        </div>
      </section>
    </>
  );
}
