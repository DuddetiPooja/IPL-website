import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { pointsTable } from "../data/mockData";

export default function PointsTable() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">IPL 2025</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(32px,5vw,52px)" }}>Points Table</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="card" style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
                <thead>
                  <tr className="text-muted" style={{ fontSize: 12.5, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    <td style={cell}>Pos</td><td style={cell}>Team</td><td style={cell}>P</td><td style={cell}>W</td><td style={cell}>L</td><td style={cell}>NRR</td><td style={cell}>Pts</td>
                  </tr>
                </thead>
                <tbody>
                  {pointsTable.map((row) => (
                    <tr key={row.team} style={{ borderTop: "1px solid var(--border)", background: row.team === "SRH" ? "rgba(255,107,0,0.08)" : "transparent" }}>
                      <td style={cell}>{row.pos}</td>
                      <td style={{ ...cell, fontWeight: 800 }}>{row.team}</td>
                      <td style={cell}>{row.played}</td>
                      <td style={cell}>{row.won}</td>
                      <td style={cell}>{row.lost}</td>
                      <td style={cell}>{row.nrr}</td>
                      <td style={{ ...cell, color: "var(--gold)", fontWeight: 800 }}>{row.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const cell = { padding: "14px 18px", fontSize: 14 };
