"use client";

import { useRef } from 'react';

export const Carousel = ({ title, items, id }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="carousel-section" id={id}>
      <div className="carousel-title">
        <h2>{title}</h2>
        <a href="#">Ver Tudo <i className="fas fa-chevron-right"></i></a>
      </div>

      <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          {items.map((item, index) => (
            <div className="carousel-item animate" key={index}>
              <img src={item.imgSrc} alt={item.title} />
              <div className="carousel-item-overlay">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-nav carousel-prev" onClick={handlePrev}><i className="fas fa-chevron-left"></i></button>
        <button className="carousel-nav carousel-next" onClick={handleNext}><i className="fas fa-chevron-right"></i></button>
      </div>
    </section>
  );
};
