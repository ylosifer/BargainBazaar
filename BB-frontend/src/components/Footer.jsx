import React from 'react';
import './css/Footer.css';
import LazyLoad from "./LazyLoad";

const Footer = () => {
  return (
    <LazyLoad className="footer-container">
      <footer className="footer">
        <p className="footer-text">
          &copy; 2024 Bargain Bazaar. All rights reserved. | Designed by{' '}
          <a href="https://github.com/Dang3Rsm" className="footer-link" target="_blank" rel="noopener noreferrer">Dang3R</a> ,{' '}
          <a href="https://github.com/Dang3Rsm" className="footer-link" target="_blank" rel="noopener noreferrer">Ylosifer</a>, {' '}
          <a href="https://github.com/Dang3Rsm" className="footer-link" target="_blank" rel="noopener noreferrer">XTitan47</a>{' '}
        </p>
      </footer>
    </LazyLoad>
  );
};

export default Footer;
