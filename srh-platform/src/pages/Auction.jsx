import Reveal from "../components/Reveal";
import AuctionPlayerCard from "../components/AuctionPlayerCard";
import { auctionSummary, auctionSquad } from "../data/mockData";

const CATEGORY_COLOR = {
  "Batter": "#4FA3E0",
  "Bowler": "#4CAF6D",
  "All-Rounder": "#FF6B00",
  "Wicket-Keeper": "#E0507A",
};

export default function Auction() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">IPL 2026 Auction</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(32px,5.5vw,56px)" }}>Squad Assembly</h1>
          <p className="text-muted" style={{ maxWidth: 640, marginBottom: 28 }}>
            25-player squad built under head coach {auctionSummary.headCoach} and captain {auctionSummary.captain} —{" "}
            {auctionSummary.retentions} retentions and {auctionSummary.auctionPicks} auction picks.
          </p>

          <div className="grid-auto" style={{ gridTemplateColumns: "repeat(4, minmax(140px,1fr))", maxWidth: 760 }}>
            <div className="card" style={{ padding: "16px 20px" }}>
              <div className="text-muted" style={{ fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>Retention Spent</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>{auctionSummary.retentionSpent}</div>
            </div>
            <div className="card" style={{ padding: "16px 20px" }}>
              <div className="text-muted" style={{ fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>Auction Spend</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--gold)" }}>{auctionSummary.auctionSpend}</div>
            </div>
            <div className="card" style={{ padding: "16px 20px", border: "1px solid var(--orange)" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6, color: "var(--orange)" }}>Purse Left</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--orange)" }}>{auctionSummary.purseLeft}</div>
            </div>
            <div className="card" style={{ padding: "16px 20px" }}>
              <div className="text-muted" style={{ fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>Total Players</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>{auctionSummary.totalPlayers}</div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {auctionSquad.map((group, gi) => {
            const retainedCount = group.players.filter((p) => p.retained).length;
            const color = CATEGORY_COLOR[group.category] || "var(--orange)";
            return (
              <div key={group.category} style={{ marginBottom: 48 }}>
                <div className="auction-category-header">
                  <span className="auction-category-pill" style={{ borderColor: color, color }}>
                    {group.category.toUpperCase()}
                  </span>
                  <span className="auction-category-line" />
                  <span className="text-muted" style={{ fontSize: 12.5 }}>{retainedCount} retained</span>
                </div>
                <div className="grid-auto">
                  {group.players.map((p, i) => (
                    <Reveal key={p.id} delay={i * 50}><AuctionPlayerCard player={p} /></Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
