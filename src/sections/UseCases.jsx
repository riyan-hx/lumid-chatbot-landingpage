import React, { useState } from "react";
import { MdVerified } from 'react-icons/md';
import { MdVerifiedUser } from 'react-icons/md';
import "./UseCases.css";



const useCaseData = {
  "Heart Health": [
    {
        question: "I've been feeling chest pain. Should I be concerned?",
        title: "Symptom Evaluation",
        desc: "Understanding chest pain types and when to seek help.",
      },
      {
        question: "Beta-blockers are making me dizzy. Is that normal?",
        title: "Medication Concerns",
        desc: "Common side effects and what to do about them.",
      },
      {
        question: "My cholesterol numbers are confusing. Help?",
        title: "Diagnostic Clarification",
        desc: "What HDL, LDL, and triglycerides mean.",
      },
      {
        question: "Stroke recovery: what diet and exercise plan is best?",
        title: "Lifestyle Adjustments",
        desc: "Low-sodium meals and safe post-stroke exercises.",
      },
  ],
  "Diabetes & Endocrine": [
      {
        question: "My sugar spikes after meals. What should I do?",
        title: "Meal Planning",
        desc: "Best foods and timing to manage blood sugar.",
      },
      {
        question: "How often should I check my sugar levels?",
        title: "Monitoring",
        desc: "Guidelines for testing and tracking patterns.",
      },
      {
        question: "Is it safe to fast while diabetic?",
        title: "Fasting Safety",
        desc: "Managing glucose and medications during fasting.",
      },
      {
        question: "Can stress affect my diabetes?",
        title: "Stress & Sugar",
        desc: "Understanding the hormonal impact of stress.",
      },
  ],
  "Mental Health": [
    {
        question: "I can't stop overthinking. What can I do?",
        title: "Overthinking Help",
        desc: "Mindfulness and CBT strategies.",
      },
      {
        question: "I feel anxious in social settings. Any tips?",
        title: "Social Anxiety",
        desc: "Techniques to reduce anxiety in social situations.",
      },
      {
        question: "I’m always tired. Could it be depression?",
        title: "Fatigue vs Depression",
        desc: "How to differentiate and get the right help.",
      },
      {
        question: "How do I build a positive mindset?",
        title: "Mental Resilience",
        desc: "Daily habits to improve emotional wellbeing.",
      },
  ],
  "Women’s Health": [
    {
        question: "I have irregular periods. Is this normal?",
        title: "Cycle Health",
        desc: "When irregularity is a concern and why.",
      },
      {
        question: "What should I eat during pregnancy?",
        title: "Pregnancy Nutrition",
        desc: "Foods to support baby’s growth and mother’s energy.",
      },
      {
        question: "Menopause symptoms are overwhelming. Help?",
        title: "Managing Menopause",
        desc: "Hormonal changes and lifestyle tips.",
      },
      {
        question: "Are PCOS and weight gain related?",
        title: "PCOS Insights",
        desc: "Understanding the hormonal impact on metabolism.",
      },
  ],
  "Skin Conditions": [
    {
        question: "How can I reduce acne without drying my skin?",
        title: "Acne Care",
        desc: "Gentle yet effective treatments.",
      },
      {
        question: "I have a rash that won’t go away. What next?",
        title: "Persistent Rashes",
        desc: "When to see a dermatologist.",
      },
      {
        question: "Best sunscreen for oily skin?",
        title: "Sun Protection",
        desc: "Lightweight, non-comedogenic SPF options.",
      },
      {
        question: "My skin itches at night. Why?",
        title: "Itchy Skin",
        desc: "Possible causes like eczema, allergies, or dryness.",
      },
  ],
  "Digestive Health": [
    {
        question: "Why do I feel bloated every evening?",
        title: "Bloating Help",
        desc: "Foods and habits that may be causing it.",
      },
      {
        question: "How to manage constipation naturally?",
        title: "Digestive Support",
        desc: "Diet, water, and movement tips.",
      },
      {
        question: "Is acid reflux dangerous?",
        title: "Reflux Facts",
        desc: "Symptoms, triggers, and long-term effects.",
      },
      {
        question: "What are signs of food intolerance?",
        title: "Food Sensitivities",
        desc: "How to spot and test for issues.",
      }
  ],
};

export default function UseCases() {
  const tabs = Object.keys(useCaseData);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="use-cases">
      <p className="section-subtitle">Use cases</p>
      <h2 className="section-title">See how others use Lumid AI</h2>
      <p className="section-desc">
        Real people, real questions—see how Lumid AI supports 2M users on their health journey.
      </p>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${tab === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="cards">
        {useCaseData[activeTab].map((card, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <span className="ai-label">AU</span>
              <span className="ai-badge">Lumid AI <MdVerified className="verify-tick" /></span>
            </div>
            <p className="question">{card.question}</p>
              
              <div className="dots">...</div>
            
            <div className="card-footer">
              <div >
              <MdVerifiedUser className="Mdverify"/>
              </div>
              <div>
                <h4 className="card-title">{card.title}</h4>
                <p className="card-desc">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="cta-btn"
        onClick={() => window.location.href = 'https://chat.lumid.in'}
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
    </section>
  );
}
