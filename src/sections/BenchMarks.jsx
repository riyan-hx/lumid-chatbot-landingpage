import React from "react";
import "./BenchMarks.css";
import { RiRobot2Line } from "react-icons/ri";
import { ImPencil } from "react-icons/im";
import { LuMessageSquareText } from "react-icons/lu";

export default function BenchMarks() {
  return (
    <section className="why-august">
      <p className="section-subtitle">The Benchmarks</p>
      <h2 className="section-title">Why choose Lumid AI?</h2>
      <p className="section-description">
      Lumid AI outperforms industry benchmarks, delivering expert-level accuracy, real world diagnostic precision, and unmatched triaging across medical specialities.
      </p>

      <button className="report-button">Get Started</button>

      <div className="features">
        <div className="feature-cards">
          <div className="icon"><RiRobot2Line  className="icon-1"/></div>
          <h3>Most Accurate<br />AI Health Engine</h3>
          <p>25% higher diagnostic accuracy than human doctors.</p>
        </div>
        <div className="feature-cards">
          <div className="icon"><ImPencil  className="icon-2"/></div>
          <h3>#1 in AI<br />Medical Exams</h3>
          <p>Scored 94.8% in USMLE—outperforming OpenAI’s GPT-4 and Google MedPaLM 2.</p>
        </div>
        <div className="feature-cards">
          <div className="icon"><LuMessageSquareText className="icon-3"/></div>
          <h3>Smartest AI for<br />Conversations</h3>
          <p>86.75% accuracy in medical discussions —sets a new industry standard.</p>
        </div>
      </div>
    </section>
  );
}
