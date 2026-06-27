import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { ticketMatches, ticketCategories } from "../data/mockData";

export default function Tickets() {
  const [match, setMatch] = useState(ticketMatches[0]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [qty, setQty] = useState(2);

  const total = selectedCat ? selectedCat.price * qty : 0;

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">Tickets</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(32px,5vw,52px)" }}>Buy Tickets</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal><SectionTitle eyebrow="Step 1" title="Select Match" /></Reveal>
          <div className="grid-auto" style={{ marginBottom: 40 }}>
            {ticketMatches.map((m) => (
              <div
                key={m.id}
                className="card"
                onClick={() => setMatch(m)}
                style={{ padding: 18, cursor: "pointer", border: match.id === m.id ? "1.5px solid var(--orange)" : "1px solid var(--border)" }}
              >
                <div style={{ fontWeight: 800, marginBottom: 6 }}>{m.teamA} vs {m.teamB}</div>
                <div className="text-muted" style={{ fontSize: 12.5 }}>📅 {m.date} · 🕗 {m.time}</div>
                <div className="text-muted" style={{ fontSize: 12.5 }}>📍 {m.venue}</div>
              </div>
            ))}
          </div>

          <Reveal><SectionTitle eyebrow="Step 2" title="Select Category" /></Reveal>
          <div className="card" style={{ padding: 28, marginBottom: 40 }}>
            <svg viewBox="0 0 400 200" width="100%" height="180">
              <ellipse cx="200" cy="100" rx="190" ry="90" fill="none" stroke="var(--gold)" strokeWidth="2" opacity="0.5" />
              <ellipse cx="200" cy="100" rx="140" ry="65" fill="none" stroke="var(--orange)" strokeWidth="2" opacity="0.6" />
              <ellipse cx="200" cy="100" rx="90" ry="42" fill="none" stroke="var(--white)" strokeWidth="2" opacity="0.3" />
              <ellipse cx="200" cy="100" rx="40" ry="20" fill="var(--surface-2)" stroke="var(--border)" />
              <text x="200" y="104" textAnchor="middle" fontSize="11" fill="var(--muted)">PITCH</text>
            </svg>
            <div className="grid-auto" style={{ marginTop: 20 }}>
              {ticketCategories.map((c) => (
                <div
                  key={c.id}
                  className="card"
                  onClick={() => setSelectedCat(c)}
                  style={{ padding: 18, cursor: "pointer", border: selectedCat?.id === c.id ? `1.5px solid ${c.color}` : "1px solid var(--border)" }}
                >
                  <div style={{ width: 14, height: 14, borderRadius: 4, background: c.color, marginBottom: 10 }} />
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{c.name}</div>
                  <div style={{ color: "var(--gold)", fontWeight: 800 }}>₹{c.price.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>

          <Reveal><SectionTitle eyebrow="Step 3" title="Checkout Summary" /></Reveal>
          <div className="card" style={{ padding: 24, maxWidth: 480 }}>
            <div className="flex-between" style={{ marginBottom: 14 }}>
              <span className="text-muted">Match</span>
              <span style={{ fontWeight: 700 }}>{match.teamA} vs {match.teamB}</span>
            </div>
            <div className="flex-between" style={{ marginBottom: 14 }}>
              <span className="text-muted">Category</span>
              <span style={{ fontWeight: 700 }}>{selectedCat ? selectedCat.name : "Not selected"}</span>
            </div>
            <div className="flex-between" style={{ marginBottom: 14 }}>
              <span className="text-muted">Quantity</span>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button className="btn btn-outline btn-sm" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
                <span>{qty}</span>
                <button className="btn btn-outline btn-sm" onClick={() => setQty((q) => Math.min(10, q + 1))}>+</button>
              </div>
            </div>
            <div className="flex-between" style={{ marginBottom: 20, fontWeight: 800, fontSize: 17, borderTop: "1px solid var(--border)", paddingTop: 14 }}>
              <span>Total</span><span>₹{total.toLocaleString()}</span>
            </div>
            <button className="btn btn-primary btn-block" disabled={!selectedCat}>Proceed to Pay</button>
          </div>
        </div>
      </section>
    </>
  );
}
