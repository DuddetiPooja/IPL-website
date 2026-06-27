import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

const TEAM_COLORS = {
  SRH: "#FF6B00", RCB: "#A91D2C", CSK: "#F2C12E", MI: "#1D4ED8",
  KKR: "#3B0764", PBKS: "#C026D3", GT: "#0F766E", DC: "#1E3A8A", RR: "#E11D48",
};

export default function MatchCard({ match, showCountdown }) {
  const isCompleted = match.status === "completed";

  return (
    <div className="card match-card">
      <div className="match-card-top">
        <span>Match {match.id} · {match.season}</span>
        <span className="tag tag-muted">{match.homeAway}</span>
      </div>

      <div className="match-row">
        <div className="match-team">
          <div className="match-team-badge" style={{ background: TEAM_COLORS[match.teamA] || "#FF6B00" }}>{match.teamA}</div>
          <span className="match-team-name">{match.teamA}</span>
        </div>
        <div className="match-vs">{isCompleted ? "FINAL" : "VS"}<br />T20 · IPL</div>
        <div className="match-team">
          <div className="match-team-badge" style={{ background: TEAM_COLORS[match.teamB] || "#444" }}>{match.teamB}</div>
          <span className="match-team-name">{match.teamB}</span>
        </div>
      </div>

      {isCompleted ? (
        <>
          <div className="match-scores"><span>{match.teamA}</span><span>{match.scoreA}</span></div>
          <div className="match-scores"><span>{match.teamB}</span><span>{match.scoreB}</span></div>
          <div className="match-result">{match.result}</div>
        </>
      ) : (
        <div className="match-meta">
          <span>📅 {match.date}</span>
          <span>🕗 {match.time}</span>
          <span>📍 {match.venue}</span>
        </div>
      )}

      {showCountdown && !isCompleted && (
        <div style={{ marginBottom: 16 }}>
          <CountdownTimer target={new Date(match.date + " " + match.time.replace(" IST", ""))} />
        </div>
      )}

      <div className="match-card-actions">
        {isCompleted ? (
          <Link to="/match-center" className="btn btn-outline btn-sm btn-block">Match Summary</Link>
        ) : (
          <>
            <Link to="/tickets" className="btn btn-primary btn-sm btn-block">Buy Tickets</Link>
            <Link to="/fixtures" className="btn btn-outline btn-sm btn-block">All Fixtures</Link>
          </>
        )}
      </div>
    </div>
  );
}
