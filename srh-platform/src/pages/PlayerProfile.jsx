import { useParams, Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { players, gallery, videos } from "../data/mockData";

export default function PlayerProfile() {
  const { id } = useParams();
  const player = players.find((p) => p.id === id) || players[0];

  return (
    <>
      <section style={{ position: "relative", padding: "60px 0 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ display: "flex", gap: 40, flexWrap: "wrap", alignItems: "flex-end" }}>
          <div style={{ flex: "0 0 260px" }}>
            <img src={player.photo} alt={player.name} style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: "var(--radius-md)" }} />
          </div>
          <div style={{ flex: 1, paddingBottom: 40 }}>
            {player.tag && <span className="tag tag-gold" style={{ marginBottom: 12 }}>{player.tag}</span>}
            <div className="eyebrow">#{player.number} · {player.country}</div>
            <h1 className="hero-title" style={{ fontSize: "clamp(32px,5vw,54px)" }}>{player.name}</h1>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginTop: 16, marginBottom: 18, fontSize: 14 }}>
              <div><span className="text-muted">Role</span><br /><b>{player.role}</b></div>
              <div><span className="text-muted">Batting</span><br /><b>{player.battingStyle}</b></div>
              <div><span className="text-muted">Bowling</span><br /><b>{player.bowlingStyle}</b></div>
            </div>
            <p className="text-muted" style={{ maxWidth: 540, lineHeight: 1.6 }}>{player.bio}</p>
            <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
              <a href="#" className="btn btn-outline btn-sm">Instagram</a>
              <a href="#" className="btn btn-outline btn-sm">X / Twitter</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><SectionTitle eyebrow="Career" title="Statistics Dashboard" /></Reveal>
          <div className="grid-auto">
            <div className="card stat-card"><div className="stat-card-value">{player.matches}</div><div className="stat-card-label">Matches</div></div>
            <div className="card stat-card"><div className="stat-card-value">{player.runs}</div><div className="stat-card-label">Runs</div></div>
            <div className="card stat-card"><div className="stat-card-value">{player.wickets}</div><div className="stat-card-label">Wickets</div></div>
            <div className="card stat-card"><div className="stat-card-value">{player.strikeRate}</div><div className="stat-card-label">Strike Rate</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <Reveal><SectionTitle eyebrow="Performance" title="Season Trend" /></Reveal>
          <div className="card" style={{ padding: 28 }}>
            <svg viewBox="0 0 600 180" width="100%" height="180" preserveAspectRatio="none">
              <polyline
                points="0,140 100,110 200,120 300,60 400,90 500,40 600,55"
                fill="none" stroke="var(--orange)" strokeWidth="3"
              />
              {[140,110,120,60,90,40,55].map((y, i) => (
                <circle key={i} cx={i * 100} cy={y} r="5" fill="var(--gold)" />
              ))}
            </svg>
            <p className="text-muted" style={{ fontSize: 12.5, marginTop: 8 }}>Runs / wickets impact trend across last 7 matches (mock data)</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><SectionTitle eyebrow="Journey" title="Career Timeline" /></Reveal>
          <div style={{ borderLeft: "2px solid var(--border)", paddingLeft: 24 }}>
            {player.career.map((c, i) => (
              <Reveal key={i} delay={i * 70}>
                <div style={{ marginBottom: 22, position: "relative" }}>
                  <span style={{ position: "absolute", left: -30, top: 4, width: 10, height: 10, borderRadius: "50%", background: "var(--orange)" }} />
                  <div className="eyebrow" style={{ marginBottom: 2 }}>{c.year}</div>
                  <div>{c.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <Reveal><SectionTitle eyebrow="Media" title="Gallery & Videos" /></Reveal>
          <div className="gallery-grid" style={{ marginBottom: 24 }}>
            {gallery.slice(0, 3).map((g) => (
              <div key={g.id} className="gallery-item"><img src={g.image} alt="" /></div>
            ))}
          </div>
          <div className="scrollx">
            {videos.slice(0, 3).map((v) => (
              <div key={v.id} style={{ width: 280 }} className="card video-card">
                <div className="video-card-thumb"><img src={v.thumb} alt={v.title} /><div className="video-play"><span>▶</span></div></div>
                <div className="video-card-body"><div className="video-card-title">{v.title}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: 60 }}>
        <Link to="/squad" className="btn btn-outline">← Back to Squad</Link>
      </div>
    </>
  );
}
