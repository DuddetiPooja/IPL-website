import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import FanPollWidget from "../components/FanPollWidget";
import Reveal from "../components/Reveal";
import { liveMatch, fanPoll } from "../data/mockData";

export default function MatchCenter() {
  const [tab, setTab] = useState("scorecard");

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <span className="tag" style={{ marginBottom: 12 }}>🔴 {liveMatch.status}</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(28px,4.5vw,46px)" }}>SRH vs RCB — Match Center</h1>
          <p className="text-muted">{liveMatch.venue}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="card" style={{ padding: 28, marginBottom: 36 }}>
              <div className="flex-between" style={{ flexWrap: "wrap", gap: 20 }}>
                <div>
                  <div className="eyebrow">{liveMatch.teamA.name}</div>
                  <div className="hero-title" style={{ fontSize: 40 }}>{liveMatch.teamA.score}</div>
                  <div className="text-muted">Overs: {liveMatch.teamA.overs}</div>
                </div>
                <div style={{ fontSize: 20, color: "var(--muted-2)", fontWeight: 800 }}>VS</div>
                <div style={{ textAlign: "right" }}>
                  <div className="eyebrow">{liveMatch.teamB.name}</div>
                  <div className="hero-title" style={{ fontSize: 40 }}>{liveMatch.teamB.score}</div>
                  <div className="text-muted">{liveMatch.teamB.overs}</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
            {["scorecard", "commentary", "wagon wheel", "summary"].map((t) => (
              <button key={t} className={`btn btn-sm ${tab === t ? "btn-primary" : "btn-outline"}`} onClick={() => setTab(t)} style={{ textTransform: "capitalize" }}>
                {t}
              </button>
            ))}
          </div>

          {tab === "scorecard" && (
            <div className="grid-auto" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <Reveal>
                <div className="card" style={{ padding: 20 }}>
                  <h3 style={{ marginTop: 0, fontSize: 16 }}>Batting</h3>
                  <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
                    <thead><tr className="text-muted"><td>Batter</td><td>R</td><td>B</td><td>4s</td><td>6s</td><td>SR</td></tr></thead>
                    <tbody>
                      {liveMatch.battingStats.map((b) => (
                        <tr key={b.name} style={{ borderTop: "1px solid var(--border)" }}>
                          <td style={{ padding: "8px 0", fontWeight: 700 }}>{b.name}</td>
                          <td>{b.runs}</td><td>{b.balls}</td><td>{b.fours}</td><td>{b.sixes}</td><td>{b.sr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="card" style={{ padding: 20 }}>
                  <h3 style={{ marginTop: 0, fontSize: 16 }}>Bowling</h3>
                  <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
                    <thead><tr className="text-muted"><td>Bowler</td><td>O</td><td>M</td><td>R</td><td>W</td><td>Eco</td></tr></thead>
                    <tbody>
                      {liveMatch.bowlingStats.map((b) => (
                        <tr key={b.name} style={{ borderTop: "1px solid var(--border)" }}>
                          <td style={{ padding: "8px 0", fontWeight: 700 }}>{b.name}</td>
                          <td>{b.overs}</td><td>{b.maidens}</td><td>{b.runs}</td><td>{b.wickets}</td><td>{b.economy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="card" style={{ padding: 20, gridColumn: "1 / -1" }}>
                  <h3 style={{ marginTop: 0, fontSize: 16 }}>Partnerships</h3>
                  {liveMatch.partnerships.map((p) => (
                    <div key={p.wicket} className="text-muted">{p.wicket}: <b style={{ color: "var(--white)" }}>{p.runs} runs</b> off {p.balls} balls</div>
                  ))}
                </div>
              </Reveal>
            </div>
          )}

          {tab === "commentary" && (
            <Reveal>
              <div className="card" style={{ padding: 20 }}>
                {liveMatch.commentary.map((c, i) => (
                  <div key={i} style={{ padding: "12px 0", borderBottom: i < liveMatch.commentary.length - 1 ? "1px solid var(--border)" : "none", fontSize: 14 }}>{c}</div>
                ))}
              </div>
            </Reveal>
          )}

          {tab === "wagon wheel" && (
            <Reveal>
              <div className="card" style={{ padding: 30, display: "flex", justifyContent: "center" }}>
                <svg width="280" height="280" viewBox="0 0 280 280">
                  <circle cx="140" cy="140" r="130" fill="none" stroke="var(--border)" strokeWidth="2" />
                  <circle cx="140" cy="140" r="6" fill="var(--gold)" />
                  {[20,70,110,160,200,250,300,340].map((deg, i) => {
                    const rad = (deg * Math.PI) / 180;
                    const len = 60 + (i % 3) * 25;
                    const x = 140 + len * Math.cos(rad);
                    const y = 140 + len * Math.sin(rad);
                    return <line key={i} x1="140" y1="140" x2={x} y2={y} stroke="var(--orange)" strokeWidth="2" opacity="0.8" />;
                  })}
                </svg>
              </div>
              <p className="text-muted" style={{ fontSize: 12.5, textAlign: "center", marginTop: 10 }}>Wagon wheel — mock shot distribution</p>
            </Reveal>
          )}

          {tab === "summary" && (
            <Reveal>
              <div className="card" style={{ padding: 24 }}>
                <p>SRH posted a strong total in the powerplay, with Travis Head and Abhishek Sharma setting up a platform for a big score. RCB now need a record chase to win this contest at Chinnaswamy.</p>
              </div>
            </Reveal>
          )}

          <div style={{ marginTop: 40, maxWidth: 480 }}>
            <Reveal><FanPollWidget poll={fanPoll} /></Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
