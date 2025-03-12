import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow = ({ articles }) => {
  // Settings for the slideshow
  const settings = {
    dots: true, // Show dot indicators
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-play the slideshow
    autoplaySpeed: 3000, // Auto-play speed in milliseconds
    pauseOnHover: true, // Pause on hover
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {articles.map((article, index) => (
          <div key={index} className="slide">
            <img src={article.image} alt={`Slide ${index + 1}`} />
            <div className="slide-content">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
              <p className="article-date">{article.date}</p>
              <button
                className="read-more-button"
                onClick={() => alert(`Read more about: ${article.title}`)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
