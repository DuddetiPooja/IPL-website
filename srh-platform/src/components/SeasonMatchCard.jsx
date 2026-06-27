const BORDER_COLOR = {
  won: "#22C55E",
  lost: "#E11D48",
  upcoming: "var(--border)",
};

export default function SeasonMatchCard({ match }) {
  return (
    <div className="season-match-card" style={{ borderLeftColor: BORDER_COLOR[match.outcome] }}>
      <div className="season-match-top">
        <div className="season-match-label">
          <b>{match.label}</b>
          {match.statusTag && <span className="tag tag-muted">{match.statusTag}</span>}
        </div>
        <span className="tag-outline-gold">{match.tournamentTag}</span>
      </div>

      <div className="season-match-meta">{match.date} &nbsp;|&nbsp; {match.time} &nbsp;&nbsp;{match.venue}</div>

      <div className="season-match-score-row">
        <div className="season-match-side">
          <span className="season-dot" style={{ background: match.teamA.dotColor }} />
          <span className="season-code">{match.teamA.code}</span>
          <span className="season-score">{match.teamA.score}</span>
        </div>
        <span className="season-vs">vs</span>
        <div className="season-side-right">
          <span className="season-score">{match.teamB.score}</span>
          <span className="season-code">{match.teamB.code}</span>
          <span className="season-dot" style={{ background: match.teamB.dotColor }} />
        </div>
      </div>

      <div className="season-match-names">
        <span>{match.teamA.name}</span>
        <span>{match.teamB.name}</span>
      </div>

      <div className="season-match-bottom">
        <span className="season-result-text">
          {match.outcome === "upcoming" ? "Match yet to be played" : match.result}
        </span>
        <button className="btn btn-outline btn-sm">Matchcentre →</button>
      </div>
    </div>
  );
}
