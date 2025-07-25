import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Joel Samberg",
    title: "August User",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "This service is incredibly helpful for identifying medical conditions and receiving suggestions. Highly recommended!",
    stars: 5,
    platform: "Google",
  },
  {
    name: "Eva Smith",
    title: "August User",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "Recently contacted August AI through WhatsApp, and it gave me the best solution for mental well-being.",
    stars: 5,
    platform: "Google",
  },
  {
    name: "Mark Johnson",
    title: "August User",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    content:
      "August AI helped me understand my condition better than my previous doctor visits. Quick and helpful!",
    stars: 5,
    platform: "Google",
  },
  {
    name: "Sara Lee",
    title: "August User",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    content:
      "I was worried about a condition — August gave me clarity. Simple, fast, reassuring!",
    stars: 4,
    platform: "Google",
  },
  {
    name: "David Green",
    title: "August User",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    content:
      "Helpful, clean interface. Very impressed with how the AI handled everything!",
    stars: 4,
    platform: "Google",
  },
];

// Custom arrow buttons
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

export default function Testimonials() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials-section">
      <p className="testimonials-subtitle">Testimonials</p>
      <h2 className="testimonials-title">What Users are Saying</h2>
      <p className="testimonials-description">
        Answers to common questions about how August works, its accuracy, and your data privacy.
      </p>

      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <img src={t.avatar} alt={t.name} className="avatar" />
              <div>
                <p className="name">{t.name}</p>
                <p className="role">{t.title}</p>
              </div>
            </div>
            <p className="testimonial-content">{t.content}</p>
            <div className="stars">
              {Array.from({ length: t.stars }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className="platform">
              Posted on <span className="google">{t.platform}</span>
            </p>
          </div>
        ))}
      </Slider>
    </section>
  );
}
