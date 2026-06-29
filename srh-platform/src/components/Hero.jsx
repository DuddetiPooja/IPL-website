import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

const SLIDES = [
  {
    eyebrow: "OUR CAPTAIN",
    pill: "+ CAPTAIN",
    title: "Pat Cummins. Leads From The Front.",
    sub: "The Australian World Cup-winning captain leads Sunrisers Hyderabad with fearless leadership and world-class pace.",
    image:  "/players/pat-cummins.jpg",
    overlay: "linear-gradient(100deg, rgba(20,10,4,0.97) 22%, rgba(20,10,4,0.6) 55%, rgba(20,10,4,0.12) 100%)",
    primary: { label: "View Profile", to: "/squad/abhishek-sharma" },
    secondary: { label: "View Squad", to: "/squad" },
  },
  {
    eyebrow: "IPL 2025 · MATCH 1",
    title: "SRH vs RCB. The Orange Army Marches On.",
    sub: "Catch every six, every wicket, every roar live from Chinnaswamy as Sunrisers Hyderabad open their 2025 campaign.",
   image: "/players/travis-head.jpg",
    overlay: "linear-gradient(100deg, rgba(10,10,10,0.97) 18%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.15) 100%)",
    primary: { label: "Buy Tickets", to: "/tickets" },
    secondary: { label: "Full Schedule", to: "/fixtures" },
    countdown: true,
  },
  {
    eyebrow: "WATCH HIGHLIGHTS",
    title: "287. The Highest Total In IPL History.",
    sub: "Relive the night Sunrisers Hyderabad rewrote the record books at the Rajiv Gandhi Stadium.",
    image: "/players/abhishek-sharma.jpg",
    overlay: "linear-gradient(100deg, rgba(20,10,4,0.97) 18%, rgba(20,10,4,0.55) 55%, rgba(20,10,4,0.15) 100%)",
    primary: { label: "Watch Highlights", to: "/videos" },
    secondary: { label: "Read Story", to: "/news" },
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
