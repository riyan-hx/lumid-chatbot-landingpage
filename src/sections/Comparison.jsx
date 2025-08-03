import React from "react";
import "./Comparison.css";

const data = [
  {
    title: "Emotional Understanding",
    august: "Feels like a <strong>caring friend</strong>—<strong>deeply empathetic</strong>, <strong>emotionally attentive</strong>, and truly supportive.",
    google: "Not designed for emotions—just data, no feelings.",
    telehealth: "Polite and helpful, but emotional warmth can be lacking unless specifically prompted.",
  },
  {
    title: "Support Style",
    august: "<strong>Warm, human-like</strong>, and <strong>therapeutic</strong>—a <strong>safe space</strong> to be yourself, vent, and reflect.",
    google: "Cold, info-heavy: just delivers search results.",
    telehealth: "Often helpful, but responses can feel robotic or distant.",
  },
  {
    title: "Personalization",
    august: "<strong>Remembers your moods</strong>, adapts with you, and <strong>personalizes responses</strong> for your emotional journey.",
    google: "No memory, no personal touch.",
    telehealth: "Some short-term memory (if enabled), but rarely offers emotional follow-ups.",
  },
  {
    title: "Availability",
    august: "<strong>24/7, real-time chat</strong>—always ready to <strong>listen</strong> via web or WhatsApp.",
    google: "Always on, but only returns web pages—no interactive chat.",
    telehealth: "Always available, but only responds through certain apps or sites.",
  },
  {
    title: "Follow-Ups & Check-Ins",
    august: "<strong>Proactive</strong>: checks in with you and supports your progress, based on how you’ve felt before.",
    google: "No check-ins, you’re on your own.",
    telehealth: "Only offers this if specifically programmed to; not automatic.",
  },
  {
    title: "Clarity in Emotions",
    august: "Helps you <strong>untangle and understand your feelings</strong>, like a <strong>calm, understanding companion</strong>.",
    google: "Too many articles—can feel overwhelming or impersonal.",
    telehealth: "Tries to help, but can miss deeper emotional nuance.",
  },
  {
    title: "Language Support",
    august: "Speaks <strong>your language</strong>—with <strong>emotional context</strong> and <strong>cultural awareness</strong> built in.",
    google: "Literal machine translation: often misses the human meaning behind words.",
    telehealth: "Good with languages, but empathy isn’t always present in translations.",
  },
  {
    title: "Mental Health Focus",
    august: "Trained on <strong>psychological, therapy-based datasets</strong>—responds with <strong>true care</strong> and <strong>therapist-like understanding</strong>.",
    google: "No focus on mental well-being–just facts and pages.",
    telehealth: "General knowledge: not therapy or mental health specific.",
  },
  {
    title: "Cost",
    august: "Absolutely <strong>FREE</strong>—all care and support, with <strong>no fees or catches</strong>.",
    google: "Free to search but doesn’t offer genuine care or support.",
    telehealth: "Free or paid, with limited meaningful support.",
  },
];


export default function Comparison() {
  return (
    <section className="comparison">
      <p className="subtitle">Comparison</p>
      <h2 className="title">What You Actually Care About: <br /> august AI vs. Others</h2>
      <p className="description">
        How does august AI compare to Google and Telehealth? Here’s why august AI is the future of personal healthcare.
      </p>


      <div className="table-wrapper">

      <div className="table">
        <div className="row header">
          <div className="cell feature"></div>
          <div className="cell august"  style={{fontSize:'24px', marginRight: '6px', verticalAlign: 'middle' }}>august AI</div>
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
