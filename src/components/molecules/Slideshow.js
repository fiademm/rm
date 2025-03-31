import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

// Initialize Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const Slideshow = ({ articles }) => {
   // Swiper configuration
 const swiperParams = {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  spaceBetween: 30
};

  return (
    <div className="swiper-container">
      <Swiper {...swiperParams}>
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img
                src={article.image}
                alt={`Slide ${index + 1}`}
                className="slide-image"
              />
              <div className="slide-overlay">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <p className="article-date">{article.date}</p>
                <button
                  hidden
                  className="read-more-button"
                  onClick={() => alert(`Read more about: ${article.title}`)}
                >
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </div>
        <div className="swiper-button-next">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </div>
      </Swiper>
    </div>
  );
};

export default Slideshow;
