import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { csrPrograms, communityTimeline } from "../data/mockData";

export default function Community() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">Social Impact</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(32px,5vw,52px)" }}>Community</h1>
          <p className="text-muted" style={{ maxWidth: 560 }}>
            Sunrisers Hyderabad's CSR initiatives and grassroots programs bringing cricket to communities across Telangana.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal><SectionTitle eyebrow="Programs" title="CSR Activities" /></Reveal>
          <div className="grid-auto">
            {csrPrograms.map((p, i) => (
              <Reveal key={p.id} delay={i * 70}>
                <div className="card" style={{ overflow: "hidden" }}>
                  <img src={p.image} alt={p.title} style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover" }} />
                  <div style={{ padding: 18 }}>
                    <h3 style={{ fontSize: 16, marginBottom: 8 }}>{p.title}</h3>
                    <p className="text-muted" style={{ fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <Reveal><SectionTitle eyebrow="Our Journey" title="Events Timeline" /></Reveal>
          <div style={{ borderLeft: "2px solid var(--border)", paddingLeft: 24 }}>
            {communityTimeline.map((c, i) => (
              <Reveal key={c.year} delay={i * 70}>
                <div style={{ marginBottom: 26, position: "relative" }}>
                  <span style={{ position: "absolute", left: -30, top: 4, width: 10, height: 10, borderRadius: "50%", background: "var(--orange)" }} />
                  <div className="eyebrow" style={{ marginBottom: 2 }}>{c.year}</div>
                  <div>{c.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
