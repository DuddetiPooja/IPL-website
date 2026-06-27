import { useState, useMemo } from "react";
import SectionTitle from "../components/SectionTitle";
import VideoCard from "../components/VideoCard";
import Reveal from "../components/Reveal";
import { videos } from "../data/mockData";

const CATEGORIES = ["All", ...new Set(videos.map((v) => v.category))];

export default function Videos() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => videos.filter((v) =>
    (category === "All" || v.category === category) &&
    v.title.toLowerCase().includes(query.toLowerCase())
  ), [category, query]);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">Watch</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(32px,5vw,52px)" }}>Videos</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="card video-card" style={{ marginBottom: 36 }}>
              <div className="video-card-thumb" style={{ aspectRatio: "16/7" }}>
                <img src={videos[0].thumb} alt={videos[0].title} />
                <div className="video-play"><span style={{ width: 70, height: 70, fontSize: 24 }}>▶</span></div>
                <span className="video-duration">{videos[0].duration}</span>
              </div>
              <div className="video-card-body" style={{ padding: 20 }}>
                <div className="video-card-cat">Featured · {videos[0].category}</div>
                <div className="video-card-title" style={{ fontSize: 20 }}>{videos[0].title}</div>
              </div>
            </div>
          </Reveal>

          <div className="flex-between" style={{ marginBottom: 26, flexWrap: "wrap", gap: 14 }}>
            <div className="scrollx" style={{ paddingBottom: 0 }}>
              {CATEGORIES.map((c) => (
                <button key={c} className={`btn btn-sm ${category === c ? "btn-primary" : "btn-outline"}`} onClick={() => setCategory(c)}>{c}</button>
              ))}
            </div>
            <input
              type="text" placeholder="Search videos..." value={query} onChange={(e) => setQuery(e.target.value)}
              style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 999, padding: "10px 18px", color: "var(--white)", fontSize: 14, minWidth: 180 }}
            />
          </div>

          <div className="grid-auto">
            {filtered.map((v, i) => (
              <Reveal key={v.id} delay={i * 50}><VideoCard video={v} /></Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
