import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h2>Emotional Support<br />when you<br />need it,<br />right away</h2>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
          {/* <div className="store-buttons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/2560px-Download_on_the_App_Store_RGB_blk.svg.png" alt="App Store" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
          </div> */}
        </div>

        <div className="footer-center">
          <div className="quick-links">
            <p>• Quick Links</p>
            <div className="link-buttons">
              <button>Talk to Lumid AI</button>
              <button>Library</button>
              <button>About</button>
              <button>Contact</button>
              <button>Lumid.in</button>
            </div>
          </div>
        </div>

        <div className="footer-right">
          {/* <div className="contact-info">
            <p>•  Contact</p>
            <p> contact@getbeyondhealth.com</p>
            <p> USA: +1 929 577 3785</p>
            <p> India: +91 74831 27040</p>
            <p> 506/507, 1st Main Rd,<br />
                Murugeshpalya, K R Garden,<br />
                Bengaluru, Karnataka 560075</p>
          </div> */}
          <div className="policies">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div className="footer-logo">
        <span className="logo-large"><span className="logo-main">Lumidai</span><span className="logo-ai">.in</span></span>
        <p className="copyright">© 2025 Lumid AI. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
