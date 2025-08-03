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
          <p className="label">Disconnected Care</p>
          <ul>
            <li>
              <div className="cross-icon"><RxCrossCircled /></div>
              <div>
              Cold, complicated health portals—no real human touch.
              </div>
            </li>
            <li>
              <div className="cross-icon"><RxCrossCircled /></div>  
              <div>Stressful doctor visits for simple questions, no one to talk to when you feel anxious.
              </div>
              </li>
            <li>
              <div className="cross-icon"><RxCrossCircled /></div> 
              <div>No emotional support; advice feels robotic and generic.</div>
            </li>
            <li>
              <div className="cross-icon"><RxCrossCircled /></div> 
               <div>Long waits, impersonal responses—or none at all when you’re seeking comfort.</div>
            </li>
            <li>
              <div className="cross-icon"><RxCrossCircled /></div> 
              <div>Never remembers how you felt last time or adapts support for you.</div>
            </li>
          </ul>
        </div>

        {/* August Way */}
        <div className="box august-way">
          
          <h3>Lumid.ai Way</h3>
          <p className="label">Empathy, Support, Connection</p>
          <ul>
            <li>
              <div className="tick-icon"><CiCircleCheck /></div>
              <div>
              <strong>Genuine understanding—</strong>AI that recognizes your emotions and responds with care, like a friend.
              </div>
            </li>
            <li>
              <div className="tick-icon"><CiCircleCheck /></div>
              <div>
              Instant, judgment-free support—for health worries, emotional moments, or just when you need someone to talk to.
              </div>
            </li>
            <li>
              <div className="tick-icon"><CiCircleCheck /></div>
              <div>
              Personalized guidance—advice, reminders, and conversations that adapt to your feelings and needs over time.
              </div>
            </li>

            <li>
              <div className="tick-icon"><CiCircleCheck /></div>
              <div>
              Always available—real-time chat 24/7, with proactive emotional check-ins from Lumid.
              </div>
            </li>

            <li>
              <div className="tick-icon"><CiCircleCheck /></div>
              <div>
              Built for well-being—privacy-first, deeply empathetic, and focused on helping you feel better every day.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}