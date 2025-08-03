import React from 'react';
import './HowItWorks.css';
import mobileImage from '../assets/images/Howitworks/mobile.avif';
import card1 from '../assets/images/Howitworks/card1.avif';
import card2 from '../assets/images/Howitworks/card2.avif';
import card3 from '../assets/images/Howitworks/card3.avif';
import card4 from '../assets/images/Howitworks/card4.avif';
import card5 from '../assets/images/Howitworks/card5.png';
import card6 from '../assets/images/Howitworks/card6.png';
import card7 from '../assets/images/Howitworks/card7.png';
import card8 from '../assets/images/Howitworks/card8.png';




const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <p className="section-label">How it works</p>
      <h2 className="main-heading">No downloads, No sign-ups</h2>
      <p className="description">
        Gain access to expert Emotional Support at your fingertips, at no cost.
      </p>
      <button
        className="cta-btn"
        onClick={() => window.location.href = 'https://lumidai.in'}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px', // space between text and icon
          padding: '10px 20px',
          borderRadius: '999px', // pill shape
          backgroundColor: '#008060',
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


      <div className="phone-image-container">
        <div className="featureCards">
            <img className='flash-card card1' src={card1} alt="" />
            <img className='flash-card card2' src={card2} alt="" />
            <img className='flash-card card3' src={card3} alt="" />
            <img className='flash-card card4' src={card4} alt="" />
        </div>
        <div className="featureCards">
            <img className='mobileImage' src={mobileImage} alt="" />
        </div>
      
        <div className="featureCards">

            <img className='flash-card card5' src={card5} alt="" />
            <img className='flash-card card6' src={card6} alt="" />
            <img className='flash-card card7' src={card7} alt="" />
            <img className='flash-card card8' src={card8} alt="" />
        </div>
      </div>
    
    </section>
  );
};

export default HowItWorks;
