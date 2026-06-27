import SectionTitle from "../components/SectionTitle";
import FanPollWidget from "../components/FanPollWidget";
import QuizWidget from "../components/QuizWidget";
import Reveal from "../components/Reveal";
import { fanPoll, quizzes, rewards, leaderboard, fanWall } from "../data/mockData";

export default function FanZone() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">Community</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(32px,5vw,52px)" }}>Fan Zone</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-auto" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
            <Reveal><FanPollWidget poll={fanPoll} /></Reveal>
            <Reveal delay={70}>
              <div>
                <div className="poll-head" style={{ marginBottom: 14 }}>❓ Quizzes</div>
                {quizzes.map((q) => <QuizWidget key={q.id} quiz={q} />)}
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="card rewards-card">
                <span className="tag tag-gold" style={{ marginBottom: 14 }}>★ Orange Rewards</span>
                <h3 style={{ fontFamily: "var(--font-display)", margin: "0 0 8px", textTransform: "uppercase", fontSize: 20 }}>Earn Points. Unlock Rewards.</h3>
                <p className="text-muted" style={{ fontSize: 13.5, lineHeight: 1.6, marginBottom: 18 }}>
                  Watch content, attend matches, participate in polls and quizzes — unlock exclusive SRH merchandise, signed memorabilia, and VIP experiences.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
                  {rewards.map((r) => (
                    <div key={r.action} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "10px 12px" }}>
                      <div style={{ color: "var(--gold)", fontWeight: 800, fontSize: 13 }}>+{r.points} pts</div>
                      <div className="text-muted" style={{ fontSize: 11.5 }}>{r.action}</div>
                    </div>
                  ))}
                </div>
                <button className="btn btn-primary btn-block">Join For Free</button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <Reveal><SectionTitle eyebrow="Top Fans" title="Leaderboard" /></Reveal>
          <div className="card" style={{ padding: 8 }}>
            {leaderboard.map((l, i) => (
              <Reveal key={l.rank} delay={i * 40}>
                <div className="flex-between" style={{ padding: "14px 18px", borderBottom: i < leaderboard.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--font-display)", color: l.rank <= 3 ? "var(--gold)" : "var(--muted)", width: 24 }}>{l.rank}</span>
                    <span style={{ fontWeight: 700 }}>{l.name}</span>
                  </div>
                  <span className="text-muted">{l.points.toLocaleString()} pts</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><SectionTitle eyebrow="#OrangeArmy" title="Fan Wall" /></Reveal>
          <div className="grid-auto">
            {fanWall.map((f, i) => (
              <Reveal key={f.id} delay={i * 60}>
                <div className="card" style={{ padding: 20 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                    <img src={f.photo} alt={f.name} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
                    <b style={{ fontSize: 14 }}>{f.name}</b>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <div>
                <h3>Become An Orange Army Member</h3>
                <p>Unlock exclusive content, pre-sale tickets, and member-only experiences all season long.</p>
              </div>
              <button className="btn btn-gold">Join Membership</button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
