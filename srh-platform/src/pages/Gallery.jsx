import { useState, useMemo } from "react";
import GalleryCard from "../components/GalleryCard";
import { gallery } from "../data/mockData";

const CATEGORIES = ["All", "Match Day", "Squad", "Training", "Victory"];

export default function Gallery() {
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = useMemo(() =>
    gallery.filter((g) => category === "All" || g.category === category)
  , [category]);

  const openAt = (idx) => setActiveIndex(idx);
  const close = () => setActiveIndex(null);
  const next = () => setActiveIndex((i) => (i + 1) % filtered.length);
  const prev = () => setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">SRH Media</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(32px,5.5vw,56px)", marginBottom: 14 }}>Gallery</h1>
          <p className="text-muted" style={{ marginBottom: 14 }}>Moments That Roar</p>
          <span style={{ display: "block", width: 64, height: 3, background: "var(--orange)", borderRadius: 2 }} />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="flex-between" style={{ marginBottom: 28, flexWrap: "wrap", gap: 14 }}>
            <div className="scrollx" style={{ paddingBottom: 0 }}>
              {CATEGORIES.map((c) => (
                <button key={c} className={`btn btn-sm ${category === c ? "btn-primary" : "btn-outline"}`} onClick={() => setCategory(c)}>{c}</button>
              ))}
            </div>
            <span className="text-muted" style={{ fontSize: 13 }}>🖼 Showing {filtered.length} photos</span>
          </div>

          <div className="gallery-grid-uniform">
            {filtered.map((g, i) => (
              <GalleryCard key={g.id} item={g} onClick={() => openAt(i)} />
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox-close" onClick={close}>✕</button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
          <img src={filtered[activeIndex].image} alt="" onClick={(e) => e.stopPropagation()} />
          <button className="lightbox-nav lightbox-next2" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
        </div>
      )}
    </>
  );
}
