import { useParams, Link } from "react-router-dom";
import { news } from "../data/mockData";

export default function NewsArticle() {
  const { id } = useParams();
  const article = news.find((n) => String(n.id) === id) || news[0];

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <Link to="/news" className="text-muted" style={{ fontSize: 13 }}>← Back to News</Link>
        <div className="eyebrow" style={{ marginTop: 20 }}>{article.category}</div>
        <h1 className="hero-title" style={{ fontSize: "clamp(28px,4.5vw,44px)" }}>{article.title}</h1>
        <div className="text-muted" style={{ marginBottom: 24 }}>{article.date} · {article.readTime}</div>
        <img src={article.image} alt={article.title} style={{ width: "100%", borderRadius: "var(--radius-md)", marginBottom: 24 }} />
        <p style={{ lineHeight: 1.8, fontSize: 16 }}>{article.excerpt}</p>
        <p style={{ lineHeight: 1.8, fontSize: 16, color: "var(--muted)" }}>
          This is placeholder article copy for demo purposes. In a production build, full article content
          would be loaded from the CMS or API backing this page.
        </p>
      </div>
    </section>
  );
}
