import { Link } from "react-router-dom";

export default function MobileMenu({ links, onClose }) {
  return (
    <>
      <div className="mobile-menu-overlay" onClick={onClose} />
      <div className="mobile-menu">
        <button className="mobile-menu-close" aria-label="Close menu" onClick={onClose}>✕</button>
        {links.map((l) => (
          <Link key={l.to} to={l.to} onClick={onClose}>{l.label}</Link>
        ))}
        <Link to="/merchandise" className="btn btn-primary btn-block" onClick={onClose}>🛍 Shop</Link>
        <Link to="/tickets" className="btn btn-outline btn-block" onClick={onClose}>Buy Tickets</Link>
      </div>
    </>
  );
}
