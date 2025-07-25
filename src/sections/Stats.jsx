import React from 'react';
import './Stats.css';
import { FaUsers, FaGraduationCap, FaFileAlt } from 'react-icons/fa';

const Stats = () => {
  return (
    <section className="participate-container">
      <div className="stat-card">
        <div className="stat-icon"><FaUsers /></div>
        <div className="stat-text">
          <div className="stat-number">10K+</div>
          <div className="stat-label">Dataset Collected</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon"><FaGraduationCap /></div>
        <div className="stat-text">
          <div className="stat-number">100K+</div>
          <div className="stat-label">Doctors using actively</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon"><FaFileAlt /></div>
        <div className="stat-text">
          <div className="stat-number">6.2M+</div>
          <div className="stat-label">Reports analysed</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
