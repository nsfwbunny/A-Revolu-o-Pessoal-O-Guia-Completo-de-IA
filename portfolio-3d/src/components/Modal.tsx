"use client";

import { useEffect } from 'react';

export const Modal = ({ isOpen, onClose, videoUrl }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const iframeSrc = iframe.src;
      iframe.src = iframeSrc; // This reloads the iframe, stopping the video
    }
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}><i className="fas fa-times"></i></button>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  );
};
