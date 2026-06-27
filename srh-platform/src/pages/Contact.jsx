import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { faqs } from "../data/mockData";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [sent, setSent] = useState(false);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">Get In Touch</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(32px,5vw,52px)" }}>Contact Us</h1>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40 }}>
          <Reveal>
            <div className="card" style={{ padding: 28 }}>
              <h3 style={{ marginTop: 0 }}>Send Us A Message</h3>
              {sent ? (
                <p style={{ color: "var(--gold)" }}>Thanks — your message has been sent (demo only).</p>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "grid", gap: 14 }}>
                  <input required placeholder="Full Name" style={inputStyle} />
                  <input required type="email" placeholder="Email Address" style={inputStyle} />
                  <input placeholder="Subject" style={inputStyle} />
                  <textarea required placeholder="Your Message" rows={5} style={{ ...inputStyle, resize: "vertical" }} />
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="card" style={{ padding: 28, marginBottom: 20 }}>
              <h3 style={{ marginTop: 0 }}>Office Address</h3>
              <p className="text-muted" style={{ lineHeight: 1.7 }}>
                Rajiv Gandhi International Cricket Stadium,<br />
                Uppal, Hyderabad, Telangana 500039, India
              </p>
              <div className="footer-social" style={{ marginTop: 14 }}>
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="X / Twitter">X</a>
                <a href="#" aria-label="YouTube">YT</a>
                <a href="#" aria-label="Facebook">FB</a>
              </div>
            </div>
            <div className="card" style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)" }}>
              🗺 Map Placeholder
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal><SectionTitle eyebrow="Help" title="Frequently Asked Questions" /></Reveal>
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <div className="card" style={{ marginBottom: 12, padding: "16px 20px", cursor: "pointer" }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="flex-between">
                  <b style={{ fontSize: 14.5 }}>{f.q}</b>
                  <span>{openFaq === i ? "−" : "+"}</span>
                </div>
                {openFaq === i && <p className="text-muted" style={{ marginTop: 10, marginBottom: 0, fontSize: 13.5, lineHeight: 1.6 }}>{f.a}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

const inputStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid var(--border)",
  borderRadius: 10,
  padding: "12px 14px",
  color: "var(--white)",
  fontSize: 14,
  fontFamily: "inherit",
};
