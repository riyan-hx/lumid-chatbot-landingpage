import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { motion, AnimatePresence } from 'framer-motion';
import card1 from '../assets/images/Herosection/card-1.webp';
import card2 from '../assets/images/Herosection/card-2.webp';
import card3 from '../assets/images/Herosection/card-3.webp';
import card4 from '../assets/images/Herosection/card-4.webp';



const healthTopics = ['Stress', 'Overwhelmed', 'OverThinking', 'Depression', 'Anxiety'];

const HeroSection = () => {
  const [currentTopic, setCurrentTopic] = useState(healthTopics[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * healthTopics.length);
      setCurrentTopic(healthTopics[randomIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="left-section">
        <h1>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentTopic}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            style={{ display: "inline-block" }}
          >
            {currentTopic}
          </motion.span>
        </AnimatePresence>

          <br />Help when you<br />need it, right away.
        </h1>
        
        <p className='hero-subtitle'>
        Feeling overwhelmed, anxious, or just need someone to talk to?<br /> Meet Lumid—your 24/7 emotional support companion. <br /> Always here to listen, comfort, and encourage you—completely free, with no waiting, no judgment.

        </p>
        <button
          className="cta-btn"
          onClick={() => window.location.href = 'https://lumidai.in'}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px', // space between text and icon
            padding: '16px 20px',
            borderRadius: '999px', // pill shape
            backgroundColor: '#00C293',
            color: '#ffffff',
            fontWeight: '500',
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Talk to Lumid Ai
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
          >
            <path
              d="M20.0001 11.9998L4.00012 11.9998"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>



        </div>
        <div className="right-section">
           {/* Floating cards */}

        <div className="float-card">
          <img className='card-1' src={card1} alt="" />
          <img className='card-2' src={card2} alt="" />
          <img className='card-3' src={card3} alt="" />
          <img className='card-4' src={card4} alt="" />

        </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
