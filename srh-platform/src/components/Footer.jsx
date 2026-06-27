import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-newsletter">
          <div>
            <h3>Stay In The Loop</h3>
            <p>Get the latest SRH news, fixtures, and exclusive content.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <div className="navbar-brand" style={{ marginBottom: 14 }}>
              <span className="navbar-logo">SRH</span>
              <span className="navbar-name">
                <b>SUNRISERS</b>
                <span>HYDERABAD</span>
              </span>
            </div>
            <p className="text-muted" style={{ fontSize: 13.5, lineHeight: 1.6 }}>
              The official digital home of Sunrisers Hyderabad — news, fixtures, fan zone, and more.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="X / Twitter">X</a>
              <a href="#" aria-label="YouTube">YT</a>
              <a href="#" aria-label="Facebook">FB</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Team</h4>
            <ul>
              <li><Link to="/squad">Squad</Link></li>
              <li><Link to="/fixtures">Fixtures &amp; Results</Link></li>
              <li><Link to="/match-center">Match Center</Link></li>
              <li><Link to="/points-table">Points Table</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Fan Zone</h4>
            <ul>
              <li><Link to="/fanzone">Fan Zone</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li>📍 Rajiv Gandhi Intl. Stadium, Uppal,<br />Hyderabad, Telangana 500039</li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/sponsors">Sponsors</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Sunrisers Hyderabad. All rights reserved. (Demo content — not an official site)</span>
          <span>Privacy Policy · Terms of Use</span>
        </div>
      </div>
    </footer>
  );
}
