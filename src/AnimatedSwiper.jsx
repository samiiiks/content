import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
// import 'swiper/css/swiper.min.css';

function AnimatedSwiper() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      direction: 'horizontal',
      loop: true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container" ref={swiperRef}>
      <div className="swiper-wrapper">
        {/* Add your swiper slides here */}
        <div className="swiper-slide">
          <img src="slide1.jpg" alt="Slide 1" />
        </div>
        <div className="swiper-slide">
          <img src="slide2.jpg" alt="Slide 2" />
        </div>
        <div className="swiper-slide">
          <img src="slide3.jpg" alt="Slide 3" />
        </div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
}

export default AnimatedSwiper;
