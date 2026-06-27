import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import MatchCard from "../components/MatchCard";
import SquadPlayerCard from "../components/SquadPlayerCard";
import NewsCard from "../components/NewsCard";
import VideoCard from "../components/VideoCard";
import ProductCard from "../components/ProductCard";
import SponsorCard from "../components/SponsorCard";
import StatCard from "../components/StatCard";
import CTABanner from "../components/CTABanner";
import FanPollWidget from "../components/FanPollWidget";
import Reveal from "../components/Reveal";
import {
  stats, players, fixtures, news, videos, products, sponsors, fanPoll, gallery,
} from "../data/mockData";

export default function Home() {
  const statsRef = useRef(null);
  const [statsStarted, setStatsStarted] = useState(false);
  const upcomingMatch = fixtures.find((f) => f.status === "upcoming");
  const featuredOrder = ["pat-cummins", "travis-head", "heinrich-klaasen", "abhishek-sharma", "nitish-reddy"];
  const featuredPlayers = featuredOrder.map((id) => players.find((p) => p.id === id)).filter(Boolean);
  const featuredProducts = products.slice(0, 4);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStatsStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Hero />

      {/* Upcoming Match */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="IPL 2025" title="Upcoming Match" action={<Link to="/fixtures" className="btn btn-outline btn-sm">Full Schedule</Link>} />
          </Reveal>
          <Reveal><MatchCard match={upcomingMatch} showCountdown /></Reveal>
        </div>
      </section>

      {/* Team Statistics */}
      <section className="section" ref={statsRef} style={{ background: "var(--surface)" }}>
        <div className="container">
          <Reveal><SectionTitle eyebrow="By The Numbers" title="Team Statistics" /></Reveal>
          <div className="grid-auto">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <StatCard stat={s} start={statsStarted} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Players */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="IPL 2026 · Key Players" title="Fearless Squad" action={<Link to="/squad" className="btn btn-outline btn-sm">View All 25 →</Link>} />
          </Reveal>
          <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))" }}>
            {featuredPlayers.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}><SquadPlayerCard player={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Latest" title="News & Updates" action={<Link to="/news" className="btn btn-outline btn-sm">All News →</Link>} />
          </Reveal>
          <div className="grid-auto" style={{ gridTemplateColumns: "1.4fr 1fr" }}>
            <Reveal><NewsCard item={news[0]} featured /></Reveal>
            <Reveal delay={80}><NewsCard item={news[1]} /></Reveal>
          </div>
        </div>
      </section>

      {/* Match Highlights */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Watch" title="Match Highlights" action={<Link to="/videos" className="btn btn-outline btn-sm">All Videos →</Link>} />
          </Reveal>
          <div className="scrollx">
            {videos.slice(0, 4).map((v, i) => (
              <Reveal key={v.id} delay={i * 70} className="" >
                <div style={{ width: 300 }}><VideoCard video={v} /></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Merchandise Preview */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Orange Vault" title="Merchandise" action={<Link to="/merchandise" className="btn btn-primary btn-sm">Shop Now</Link>} />
          </Reveal>
          <div className="grid-auto">
            {featuredProducts.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <ProductCard product={p} onOpen={() => {}} onAddToCart={() => {}} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fan Zone Preview */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Community" title="Fan Zone" action={<Link to="/fanzone" className="btn btn-outline btn-sm">Explore →</Link>} />
          </Reveal>
          <Reveal><FanPollWidget poll={fanPoll} /></Reveal>
        </div>
      </section>

      {/* Sponsors */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <Reveal><SectionTitle eyebrow="Partnerships" title="Our Sponsors" /></Reveal>
          <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px,1fr))" }}>
            <Reveal><SponsorCard name={sponsors.title} /></Reveal>
            {sponsors.principal.map((s) => <Reveal key={s}><SponsorCard name={s} /></Reveal>)}
            {sponsors.official.map((s) => <Reveal key={s}><SponsorCard name={s} /></Reveal>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal>
            <CTABanner
              title="Join Orange Rewards"
              sub="Watch content, attend matches, and earn points towards exclusive SRH merchandise and VIP experiences."
              ctaLabel="Join For Free"
              to="/fanzone"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
