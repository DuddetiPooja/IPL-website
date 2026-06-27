import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

const SLIDES = [
  {
    eyebrow: "OUR CAPTAIN",
    pill: "+ CAPTAIN",
    title: "Pat Cummins. Leads From The Front.",
    sub: "79 wickets across 67 IPL matches — Australia's finest leads SRH into a new era of dominance.",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=1600&h=900&fit=crop",
    overlay: "linear-gradient(100deg, rgba(7,18,10,0.97) 22%, rgba(7,15,10,0.6) 55%, rgba(7,15,10,0.12) 100%)",
    primary: { label: "View Squad", to: "/squad" },
    secondary: { label: "Player Profile", to: "/squad/pat-cummins" },
  },
  {
    eyebrow: "IPL 2025 · MATCH 1",
    title: "SRH vs RCB. The Orange Army Marches On.",
    sub: "Catch every six, every wicket, every roar live from Chinnaswamy as Sunrisers Hyderabad open their 2025 campaign.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1600&h=900&fit=crop",
    overlay: "linear-gradient(100deg, rgba(10,10,10,0.97) 18%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.15) 100%)",
    primary: { label: "Buy Tickets", to: "/tickets" },
    secondary: { label: "Full Schedule", to: "/fixtures" },
    countdown: true,
  },
  {
    eyebrow: "WATCH HIGHLIGHTS",
    title: "287. The Highest Total In IPL History.",
    sub: "Relive the night Sunrisers Hyderabad rewrote the record books at the Rajiv Gandhi Stadium.",
    image: "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=1600&h=900&fit=crop",
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
