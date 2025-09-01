import React from "react";
import "./BenchMarks.css";
import { RiRobot2Line } from "react-icons/ri";
import { ImPencil } from "react-icons/im";
import { LuMessageSquareText } from "react-icons/lu";

export default function BenchMarks() {
  return (
    <section className="why-august">
      <p className="section-subtitle">Why Choose Lumid?</p>
      <h2 className="section-title">Not just smart—emotionally intelligent.</h2>
      <p className="section-description">
      Lumid isn’t built for diagnoses. It’s built to understand how you feel, offer comfort, and be there when no one else is.
      </p>

      <button className="report-button" onClick={() => window.location.href = 'https://chat.lumidai.in'}>Get Started</button>

      <div className="features">
        <div className="feature-cards">
          <div className="icon"><RiRobot2Line  className="icon-1"/></div>
          <h3>Emotionally-Aware <br /> AI Companion</h3>
          <p>Built with expert-curated psychological insights—Lumid knows how to listen, validate, and support with care.</p>
        </div>
        <div className="feature-cards">
          <div className="icon"><ImPencil  className="icon-2"/></div>
          <h3>Trusted Conversations</h3>
          <p>92% of users feel calmer after chatting with Lumid</p>
        </div>
        <div className="feature-cards">
          <div className="icon"><LuMessageSquareText className="icon-3"/></div>
          <h3>Always Available</h3>
          <p>Whether it’s 2 PM or 2 AM, Lumid’s here to help you breathe, reset, and feel a little more okay.</p>
        </div>
      </div>
    </section>
  );
}
