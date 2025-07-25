import React from "react";
import "./PrivacySection.css";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export default function PrivacySection() {
  return (
    <section className="privacy-section">
      <div className="privacy-left">
        <div className="privacy-icon"><IoShieldCheckmarkOutline /></div>
        <h2>Your Privacy is<br />Our Priority</h2>
      </div>
      <div className="privacy-right">
        <p>
        Lumid AI never requires personally identifiable information to assist you. Your health data remains
          secure, protected by industry-leading encryption, and fully compliant with HIPAA and GDPR standards.
        </p>
      </div>
    </section>
  );
}
