"use client";

import { useState, useEffect } from "react";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Carousel } from "@/components/Carousel";
import { Modal } from "@/components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const seriesItems = [
    { imgSrc: "https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Stranger Worlds", subtitle: "2 Temporadas" },
    { imgSrc: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "The Crown", subtitle: "4 Temporadas" },
    { imgSrc: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Dark Matter", subtitle: "1 Temporada" },
    { imgSrc: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Money Heist", subtitle: "5 Temporadas" },
    { imgSrc: "https://images.unsplash.com/photo-1574375417930-022e6451edbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "The Witcher", subtitle: "2 Temporadas" },
  ];

  const moviesItems = [
    { imgSrc: "https://images.unsplash.com/photo-1489599102910-59206b8ca314?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Interstellar", subtitle: "Ficção Científica" },
    { imgSrc: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Inception", subtitle: "Ação" },
    { imgSrc: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "1917", subtitle: "Drama" },
    { imgSrc: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "The Godfather", subtitle: "Crime" },
    { imgSrc: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Joker", subtitle: "Thriller" },
  ];

  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    animateElements.forEach(element => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      animateElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <>
      <div id="particles-js"></div>

      <Header />

      <section className="hero" id="home">
        <Experience />

        <div className="hero-content">
          <h1 className="animate">Experiência Cinematográfica em <span style={{ color: 'var(--primary)' }}>3D Imersivo</span></h1>
          <p className="animate">Descubra um mundo de entretenimento com efeitos visuais impressionantes e qualidade premium. Tudo isso em uma plataforma designed para proporcionar a melhor experiência.</p>
          <div className="hero-buttons">
            <a href="#" className="btn animate" id="watch-trailer" onClick={(e) => { e.preventDefault(); setIsModalOpen(true);}}><i className="fas fa-play"></i> Assistir Trailer</a>
            <a href="#series" className="btn btn-secondary animate"><i className="fas fa-info-circle"></i> Mais Informações</a>
          </div>
        </div>
      </section>

      <Carousel id="series" title="Séries Populares" items={seriesItems} />
      <Carousel id="movies" title="Filmes em Destaque" items={moviesItems} />

      <section className="cards-3d-section" id="originals">
        <h2 className="carousel-title">Conteúdo Original</h2>
        <p className="animate" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>Nossas produções exclusivas com efeitos 3D e experiências imersivas</p>

        <div className="cards-container">
          <div className="card-3d animate">
            <div className="card-face card-front">
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Original 1" />
              <h3>Dark Universe</h3>
              <p>Ficção Científica</p>
            </div>
            <div className="card-face card-back">
              <h3>Dark Universe</h3>
              <p>Uma jornada épica através de dimensões paralelas onde as leis da física são desafiadas.</p>
              <a href="#" className="btn" style={{ marginTop: '20px' }}>Assistir</a>
            </div>
          </div>

          <div className="card-3d animate">
            <div className="card-face card-front">
              <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Original 2" />
              <h3>Ocean Mysteries</h3>
              <p>Documentário</p>
            </div>
            <div className="card-face card-back">
              <h3>Ocean Mysteries</h3>
              <p>Explore as profundezas dos oceanos e descubra criaturas jamais vistas pelo homem.</p>
              <a href="#" className="btn" style={{ marginTop: '20px' }}>Assistir</a>
            </div>
          </div>

          <div className="card-3d animate">
            <div className="card-face card-front">
              <img src="https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Original 3" />
              <h3>Neo Tokyo</h3>
              <p>Cyberpunk</p>
            </div>
            <div className="card-face card-back">
              <h3>Neo Tokyo</h3>
              <p>No ano de 2154, a humanidade enfrenta seus maiores desafios tecnológicos e éticos.</p>
              <a href="#" className="btn" style={{ marginTop: '20px' }}>Assistir</a>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/jSO6v5YQ9yM?rel=0&autoplay=1"
      />

      <footer>
        <div className="footer-content">
          <div className="footer-column">
            <h3>CINEMAX</h3>
            <p>A plataforma de streaming com experiências imersivas em 3D e conteúdo exclusivo.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Navegação</h3>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#series">Séries</a></li>
              <li><a href="#movies">Filmes</a></li>
              <li><a href="#originals">Originais</a></li>
              <li><a href="#my-list">Minha Lista</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Suporte</h3>
            <ul>
              <li><a href="#">Conta</a></li>
              <li><a href="#">Centro de Ajuda</a></li>
              <li><a href="#">Dispositivos Compatíveis</a></li>
              <li><a href="#">Planos e Preços</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Acessibilidade</a></li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2023 CINEMAX. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
