import { Link } from "react-router-dom";

export default function CTABanner({ title, sub, ctaLabel, to }) {
  return (
    <div className="cta-banner">
      <div>
        <h3>{title}</h3>
        <p>{sub}</p>
      </div>
      <Link to={to} className="btn btn-gold">{ctaLabel}</Link>
    </div>
  );
}
