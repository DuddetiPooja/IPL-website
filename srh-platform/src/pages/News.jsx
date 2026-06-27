import { useState, useMemo } from "react";
import SectionTitle from "../components/SectionTitle";
import NewsCard from "../components/NewsCard";
import Reveal from "../components/Reveal";
import { news } from "../data/mockData";

const CATEGORIES = ["All", ...new Set(news.map((n) => n.category))];

export default function News() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => news.filter((n) =>
    (category === "All" || n.category === category) &&
    n.title.toLowerCase().includes(query.toLowerCase())
  ), [category, query]);

  const trending = news.slice(0, 3);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">SRH Media</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(32px,5vw,52px)" }}>News & Updates</h1>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "2.3fr 1fr", gap: 40 }}>
          <div>
            <div className="flex-between" style={{ marginBottom: 26, flexWrap: "wrap", gap: 14 }}>
              <div className="scrollx" style={{ paddingBottom: 0 }}>
                {CATEGORIES.map((c) => (
                  <button key={c} className={`btn btn-sm ${category === c ? "btn-primary" : "btn-outline"}`} onClick={() => setCategory(c)}>{c}</button>
                ))}
              </div>
              <input
                type="text" placeholder="Search news..." value={query} onChange={(e) => setQuery(e.target.value)}
                style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 999, padding: "10px 18px", color: "var(--white)", fontSize: 14, minWidth: 180 }}
              />
            </div>
            <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))" }}>
              {filtered.length ? filtered.map((n, i) => (
                <Reveal key={n.id} delay={i * 50}><NewsCard item={n} /></Reveal>
              )) : <p className="text-muted">No articles found.</p>}
            </div>
          </div>

          <aside>
            <h4 style={{ fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--orange)" }}>Trending Now</h4>
            {trending.map((n, i) => (
              <Reveal key={n.id} delay={i * 60}>
                <div style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "flex-start" }}>
                  <span className="hero-title" style={{ fontSize: 28, color: "var(--surface-2)", WebkitTextStroke: "1px var(--orange)" }}>{i + 1}</span>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, lineHeight: 1.4, marginBottom: 4 }}>{n.title}</div>
                    <div className="text-muted" style={{ fontSize: 11.5 }}>{n.date}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
