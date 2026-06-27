import { Link } from "react-router-dom";

export default function PlayerCard({ player }) {
  return (
    <Link to={`/squad/${player.id}`} className="player-card">
      <img src={player.photo} alt={player.name} loading="lazy" />
      <div className="player-card-overlay" />
      <span className="player-card-number">{player.number}</span>
      {player.tag && <span className="tag tag-gold player-card-tag">{player.tag}</span>}
      <div className="player-card-info">
        <div className="player-card-role">{player.role}</div>
        <div className="player-card-name">{player.name}</div>
        <div className="player-card-stats">
          {player.role === "Bowler" ? (
            <>
              <div><b>{player.wickets}</b>wkts</div>
              <div><b>{player.economy}</b>Eco</div>
            </>
          ) : (
            <>
              <div><b>{player.runs.toLocaleString()}</b>runs</div>
              <div><b>{player.strikeRate}</b>SR</div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
