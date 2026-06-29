import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CountdownTimer from "./CountdownTimer";
import patCummins from "../assets/players/pat-cummins.png";
import travisHead from "../assets/players/travis-head.png";
import abhishekSharma from "../assets/players/abhishek-sharma.png";

const SLIDES = [
  {
    eyebrow: "OUR CAPTAIN",
    pill: "+ CAPTAIN",
    title: "Pat Cummins. Leads From The Front.",
    sub: "The Australian World Cup-winning captain inspires Sunrisers Hyderabad with fearless leadership, precision pace, and unmatched determination.",
    image: "/players/pat-cummins.png",
    overlay:
      "linear-gradient(100deg, rgba(7,18,10,0.97) 20%, rgba(7,15,10,0.55) 55%, rgba(7,15,10,0.15) 100%)",
    primary: { label: "View Profile", to: "/squad/pat-cummins" },
    secondary: { label: "View Squad", to: "/squad" },
  },

  {
    eyebrow: "POWER OPENER",
    pill: "+ BATSMAN",
    title: "Travis Head. Fearless Cricket.",
    sub: "An explosive opening batter capable of changing the course of a match in just a few overs with fearless stroke play.",
    image: "/players/travis-head.png",
    overlay:
      "linear-gradient(100deg, rgba(7,18,10,0.97) 20%, rgba(7,15,10,0.55) 55%, rgba(7,15,10,0.15) 100%)",
    primary: { label: "View Profile", to: "/squad/travis-head" },
    secondary: { label: "View Squad", to: "/squad" },
  },

  {
    eyebrow: "RISING STAR",
    pill: "+ ALL-ROUNDER",
    title: "Abhishek Sharma. Future Of SRH.",
    sub: "A fearless young all-rounder delivering explosive batting, useful spin bowling, and electrifying performances for the Orange Army.",
    image: "/players/abhishek-sharma.png",
    overlay:
      "linear-gradient(100deg, rgba(7,18,10,0.97) 20%, rgba(7,15,10,0.55) 55%, rgba(7,15,10,0.15) 100%)",
    primary: { label: "View Profile", to: "/squad/abhishek-sharma" },
    secondary: { label: "View Squad", to: "/squad" },
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 7000);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[index];

  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={slide.image} alt="" />
        <div className="hero-bg-overlay" style={{ background: slide.overlay }} />
      </div>
      <div className="container">
        <div className="hero-content">
          {slide.pill && <span className="hero-pill">{slide.pill}</span>}
          <div className="hero-eyebrow" style={slide.pill ? { marginTop: 2 } : undefined}>{slide.eyebrow}</div>
          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-sub">{slide.sub}</p>
          {slide.countdown && (
            <div style={{ marginBottom: 24 }}>
              <CountdownTimer target={new Date(Date.now() + 1000 * 60 * 60 * 53)} />
            </div>
          )}
          <div className="hero-cta">
            <Link to={slide.primary.to} className="btn btn-primary">{slide.primary.label}</Link>
            <Link to={slide.secondary.to} className="btn btn-outline">{slide.secondary.label}</Link>
          </div>
        </div>
      </div>

      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            style={{ border: "none", padding: 0 }}
          />
        ))}
        <span>{String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}</span>
      </div>

      <div className="hero-arrows">
        <button aria-label="Previous slide" onClick={() => setIndex((index - 1 + SLIDES.length) % SLIDES.length)}>‹</button>
        <button aria-label="Next slide" onClick={() => setIndex((index + 1) % SLIDES.length)}>›</button>
      </div>
    </section>
  );
}
