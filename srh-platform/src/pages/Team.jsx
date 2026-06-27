import { useState, useMemo } from "react";
import SquadPlayerCard from "../components/SquadPlayerCard";
import Reveal from "../components/Reveal";
import { players } from "../data/mockData";

const CATEGORIES = [
  { key: "All", label: "All" },
  { key: "Batter", label: "Batters" },
  { key: "Wicket-Keeper", label: "Wicket Keepers" },
  { key: "All-Rounder", label: "All-Rounders" },
  { key: "Bowler", label: "Bowlers" },
];

export default function Team() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const c = { All: players.length };
    CATEGORIES.slice(1).forEach((cat) => {
      c[cat.key] = players.filter((p) => p.role === cat.key).length;
    });
    return c;
  }, []);

  const filtered = useMemo(() => {
    return players.filter((p) => {
      const matchCat = category === "All" || p.role === category;
      const matchQuery = p.name.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [category, query]);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">IPL 2026</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(32px,5vw,52px)" }}>Fearless Squad</h1>
          <p className="text-muted" style={{ maxWidth: 560 }}>
            Meet the players, coaches, and management driving Sunrisers Hyderabad's 2026 campaign.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="flex-between" style={{ marginBottom: 28, flexWrap: "wrap", gap: 14 }}>
            <div className="scrollx" style={{ paddingBottom: 0 }}>
              {CATEGORIES.map((c) => (
                <button
                  key={c.key}
                  className={`squad-filter-pill ${category === c.key ? "active" : ""}`}
                  onClick={() => setCategory(c.key)}
                >
                  {c.label} <span className="count">{counts[c.key]}</span>
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search players..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 999,
                padding: "10px 18px", color: "var(--white)", fontSize: 14, minWidth: 220,
              }}
            />
          </div>

          <div className="grid-auto">
            {filtered.length ? filtered.map((p, i) => (
              <Reveal key={p.id} delay={i * 40}><SquadPlayerCard player={p} /></Reveal>
            )) : <p className="text-muted">No players found.</p>}
          </div>
        </div>
      </section>
    </>
  );
}
