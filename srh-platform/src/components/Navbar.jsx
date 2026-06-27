import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { teamStatus } from "../data/mockData";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/auction", label: "IPL Auction" },
  { to: "/squad", label: "Fearless Squad" },
  { to: "/fixtures", label: "Season" },
  { to: "/news", label: "Latest Updates" },
  { to: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <div className="ticker">{teamStatus}</div>
      <header className="navbar">
        <div className="container navbar-inner">
          <Link to="/" className="navbar-brand">
            <span className="navbar-logo">SRH</span>
            <span className="navbar-name">
              <b>SUNRISERS</b>
              <span>HYDERABAD</span>
            </span>
          </Link>

          <nav className="navbar-links">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? "active" : "")}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-actions">
            <button className="navbar-icon-btn" aria-label="Search">🔍</button>
            <Link to="/merchandise" className="btn btn-primary btn-sm">🛍 Shop</Link>
            <Link to="/tickets" className="btn btn-outline btn-sm">Buy Tickets</Link>
            <button className="navbar-burger" aria-label="Open menu" onClick={() => setMenuOpen(true)}>☰</button>
          </div>
        </div>
      </header>
      {menuOpen && <MobileMenu links={NAV_LINKS} onClose={() => setMenuOpen(false)} />}
    </>
  );
}
