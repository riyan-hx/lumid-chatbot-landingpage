import React from "react";
import "./Comparison.css";

const data = [
  {
    title: "How does it make you feel?",
    august: "Like a close friend who gets you. <strong>Warm, real, human.</strong>",
    google: "Anxious, alone, stressed. You figure it out!",
    telehealth: "Like explaining yourself to a stranger every time.",
  },
  {
    title: "Quality of Care",
    august: "Feels like a <strong>friend & doctor.</strong> Actually helpful. Real support when it matters!",
    google: "Fear-based info dump.",
    telehealth: "Cold, clinical & generic. Like talking to someone who doesn’t know you.",
  },
  {
    title: "Lab Report & Prescription Analysis",
    august: "Translates medical jargon into clear, <strong>helpful actions.</strong>",
    google: "You read, you guess, you stress.",
    telehealth: "Basic info. Hard to know what to do next.",
  },
  {
    title: "Personalized Care & Guidance",
    august: "Keeps you ahead with <strong>personalized nudges & habits.</strong>",
    google: "One-size-fits-none, basic tips. No follow-up.",
    telehealth: "Reactive. Only acts when there’s a problem.",
  },
  {
    title: "24/7 Active Care",
    august: "Always available. Human-like support on WhatsApp – even at 2 A.M.",
    google: "Static articles. No real help when you’re panicking late at night.",
    telehealth: "Wait till morning. Support ends with business hours.",
  },
  {
    title: "Speed (Can I get faster answers?)",
    august: "Answers when you need them – instantly",
    google: "Tons of results, no real-time help.",
    telehealth: "Delayed, general advice. Takes time to respond – often hours or days.",
  },
  {
    title: "All in one support",
    august: "All your care in one place – 40+ specialties, integrated.",
    google: "Info spread across pages & articles. You piece it all together.",
    telehealth: "One appointment at a time.",
  },
  {
    title: "Follow-Ups & Continuity",
    august: "Automatic check-ins & nudges you forward.",
    google: "You’re on your own!",
    telehealth: "You need to remember to book again.",
  },
  {
    title: "Cost",
    august: "<strong>FREE</strong> – multiple services & care, no hidden costs.",
    google: "Free to search, but not built for real care, support or value",
    telehealth: "Charges per visit, extra fees add up",
  },
  {
    title: "Accessibility & Multilingual Support",
    august: "Speaks <strong>your language</strong> with context.",
    google: "Generic & often incorrect translation, not personal",
    telehealth: "Limited language support.",
  },
];

export default function Comparison() {
  return (
    <section className="comparison">
      <p className="subtitle">Comparison</p>
      <h2 className="title">What You Actually Care About: <br /> Lumid AI vs. Others</h2>
      <p className="description">
        How does Lumid AI compare to Google and Telehealth? Here’s why Lumid AI is the future of personal healthcare.
      </p>


      <div className="table-wrapper">

      <div className="table">
        <div className="row header">
          <div className="cell feature"></div>
          <div className="cell august"  style={{fontSize:'24px', marginRight: '6px', verticalAlign: 'middle' }}>Lumid AI</div>
          <div className="cell google"><img src="https://framerusercontent.com/images/WlcpRqbRoJuX0zriMcRq79Al9c.png?scale-down-to=512" alt="" /></div>
          <div className="cell telehealth"><img src="https://framerusercontent.com/images/0vm3tVI5WBbHpVJzElyCAbpOk.png?scale-down-to=512" alt="" /></div>
        </div>

        {data.map((item, idx) => (
          <div className="row" key={idx}>
            <div className="cell feature">{item.title}</div>

            <div className="cell august">
              <span dangerouslySetInnerHTML={{ __html: item.august }} />
            </div>
            <div className="cell google">{item.google}</div>
            <div className="cell telehealth">{item.telehealth}</div>
          </div>
        ))}
      </div>

      </div>
     
    </section>
  );
}
