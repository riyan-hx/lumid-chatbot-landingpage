import React from 'react';
import './Features.css';
import { MdWorkHistory } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";

const Features = () => {
  return (
    <section className="august-section">
      <p className="subtitle">The Features</p>
      <h2 className="title">What Lumid AI can Do For You</h2>
      <p className="desc">
        Lumid listens when others can't. A comforting, judgment free space — anytime you need to talk.
      </p>

      <div className="card-grid">
        <div className="history-card">
          <div className="card-image">
            <img src='https://framerusercontent.com/images/bw1KMhEzz40UABsbRGFPR31RU.png' alt="Phone Interface" />
          </div>
          <div className="card-content">
            <span className="card-step">01</span>
            <div className="card-tag">
              <span className="tag-icon"><MdWorkHistory /></span>
              <span>Emotional Check-Ins</span>
            </div>
            <h2 className="card-title">
              Your safe space for mental clarity—Lumid remembers what matters to you.
            </h2>
            <p className="card-description">
              Lumid gently tracks your emotional patterns over time, so you don’t have to repeat your story. Whether it’s anxiety, grief, or daily stress, Lumid listens and remembers, helping you reflect, grow, and feel supported—always at your pace.
            </p>
          </div>
        </div>

        <div className="history-card2">
          <div className="card-image2">
            <img src='https://framerusercontent.com/images/Dbamsx8O8YlcPiLyqpq4H3OWg.png?scale-down-to=1024' alt="Phone Interface" />
          </div>
          <div className="card-content2">
            <span className="card-step">02</span>
            <div className="card-tag2">
              <span className="tag-icon"><LuListTodo /></span>
              <span>Mood Awareness & Support</span>
            </div>
            <h2 className="card-title">
            Understand Your Feelings. Explore the “Why.” Heal from Within.
            </h2>
            <p className="card-description">
            Confused by your mood swings or constant stress? Lumid helps you gently explore what’s behind those feelings—offering clarity, emotional grounding, and guidance on how to cope or feel better. You're never alone in this.
            </p>
          </div>
        </div>



        <div className="history-card3">
          <div className="card-image3">
            <img src='https://framerusercontent.com/images/f0yEwWC8jySSRdfJWvPqY2Fudrk.png?scale-down-to=1024' alt="Phone Interface" />
          </div>
          <div className="card-content3">
            <span className="card-step">03</span>
            <div className="card-tag3">
              <span className="tag-icon"><LuListTodo /></span>
              <span>Emotional Guidance & Self-Care</span>
            </div>
            <h2 className="card-title">
            Know what you’re feeling—and how to respond with kindness.
            </h2>
            <p className="card-description">
              Struggling to make sense of your emotions? Lumid helps you recognize your mental state, offers gentle insights, and suggests personalized self-care ideas
            </p>
          </div>
        </div>

        <div className="history-card">
          <div className="card-image">
            <img src='https://framerusercontent.com/images/vM2vbTpN7efH0gPhCuHlaZSnqNk.png?scale-down-to=1024' alt="Phone Interface" />
          </div>
          <div className="card-content">
            <span className="card-step">04</span>
            <div className="card-tag">
              <span className="tag-icon"><MdWorkHistory /></span>
              <span>Reflective Support & Clarity</span>
            </div>
            <h2 className="card-title">
            Tired of emotional confusion? Gain clarity when your thoughts feel heavy.
            </h2>
            <p className="card-description">
            Lumid helps unpack your feelings in simple, caring ways—highlighting emotional triggers, patterns, and offering thoughtful, healing reflections. No pressure. Just clarity.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
