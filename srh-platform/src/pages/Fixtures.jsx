import { useState, useMemo } from "react";
import SeasonMatchCard from "../components/SeasonMatchCard";
import Reveal from "../components/Reveal";
import { seasonMatches } from "../data/mockData";

const TABS = ["ALL", "HOME", "AWAY", "WON", "LOST"];

export default function Fixtures() {
  const [tab, setTab] = useState("ALL");

  const filtered = useMemo(() => {
    return seasonMatches.filter((m) => {
      if (tab === "ALL") return true;
      if (tab === "HOME") return m.tournamentTag === "HOME";
      if (tab === "AWAY") return m.tournamentTag === "AWAY";
      if (tab === "WON") return m.outcome === "won";
      if (tab === "LOST") return m.outcome === "lost";
      return true;
    });
  }, [tab]);

  const grouped = useMemo(() => {
    const groups = {};
    filtered.forEach((m) => {
      if (!groups[m.month]) groups[m.month] = [];
      groups[m.month].push(m);
    });
    return groups;
  }, [filtered]);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">IPL 2026 · SEASON</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(32px,5.5vw,56px)" }}>Fixtures & Results</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="scrollx" style={{ marginBottom: 10 }}>
            {TABS.map((t) => (
              <button key={t} className={`season-tab-pill ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>{t}</button>
            ))}
          </div>

          {Object.keys(grouped).length === 0 && <p className="text-muted" style={{ marginTop: 30 }}>No matches found for this filter.</p>}

          {Object.entries(grouped).map(([month, matches]) => (
            <div key={month}>
              <div className="season-month-heading">{month}</div>
              {matches.map((m, i) => (
                <Reveal key={m.id} delay={i * 40}><SeasonMatchCard match={m} /></Reveal>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
