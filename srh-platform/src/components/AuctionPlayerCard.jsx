import { Link } from "react-router-dom";

export default function AuctionPlayerCard({ player }) {
  return (
    <Link to={`/squad/${player.id}`} className="card auction-card">
      <div className="auction-card-img">
        <img src={player.photo} alt={player.name} loading="lazy" />
        <span className={`auction-price-badge ${player.retained ? "is-retained" : ""}`}>{player.price}</span>
        {player.retained && <span className="auction-retained-tag">RETAINED</span>}
      </div>
      <div className="auction-card-body">
        <div className="auction-card-name-row">
          <h3 className="auction-card-name">{player.name}</h3>
          <span className="auction-card-country">{player.country}</span>
        </div>
        <span className="tag-pill-gold">{player.role}</span>
        <p className="auction-card-blurb">{player.blurb}</p>
      </div>
    </Link>
  );
}
