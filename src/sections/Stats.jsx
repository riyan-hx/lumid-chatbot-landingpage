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
          <div className="stat-label">Datas Collected</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon"><FaGraduationCap /></div>
        <div className="stat-text">
          <div className="stat-number">100+</div>
          <div className="stat-label">Experts Approved</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon"><FaFileAlt /></div>
        <div className="stat-text">
          <div className="stat-number">1000+</div>
          <div className="stat-label">Responses Generated</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
