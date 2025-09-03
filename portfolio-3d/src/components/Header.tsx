"use client";

import { useState, useEffect } from 'react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="logo">CINEMAX</div>
      <nav>
        <ul>
          <li><a href="#home">Início</a></li>
          <li><a href="#series">Séries</a></li>
          <li><a href="#movies">Filmes</a></li>
          <li><a href="#originals">Originais</a></li>
          <li><a href="#my-list">Minha Lista</a></li>
        </ul>
      </nav>
    </header>
  );
};
