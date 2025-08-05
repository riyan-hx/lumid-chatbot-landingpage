import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsOpen(false); // close mobile menu on desktop resize
      }
    };

    const handleScroll = () => {
      if (window.innerWidth > 768 && window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobile = windowWidth <= 768;
  const shrinkNavbar = !isMobile && scrolled && !hovering;

  return (
    <nav
      className={`navbar ${shrinkNavbar ? 'navbar-shrink' : ''}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="navbar-container">
        <div className="logo">Lumid.Ai</div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#stories" onClick={() => setIsOpen(false)}>Stories</a></li>
          <li><a href="#features" onClick={() => setIsOpen(false)}>Features</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li className="mobile-cta">
            <button className="talk-button" onClick={() => window.location.href = 'https://chat.lumid.in'}>Talk to Lumid Ai</button>
          </li>
        </ul>

        <button className="talk-button desktop-only" onClick={() => window.location.href = 'https://chat.lumid.in'}>Talk to Lumid Ai</button>

        {isMobile && (
          <div className="hamburger" onClick={toggleMenu}>
            <span className={isOpen ? 'bar rotate-bar1' : 'bar'}></span>
            <span className={isOpen ? 'bar fade-bar2' : 'bar'}></span>
            <span className={isOpen ? 'bar rotate-bar3' : 'bar'}></span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
