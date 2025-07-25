import React from "react";
import "./Upgrade.css";
import { RxCrossCircled } from "react-icons/rx";
import { CiCircleCheck } from "react-icons/ci";

export default function Upgrade() {
  return (
    <section className="upgrade-section">
      <p className="section-subtitle">Before And After</p>
      <h2 className="section-title">Why Settle for Less?<br />Upgrade to Lumid AI</h2>
      <p className="section-description">
        Have a medical companion right in your pocket.
      </p>

      <div className="comparison-boxes">
        {/* Old Way */}
        <div className="box old-way">
          <h3>Old Way</h3>
          <p className="label">Traditional System</p>
          <ul>
            <li>
              <div className="cross-icon"><RxCrossCircled /></div>
              <div>
              Confusing medical reports & paperwork
              </div>
            </li>
            <li>
              <div className="cross-icon"><RxCrossCircled /></div>  
              <div>Expensive doctor visits for simple clarifications</div>
              </li>
            <li>
              <div className="cross-icon"><RxCrossCircled /></div> 
              <div>No guidance on daily health, nutrition, or medication</div>
            </li>
            <li>
              <div className="cross-icon"><RxCrossCircled /></div> 
               <div>Waiting hours or days for a response to simple health questions.</div>
            </li>
            <li>
              <div className="cross-icon"><RxCrossCircled /></div> 
              <div>No personalized recommendations to help prevent health issues    before they arise.</div>
            </li>
          </ul>
        </div>

        {/* August Way */}
        <div className="box august-way">
          
          <h3>Lumid.ai Way</h3>
          <p className="label">Your Health, Your Control</p>
          <ul>
            <li>
              <div className="tick-icon"><CiCircleCheck /></div>
              <div>
              Instantly understand prescriptions & reports — just upload a photo
              </div>
            </li>
            <li>
              <div className="tick-icon"><CiCircleCheck /></div>
              <div>
              Free, AI–powered health guidance available 24/7
              </div>
            </li>
            <li>
              <div className="tick-icon"><CiCircleCheck /></div>
              <div>
              Personalized nutrition plans & medication reminders
              </div>
            </li>

            <li>
              <div className="tick-icon"><CiCircleCheck /></div>
              <div>
              Immediate responses for your health queries
              </div>
            </li>

            <li>
              <div className="tick-icon"><CiCircleCheck /></div>
              <div>
              AI–driven insights help you prevent potential health issues before they happen.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}