import { Link } from "react-router-dom";

const ROLE_CLASS = {
  "Bowler": "role-bowler",
  "Batter": "role-batter",
  "All-Rounder": "role-allrounder",
  "Wicket-Keeper": "role-keeper",
};

export default function SquadPlayerCard({ player }) {
  const [first, ...rest] = player.name.split(" ");
  const last = rest.join(" ");

  return (
    <Link to={`/squad/${player.id}`} className="squad-card">
      <div className="squad-card-img">
        <img src={player.photo} alt={player.name} loading="lazy" />
        {player.tag && <span className="squad-card-tag">{player.tag}</span>}
        <span className="squad-card-number">{player.number}</span>
      </div>
      <div className="squad-card-body">
        <div className="squad-card-namewrap">
          <span className="squad-card-first">{first}</span>
          <span className="squad-card-last">{last}</span>
        </div>
        <div className="squad-card-meta">
          <span className={`role-pill ${ROLE_CLASS[player.role] || ""}`}>{player.role.toUpperCase()}</span>
          <span className="squad-card-country">{player.country}</span>
        </div>
        {player.blurb && <div className="squad-card-blurb">{player.blurb}</div>}
      </div>
    </Link>
  );
}
