import SectionTitle from "../components/SectionTitle";
import SponsorCard from "../components/SponsorCard";
import Reveal from "../components/Reveal";
import { sponsors } from "../data/mockData";

export default function Sponsors() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">Partnerships</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(32px,5vw,52px)" }}>Our Sponsors</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="sponsor-tier-label">Title Sponsor</div>
            <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))", marginBottom: 48 }}>
              <SponsorCard name={sponsors.title} />
            </div>
          </Reveal>

          <Reveal>
            <div className="sponsor-tier-label">Principal Partners</div>
            <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(180px,1fr))", marginBottom: 48 }}>
              {sponsors.principal.map((s) => <SponsorCard key={s} name={s} />)}
            </div>
          </Reveal>

          <Reveal>
            <div className="sponsor-tier-label">Official Partners</div>
            <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(180px,1fr))" }}>
              {sponsors.official.map((s) => <SponsorCard key={s} name={s} />)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <div>
                <h3>Become A Partner</h3>
                <p>Align your brand with one of IPL's most exciting franchises. Get in touch with our partnerships team.</p>
              </div>
              <a href="/contact" className="btn btn-gold">Contact Us</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
