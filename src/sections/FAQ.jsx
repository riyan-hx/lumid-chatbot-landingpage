import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdVerified } from 'react-icons/md';

import "./FAQ.css";

const faqData = [
  {
    question: "Is Lumid AI a doctor?",
    answer: "No, Lumid AI is not a doctor. It's an AI health assistant that helps interpret symptoms and medical data."
  },
  {
    question: "Is it free?",
    answer: "Yes, Lumid AI provides free health support and guidance 24/7."
  },
  {
    question: "Does it need insurance?",
    answer: "No insurance is required. Lumid AI is accessible to everyone at no cost."
  },
  {
    question: "How does Lumid AI work?",
    answer: "You can chat with Lumid AI and share your symptoms or reports. It gives insights using AI."
  },
  {
    question: "Can Lumid AI diagnose my condition?",
    answer: "Lumid AI can suggest likely conditions, but it's not a replacement for professional diagnosis."
  },
  {
    question: "Is Lumid AI HIPAA compliant?",
    answer: "Yes, your data is encrypted and fully HIPAA & GDPR compliant."
  },
  {
    question: "How accurate is it?",
    answer: "It has outperformed some traditional benchmarks in accuracy tests."
  },
  {
    question: "Is it safe to use?",
    answer: "Yes, it's designed to protect your privacy and never asks for personal identity info."
  },
  {
    question: "Can I talk to a real doctor?",
    answer: "Currently, Lumid AI is AI-only, but it can guide you when to seek real medical help."
  },
  {
    question: "What happens to my data?",
    answer: "Your data stays private and encrypted. Lumid AI never stores personally identifiable data."
  }
];

export default function FAQ() {
  const [showMore, setShowMore] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const visibleFaqs = showMore ? faqData : faqData.slice(0, 5);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-wrapper">
      <p className="faq-label">FAQs</p>
      <h2 className="faq-heading">Common Questions</h2>
      <p className="faq-subtext">
        Answers to common questions about how Lumid AI works, its accuracy, and your data privacy.
      </p>

      <div className="faq-list">
        {visibleFaqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(idx)}>
              <span>{faq.question}</span>
              <button className="faq-plus">{openIndex === idx ? "-" : "+"}</button>
            </div>
            {openIndex === idx && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>

      
      <div className="show-more" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}{" "}
        <span>
          {showMore ? <FaChevronUp className="show-icons" /> : <FaChevronDown className="show-icons" />}
        </span>
      </div>

      <div className="chat-section">
        <h2>Take Control of your Health Today</h2>
        <p>Chat with August on WhatsApp and start your journey to smarter health.</p>
        <button className="whatsapp-btn" onClick={() => window.location.href = 'https://lumidai.in'}>Start Chatting on Whatsapp →</button>

        <div className="chat-window">
          <div className="chat-header">
            <div className="card-header">
              <span className="ai-label">AU</span>
              <span className="ai-badge">Lumid AI <MdVerified className="verify-tick" /></span>
            </div>
          </div>
          <div className="chat-body">
            <div className="msg-left">Hey, I’m Lumid AI. Your personal doctor! How can I help you?</div>
            <div className="msg-right">I’m feeling like vomiting and my head aches. What do I do?</div>
          </div>
          <input className="chat-input" placeholder="Send a message" />
        </div>
      </div>
    </section>
  );
}
