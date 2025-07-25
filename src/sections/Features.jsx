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
        From reports to treatment options, Lumid simplifies your health, so you can stay at ease.
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
              <span>Medical History Review</span>
            </div>
            <h2 className="card-title">
              Your second brain for health—Lumid AI recalls the details you miss.
            </h2>
            <p className="card-description">
              Lumid AI quickly scans your health records, highlighting key details—like past conditions, treatments, or allergies—so you get personalised, accurate guidance instantly.
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
              <span>Symptom Checking & Differential Diagnosis</span>
            </div>
            <h2 className="card-title">
            Understand Symptoms. Explore Causes. Know What to Ask Your Doctor.
            </h2>
            <p className="card-description">
            Not sure what’s causing that headache, rash, or stomach pain?  Lumid AI gives you clarity before you panic—helps you decide if it’s worth seeing a doctor & what to ask if you do. 
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
              <span>Care Navigation & Specialist Guidance</span>
            </div>
            <h2 className="card-title">
            Know exactly where, when and whom to seek care.
            </h2>
            <p className="card-description">
            Lumid AI assesses your symptoms, determines urgency & quickly connects you with the right provider or specialist.
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
              <span>Lab Report & Prescription Analysis</span>
            </div>
            <h2 className="card-title">
            Tired of medical jargon? Get clarity when you’re confused.
            </h2>
            <p className="card-description">
            Lumid AI translates complex medical prescriptions, understands scans, highlights information, flags potential medication interactions, and suggests safer alternatives.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
